import './Die.css';
function Die({ val, color = 'aqua'}){
    return(
        <div className='Die' style={{backgroundColor: color}}>
            {val}
        </div>
    );
}

export default Die;