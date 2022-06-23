import starImage from '../images/icon-star.svg'
import '../styleSheet/main.css'
import Number from '../components/number'
import Boton from './boton';
import Selected from './selected';


function Main(){

    const submit = () =>{      
      const selected = document.getElementById('selected')
      selected.classList.toggle('show')
    }

    const uno = () =>{
        let valor = document.getElementById('1').textContent
        console.log(valor)
        document.getElementById('1').style.background='hsl(25, 97%, 53%)'        
    }
    

    const dos = () =>{
        let valor = document.getElementById('2').textContent
        console.log(valor)
        
    }

    const tres = () =>{
        let valor = document.getElementById('3').textContent
        console.log(valor)
        
    }

    const cuatro = () =>{
        let valor = document.getElementById('4').textContent
        console.log(valor)
        
    }

    const cinco = () =>{
        let valor = document.getElementById('5').textContent
        console.log(valor)
        
    }

    return(
        <main id='main' className='main'>
            <div className='starImage'>
                <img src={starImage} alt=' yellow Star' />
            </div>

            <h1>How did we do?</h1>

            <p className='text'>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>

            <div className='numbers'>
               <Number id='1' number='1' value = {uno} />
               <Number id='2' number='2' value = {dos} />
               <Number id='3' number='3' value = {tres} />
               <Number id='4' number='4' value = {cuatro} />
               <Number id='5' number='5' value = {cinco} />
            </div>
            
            <Boton submit = {submit} />            
        </main>

    )
}

export default Main;