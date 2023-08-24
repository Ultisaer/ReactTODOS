import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import { TodosLoading} from '../TodosLoading';
import { TodosError} from '../TodosError';
import { TodosEmpty} from '../TodosEmpty';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm'
import React from 'react';

function AppUI () {
  const {
    openModal,
  } = React.useContext(TodoContext);
  return (
    <> 
      <TodoCounter/>
      <TodoSearch/>
      
      <TodoContext.Consumer>
        {({
          loading, 
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
          { loading && <TodosLoading></TodosLoading>}
          { error &&  <TodosError></TodosError>}
          { (!loading && searchedTodos.length === 0) && <TodosEmpty></TodosEmpty>}
          { searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => completeTodo(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
              />)
              
          )}
          
          </TodoList>

        )}
      </TodoContext.Consumer>
      
      <TodoButton/>

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
    </>
    );
}

export { AppUI }