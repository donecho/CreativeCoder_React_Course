import React, { useState } from 'react'
import './index.css';
export default function Index() {

  let [title,setTitle]= useState("");
  
  // let onchangeHandler=(e)=>{
  //   setTitle(e.target.value);
  // }

  let resetForm = ()=>{
    setTitle('');
    console.log('Updated Successfully');
    
  }

  

  return (
    <form className='post-form'>
      <h1>Create Post</h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
         {/* <input type="text" onChange={onchangeHandler}/> */}
      </div>
      <p>{title}</p>
      <button type="button" onClick={resetForm}>Reset Form</button>
      <div className="form-control">
        <button>Post Now</button>
      </div>
    </form>
  )
}
