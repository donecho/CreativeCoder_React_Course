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

    {showModal &&  <Modal>
        <h1>Term and Condition</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio repudiandae dolorum laudantium veniam nihil minima quo doloremque sapiente excepturi tempora culpa in, illum eum voluptas, quod ipsam! Quibusdam, incidunt. </p>
        <button onClick={()=>setShowModal(false)}>Close</button>
      </Modal>}
    </>  //it called react fragment
  );
}

export default App;


//npm run script


