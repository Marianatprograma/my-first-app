
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';


// const defaultTodos = [

//   { text: 'Hacer tarea', completed: true},
//   { text: 'Comprar ropa', completed: true},
//   { text: 'Vender ', completed: false},
//   { text: 'Hacer la cama ', completed: false},

// ]


function App() {

  return (

    <TodoProvider>

    <AppUI/>

    </TodoProvider>
  );
}

export default App;
