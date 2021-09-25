import React from 'react';

const Incrementer = ({incrementFct,decrementState})=>{
    
    return(
        <>
        <button onClick={incrementFct}>+</button>
        <button onClick={decrementState}>-</button>
        </>
    )
}
export default Incrementer;