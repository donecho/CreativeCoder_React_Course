// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PostsList from './components/PostList';
import Modal from './components/Modal';

function App() {


  //working with list
  let [posts,setPost]=useState([
    {id:1,title:"Post 1"},
    {id:2,title:"Post 2"},
    {id:3,title:"Post 3"},
  ]);


  
  return (
    <>
      <Navbar/>
      <PostsList posts={posts}/>
      <Modal>
        {/* modal content */}
        <h1>Zoom class is available now.</h1>
        <p>feel free to <a href=''>Join</a> here </p>
      </Modal>
    </>  //it called react fragment
  );
}

export default App;


//npm run script


