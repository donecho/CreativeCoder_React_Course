// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QAImage from './assets/image/image_1.png';


function App() {

  // let name = "Zin Phyo Thant";
  let [name,setName]=useState("Zin Phyo Thant"); //[getElementError,setter]
  
  let changeName= ()=>{
    setName("Aung Aung");
    console.log(name);
  };
  
  return (
    <div className='app'>
      <h1>Hello World {name}</h1>
      <button onClick={changeName}>Click to change name</button>


    </div>
  );
}

export default App;


//npm run script


