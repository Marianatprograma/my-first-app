import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI() {
  const { 
    error,
     loading, 
     searchedTodos, 
     toggleCompleteTodo, 
     deleteTodo
    } = React.useContext(TodoContext);

  return (
    
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Hubo un error, desesperate </p>}
        {loading && <p>Estamos cargando, no desesperes </p>}

        {!loading && !searchedTodos.length && <p> Crea tu primer TODO </p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
