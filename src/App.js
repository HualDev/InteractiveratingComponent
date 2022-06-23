
import logo from './logo.svg';
import './App.css';
import Main from './components/main.js'
import Selected from './components/selected';

function App() {

  const cinco = () =>{
    let valor = document.getElementById('5').textContent
    console.log(valor)
    return valor
}

  return (        
    <>
      <Main />
      <Selected numeroSeleccionado='4' />
    </>
    
    
  );
}

export default App;
