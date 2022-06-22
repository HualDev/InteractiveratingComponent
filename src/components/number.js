import '../styleSheet/number.css'

function Number(props){
    return(
        <div className='number'>
            <p>{props.number}</p>
        </div>
    )
}

export default Number