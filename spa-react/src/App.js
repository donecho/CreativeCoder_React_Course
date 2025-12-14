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

  //working with list
  let [post,setPost]=useState([
    {id:1,title:"Post 1"},
    {id:2,title:"Post 2"},
    {id:3,title:"Post 3"},
  ]);
  
  return (
    <div className='app'>
      <h1>Hello World {name}</h1>
      <button onClick={changeName}>Click to change name</button>

      <h1>List of Posts</h1>
      <ul>
        {post.map((post)=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


//npm run script


