import React, { useState } from 'react'
import './index.css';
export default function Index({addPost}) {

  let [title,setTitle]= useState("");
  
  // let onchangeHandler=(e)=>{
  //   setTitle(e.target.value);
  // }

  let resetForm = ()=>{
    setTitle('');
    console.log('Updated Successfully');
    
  }

  let upload_post = (e)=>{
    e.preventDefault(); //prevent refreshing page

    let post ={
      id:Math.floor(Math.random*10000),
      title:title,
    }
    resetForm();
    addPost(post);
  }

  return (
    <form className='post-form' onSubmit={upload_post}>
      <h1>Create Post</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
         {/* <input type="text" onChange={onchangeHandler}/> */}
      </div>
      
  
      <div className="form-control">
        <button type="submit">Post Now</button>
      </div>
    </form>
  )
}
