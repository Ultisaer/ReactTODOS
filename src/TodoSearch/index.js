import { TodoContext } from '../TodoContext'
import React from "react";
import './TodoSearch.css';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
    loading
  } = React.useContext(TodoContext)
  if (loading) {
    return <div className="TodoSearch">
      <div className="TodoSearch__loading"></div>
    </div>;
  }

  return (
    <input
      placeholder="Filtra tus TODOS aqui"
      className="TodoSearch"
      value={searchValue}
      type="text"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
