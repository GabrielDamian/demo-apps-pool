import React, {useState} from 'react';

const InputComponent = ()=>{
    const [inputState, setInputState] = useState('');
    const [list, setList] = useState([]);
    const handleInputChange= (e)=>{
        setInputState(e.target.value);
    }
    const handleSubmit = ()=>{
        if(inputState == '')
            return

        setList((prev)=>{
            return [...prev, inputState]
        })
        setInputState('');
    }
    return(
        <div>
            <input type="text" value={inputState} onChange={handleInputChange} placeholder="my input"/>
            <button onClick={handleSubmit} data-testid="btn-submit">Submit</button>
            <div data-testid="state-map">
            {
                list.length == 0 ? null : list.map((el)=>{
                    return (<p>{el}</p>)
                })
            }
            </div>
            
        </div>
    )
}

export default InputComponent;