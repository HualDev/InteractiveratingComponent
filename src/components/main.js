import starImage from '../images/icon-star.svg'
import '../styleSheet/main.css'
import Number from '../components/number'
import Boton from './boton';
import Selected from './selected';


function Main(){
    return(
        <main className='main'>
            <div className='starImage'>
                <img src={starImage} alt=' yellow Star' />
            </div>

            <h1>How did we do?</h1>

            <p className='text'>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
            </p>

            <div className='numbers'>
               <Number number='1' />
               <Number number='2' />
               <Number number='3' />
               <Number number='4' />
               <Number number='5' />
            </div>
            
            <Boton />            
        </main>

    )
}

export default Main;