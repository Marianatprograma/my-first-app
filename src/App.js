// import "./App.css";
import {TodoCounter}from './components/TodoCounter';
import {TodoSearch}from './components/TodoSearch';
import {TodoList}from './components/TodoList';
import {TodoItem}from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';




const todos = [

  { text: 'Hacer tarea', completed: true},
  { text: 'Comprar ropa', completed: true},
  { text: 'Vender ', completed: false},
  { text: 'Hacer la cama ', completed: false},

]

function App() {
  
  

  return (
    <>
      
    <TodoCounter/>
    
    <TodoSearch/>
    
    
    <TodoList>
    {todos.map(todo => (<TodoItem 
     key={todo.text}
     text={todo.text} 
     completed={todo.completed}/>))}
      
    </TodoList>
    <CreateTodoButton/>

   
    
    </>
  );
}

export default App;
