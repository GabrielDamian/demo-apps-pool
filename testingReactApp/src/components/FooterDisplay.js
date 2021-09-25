import React,{useState, useEffect} from 'react';

const FooterDisplay = ({data})=>{

    //pentru data == 99, elementul devine cu opacity: 0 else opacity: 1
    const [classCustom, setClassCustom] = useState(0);
    useEffect(()=>{
        if(data == 99)
        {
            setClassCustom(0)
        }
        else 
        {
            setClassCustom(1)
        }
    },[data])
    return(
        <div data-testid="my-div-id">
        <p style={{
            opacity: classCustom
        }}>{data <= 1 ? `just one`: `data ${data}` }</p>
        <h4>Test h4</h4>
        <input value="4" data-testid="my-input-id"></input>
        </div>
    )
}
export default FooterDisplay;