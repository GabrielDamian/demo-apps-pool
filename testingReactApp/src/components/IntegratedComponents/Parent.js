import React,{useState} from 'react';
import InputIntegrated from './InputIntegrated';
import DisplayComponent from './DisplayComponent';

const Parent = ()=>{
    const [stateData, setStateData] = useState([]);
    
    const addNewTask = (newTask)=>{
        setStateData((prev)=>{
            return [...prev, newTask];
        })
    }

    return(
        <div>
            <InputIntegrated addNew={addNewTask} />
            <DisplayComponent data={stateData} />
        </div>
    )
}
export default Parent;