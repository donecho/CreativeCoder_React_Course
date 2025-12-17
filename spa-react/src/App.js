import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostsList from './components/PostList/index';
import PostForm from './components/PostFrom/index';
import Modal from './components/Modal/index';

function App() {
  //working with list
  let [posts,setPost]=useState([
    {id:1,title:"Post 1"},
    {id:2,title:"Post 2"},
    {id:3,title:"Post 3"},
  ]);

  let [showModal,setShowModal] = useState(false);


  
  return (
    <>
      <Navbar setShowModal={setShowModal}/>
      <PostsList posts={posts}/>
      {/* <Modal> */}
        {/* modal content */}
        {/* <h1>Zoom class is available now.</h1>
        <p>feel free to <a href='www.youtube.com'>Join</a> here </p> */}
      {/* </Modal> */}

    {showModal &&  <Modal setShowModal={setShowModal}>
       <PostForm/>
      </Modal>}
    </>  //it called react fragment
  );
}

export default App;
