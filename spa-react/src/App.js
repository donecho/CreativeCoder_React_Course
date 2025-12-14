// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PostsList from './components/PostList';

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
    </>  //it called react fragment
  );
}

export default App;


//npm run script


