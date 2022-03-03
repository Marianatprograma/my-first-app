
import './App.css';
import Mariana from './components/Mariana'; 
import Daniel from './components/Daniel'; 

function App() {


let num = 2 + 3;


  return (
    <div className="App">

      <header className="App-header">
        <h1>Me la suda</h1>
        
        <Mariana/>
        <p>mi numero es: {num}</p>

        <Daniel/>
        
      </header>



    </div>
    
  );
}

export default App;
