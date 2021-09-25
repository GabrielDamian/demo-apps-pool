import React,{useEffect, useState} from 'react'
import axios from 'axios';


const Login = () => {
    const [input, setInput] = useState({
        name: '',
        pass: ''
    })

    const [respStatus, setRespStatus] = useState('');

    const handleInputChange = (e)=>{
        if(e.target.name == 'name')
        {
            setInput((prev)=>{
                return{
                    ...prev,
                    name: e.target.value
                }
            })
        }
        else if(e.target.name == 'password')
        {
            setInput((prev)=>{
                return{
                    ...prev,
                    pass: e.target.value
                }
            })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/api/login',{
            name: input.name,
            pass: input.pass
        }).then((resp)=>{
            console.log(resp)
            localStorage.setItem('token',resp.data.token)
            setRespStatus('Token received and saved successfully! Active 15s from now.');
        }).catch((err)=>{
            console.log(err);
            setRespStatus('Error at logging you in!')
        })

        setInput({
            name: '',
            pass: ''
        })
    }
    return (
        <div className="container">
            <div className="data-container">
                <form method="post">
                    <label>
                        <span>UserName:</span>
                        <input value={input.name} type="text" name="name" onChange={handleInputChange}></input>
                    </label>
                    <label>
                        <span>Password:</span>
                        <input value={input.pass} type="password" name="password" onChange={handleInputChange}></input>
                    </label>
                    <label>
                        <button className="submit-login-btn"onClick={handleSubmit}>Login</button>
                    </label>
                    <label>
                        <p>{respStatus}</p>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Login
