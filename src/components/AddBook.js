import React, { useState } from 'react'
import axios from 'axios';
import './AddBook.css';

const AddBook = () => {
    const [inputs,setInputs]=useState({})

    const inputHandler=(e)=>{
    //    const name=e.target.name;
    //    const value=e.target.value;
    const {name,value}=e.target;
        setInputs(prevState=>{
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    const formHandler= async(e)=>{
        e.preventDefault();
       try {
        const sendFormData=await axios.post(`http://localhost:4000/addbook`,inputs);
        const res=await sendFormData.data;
        console.log(res);

       } catch (error) {
        console.log(error);
       }
    }

  return (
   <>
   <div className='container'>
   <form onSubmit={formHandler} className='userform'>
        <label>Title</label>
        <input type='text' name='title' onChange={inputHandler}></input>

        <label>Price</label>
        <input type='number' name='price'  onChange={inputHandler}></input>

        <label>Description</label>
        <input type='text' name='description'  onChange={inputHandler} style={{paddingBottom:'50px'}}></input>

        <button type='submit'>Submit</button>
    </form>

   </div>
   

   </>
  )
}

export default AddBook