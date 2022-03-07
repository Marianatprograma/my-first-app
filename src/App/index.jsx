
import React from 'react';
import { AppUI } from './AppUI';


const defaultTodos = [

  { text: 'Hacer tarea', completed: true},
  { text: 'Comprar ropa', completed: true},
  { text: 'Vender ', completed: false},
  { text: 'Hacer la cama ', completed: false},

]

function App() {
  
  const [todos, setTodos] =  React.useState(defaultTodos); 
  const [searchValue, setSearchValue] = React.useState(''); 

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{ 
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);


    });

  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);

  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);

  }


  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}

    />
  );
}

export default App;
