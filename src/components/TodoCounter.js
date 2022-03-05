import './TodoCounter.css';

function TodoCounter({numeros}) {
  return (
    <> <h2 className="TodoCounter">Has completado {numeros} de 3 TODOs</h2> 
    </>
    
  );
}

export {TodoCounter};