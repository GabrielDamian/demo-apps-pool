import React from 'react';


const Header = ({title})=>{
    
    return(
        <>
        <h1 className="header">{title}</h1>
        <h3 className="header" title="customTitle" data-testid="customID">ASDASDA</h3>
        </>
    )
}
export default Header;
