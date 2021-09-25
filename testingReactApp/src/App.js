import './App.css';
import {useState} from 'react';

import Incrementer from './components/Incrementer';
import FooterDisplay from './components/FooterDisplay';
import Header from './components/header/Header';
import InputComponent from './components/InputComponent';
import Parent from './components/IntegratedComponents/Parent';


function App() {
  const [counter, setCounter] = useState(98);
  const incrementState = ()=>{
    setCounter((prev)=>{
      return prev+1;
    })
  }
  const decrementState = ()=>{
    setCounter((prev)=>{
      return prev-1;
    })
  }
  return (
    <div className="App">
      <Header title="ceva"/>
      <Incrementer incrementFct={incrementState} decrementState={decrementState}/>
      <FooterDisplay data={counter}/>
      <InputComponent />
      <p>-----------------</p>
      <Parent />
    </div>
  );
}

export default App;
