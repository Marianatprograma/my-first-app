import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoForm() {
    
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const{
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
        
    const onChange = (event) => {
        setNewTodoValue(event.target.value); 
    }
    const onCancel = () => {
        setOpenModal(false)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length <= 0)return;
        addTodo(newTodoValue);
        onCancel()
    };
    const onKeyUp = (e) => {
        if (e.charCode === 13) {
         onSubmit()
        }
      };
  return (
    <form onSubmit={onSubmit} onKeyPress={onKeyUp}>
        <label>...</label>
        <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder='Estudiar React'
        />
        <div className="buttons">
            <button 
            type='button'
            onClick={onCancel}
            > Cancelar
            </button>
            
            <button
            type='submit'
            > Añadir
            </button>
        </div>

    </form>
  )
}

export {TodoForm};