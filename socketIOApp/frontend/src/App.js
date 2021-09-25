import React,{useState, useEffect,useRef} from 'react';
import io from "socket.io-client"


import './App.css';

function App() {
  const [input, setInput] = useState({
    name: '',
    message: ''
  })

  const [chat, setChat] = useState(null);

  useEffect(()=>{
    console.log("chat updated!")
  },[chat])


  const socketRef = useRef();

  useEffect(()=>{
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on('message',({name,message})=>{
      console.log("Aici",name, message);
      if(chat == null)
      {
        setChat([{name, message}])
      }else
      {
        setChat([...chat,{name, message}])
      }
    })
  },[chat])
  
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
    else if(e.target.name == 'content')
    {
      setInput((prev)=>{
        return{
          ...prev,
          content: e.target.value
        }
      })
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    socketRef.current.emit('message',{name: input.name, message: input.content})
    setInput({
      name: '',
      content: ''
    })
  }
  return (
    <div className="App">
      <div className="input-app-chat">
          <div className="input-app-chat-center">
            <div className="input-app-chat-center-title">
              <span>Input Mess:</span>
            </div>
            <div className="input-app-chat-center-input">
              <form>
                <label>
                  <span>Name</span>
                  <input type="text" name="name" value={input.name} onChange={handleInputChange}/>
                </label>
                <label>
                  <span>Content</span>
                  <input type="text" name="content" value={input.content} onChange={handleInputChange}/>
                </label>
                <label>
                  <button onClick={handleSubmit}>Submit</button>
                </label>
              </form>
            </div>
          </div>
      </div>
      <div className="output-app-chat">
        <div className="output-app-chat-content">
          <div className="output-app-chat-content-title">
              <span>Output Mess:</span>
          </div>
          <div className="output-app-chat-content-data">
            {
              chat == null ? null :
              chat.map((el)=>{
                return(<MessCompop name={el.name} message={el.message}/>)
              })
            }
              
          </div>
        </div>
      </div>
    </div>
  );
}
const MessCompop = ({name, message})=>{
  return(
    <div className="mess-itself">
      <span>{name}:</span><span className="custom-mess-data"><i>{message}</i></span>
    </div>
  )
}
export default App;
