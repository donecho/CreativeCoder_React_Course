import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar/index';
import PostsList from './components/PostList/index';
import PostForm from './components/PostFrom/index';
import Modal from './components/Modal/index';

function App() {
  //working with list
  let [posts,setPosts]=useState([
    {id:1,title:"Post 1",status:'upcoming'},
    {id:2,title:"Post 2",status:'dropped'},
  ]);

  let [showModal,setShowModal] = useState(false);

  let addPost =(post)=>{
    setPosts(prevState=>[...prevState,post])
    setShowModal(false);
  }
  
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
       <PostForm addPost={addPost}/>
      </Modal>}
    </>  //it called react fragment
  );
}

export default App;
