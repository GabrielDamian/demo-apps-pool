import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData]= useState(null);

  useEffect(()=>{
    handleRefetch();

  },[])
  const handleRefetch = ()=>{
    setData(null);
    axios.get('http://localhost:4000/btc-price')
    .then((resp)=>{
      console.log(resp.data);
      let temp_obj = resp.data.price;
      console.log("aici",temp_obj)
      console.log("DATA",resp.data);
      setData(resp.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="App">
     {
       data == null ? <p>Loading</p>
       :
       <div className="App-content">
         <span>Currency: {data.price.currency}</span>
         <span>Price: {data.price.price}</span>
         <span>Time: {data.time}ms</span>
         <span>From: {data.source}</span>
         <button onClick={handleRefetch}>Refetch</button>
       </div>
     }
    </div>
  );
}

export default App;
