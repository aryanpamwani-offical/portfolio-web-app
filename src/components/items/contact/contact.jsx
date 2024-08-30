"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios';
import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({animation}) => {
  const lightTheme=useSelector((state)=>state.themeKey);
  const [user, setUser] = useState({
    name:"",
    email:"",
    subject:"",
    detail:""
  });

  const handleChange=(e)=>{
e.preventDefault();
setUser({...user,[e.target.name]:e.target.value})
  };
const handleForm=async(e)=>{
  e.preventDefault();
 await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/contact/`,user).then(async(res)=>{
    toast.success(
    "Contact Form Saved Successfully"
  )
//  console.log(res)
 }).catch(()=>{
  toast(
    "Internal Error Occured"
  )
//  console.log(error)
 })
}
  return (
    <>
   
    <form  className='flex flex-col justify-center m-auto items-center border border-slate-400 w-4/5 rounded-lg shadow-md shadow-slate-500 ' data-aos={animation}>
        <p className="font-semibold inter my-5">Name</p>
        <input 
        type="text"   
        className={lightTheme?"input-fields":"input-fields-dark"} name="name" placeholder='Enter Your Name' 
          value={user.name}
          onChange={handleChange}
          />
        <p className="font-semibold inter my-5">Email</p>
        <input type="email"
          className={lightTheme?"input-fields":"input-fields-dark"}
            name="email"
             placeholder='Enter Your Email'
             value={user.email}
             onChange={handleChange}
             autoComplete='off'
           required
             />

        <p className="font-semibold inter my-5">Subject</p>
        <input type="text"
          className={lightTheme?"input-fields":"input-fields-dark"}
            name="subject" 
            placeholder='Enter Your Subject' 
            value={user.subject}
            onChange={handleChange}
            autoComplete='off'
           required
           />

        <p className="font-semibold inter my-5 capitalize">How may I help you? </p>
        <textarea className={lightTheme?"input-textarea":"input-textarea-dark"} name="detail"
           placeholder='Exter your project in detail'
           value={user.detail}
           onChange={handleChange}
           autoComplete='off'
           required
           ></textarea>
       
        <Button size="lg" onClick={handleForm}className="w-4/5 mb-8" variant={lightTheme?'default':'dark'}>Submit</Button>
        
    </form>
    <ToastContainer />
    
    </>
  )
}

export default Contact