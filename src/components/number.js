import '../styleSheet/number.css'

function Number(props){
    return(
        <div onClick={props.value} id={props.id} className='number'>
            <p>{props.number}</p>
        </div>
    )
}

export default Number