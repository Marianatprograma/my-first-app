// import "./App.css";
import {TodoCounter}from './components/TodoCounter';
import {TodoSearch}from './components/TodoSearch';
import {TodoList}from './components/TodoList';
import {TodoItem}from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';




const todos = [

  { text: 'Hacer tarea', completed: false},
  { text: 'Comprar ropa', completed: false},
  { text: 'Vender ', completed: false},
  { text: 'Hacer la cama ', completed: false},

]

function App() {
  
  

  return (
    <>
      
    <TodoCounter numeros="2" />
    
    <TodoSearch/>
    
    <TodoList>
    {todos.map(todo => (<TodoItem  key={todo.text} text={todo.text} />))}
      
    </TodoList>
    <CreateTodoButton/>

   
    
    </>
  );
}

export default App;
