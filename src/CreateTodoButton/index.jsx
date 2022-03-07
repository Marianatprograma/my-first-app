import './CreateTodoButton.css';


function CreateTodoButton() {

    const onClickButton = (msg) =>{
      alert(msg);
    };
    return (
      <button className='CreateTodoButton'
      onClick={() => onClickButton('soy el mensaje')}
      
      >+</button>
      
      
    );
  }
  
  export {CreateTodoButton};