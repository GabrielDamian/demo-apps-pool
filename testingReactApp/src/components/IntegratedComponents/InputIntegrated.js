import React,{useState} from 'react';

const InputIntegrated = ({addNew})=>{
    const [myState, setMyState] = useState('');

    const handleInputChange= (e)=>
    {
        setMyState(e.target.value);
    }
    const handleInputSubmit = ()=>{
        if(myState != '')
        {
            addNew(myState);
            setMyState('');
        }
    }
    return(
        <>
        <input value={myState} onChange={handleInputChange} data-testid="child-input"/>
        <button onClick={handleInputSubmit} data-testid="child-btn">AddNew</button>
        </>
    )
}
export default InputIntegrated;