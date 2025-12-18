import { useEffect, useState } from 'react';
import './App.css';
import TripList from './components/Triplist/index.js';

function App() {

  let [data,setData] = useState("my data");
  let myFunction = ()=>{
    setData('update data'); //If same data set , not renderding
  }

  useEffect(()=>{
    
  },[])

  return (
    <>
    <h1>{data}</h1>
      <TripList/>
    </>
  );
}

export default App;

/**
 * **Primitive
 * string
 * number
 * boolean
 * null
 * undefined
 * 
 * **Refrence
 * object
 * array 
 * function
 */