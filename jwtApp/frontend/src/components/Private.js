import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const Private = () => {

    const [acces, setAcces] = useState(null);

    const [err, setErr] = useState('');

    useEffect(()=>{
        const config = {
            headers:{
                'token':localStorage.getItem('token')
            }
        }

        axios.post('http://localhost:4000/api/private',config)
        .then((resp)=>{
            console.log("resp tokne",resp);
            setAcces(resp.data.allow)
        })
        .catch((err)=>{
            setErr('There was a problem while verifying your token.')
            console.log(err);
        })

    },[])
    return (
        <div className="container">
            <div className="data-container">
            <p>{err}</p>
            {
                acces == null ? <p>Loading</p>:
                <PrivateContent allow={acces}/>
            }
            </div>
        </div>
    )
}


const PrivateContent =({allow})=>{
    const history = useHistory();

    return(
        <div>
            {allow == true?
                <p>You have acces to private content</p>
                :
                <div>
                    <p>Please log in to get a token before accesing this page.</p>
                    <button onClick={()=>{history.push('/login')}}className="submit-login-btn">Login page</button>            
                </div>
            }
        </div>
    )
}
export default Private
