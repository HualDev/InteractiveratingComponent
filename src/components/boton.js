import '../styleSheet/boton.css'

function Boton(props){
    return(
        <button id='boton' onClick={props.submit}>Submit</button>
    )
    
}

export default Boton

