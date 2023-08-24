import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);
  
        if (!localStorageItem) {
          const defaultTodos = [
            { text: "Ejemplo sin completar", completed: false },
            { text: "Ejemplo completado", completed: true },
          ];
          localStorage.setItem(itemName, JSON.stringify(defaultTodos));
          parsedItem = defaultTodos;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }

      console.log(
        `Hola ya que llegaste hasta aqui, si deseas tener tus TODOS por defecto, los iniciales copia esto y ejecutalo...
        
        localStorage.removeItem("TODOS__DEFAULT--v1")`
        )
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };