import React from 'react'
import './components.css';
import { useHistory } from 'react-router';
const Home = () => {
    const history = useHistory();

    return (
        <div className="container">
            <div className="data-container">
                <div className="info-data">
                    <span>There is a login page and a private route.The pivate route let you see the content only if you are logged in (when you log in successfully, server send you back a token that you will use any time to unlock the private route). After you receive a token, it is active for 15s.(user: damian, pass: 123)</span>
                </div>
                <div className="menu-select">
                    <button onClick={()=>{history.push('/private')}}>Private Route</button>
                    <button onClick={()=>{history.push('/login')}}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Home
