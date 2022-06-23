import selectedImage from '../images/illustration-thank-you.svg'
import '../styleSheet/selected.css'

function Selected(){
    return(
        <div className='main selected'>
            <div className='thanksImage'>
                <img  src={selectedImage} alt='Card Selection ' />
            </div>            
            <div className='selection'>You selected 4 out of 5</div>
            <h2>Thank you!</h2>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!
            </p>
        </div>
    )
}

export default Selected