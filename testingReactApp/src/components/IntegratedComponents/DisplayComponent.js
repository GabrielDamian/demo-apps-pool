import React from 'react';

const DisplayComponent = ({data})=>{
    return(
        <div data-testid="display-container">
            {
                data.map((el)=>{
                    return <p data-testid="element-id">{el}</p>
                })
            }
        </div>
    )
}
export default DisplayComponent;