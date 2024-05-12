"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios';
import React,{useState} from 'react'
import { useToast } from "@/components/ui/use-toast"

const Contact = () => {
  const { toast } = useToast()
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
    alert(
    "Your message has been sent."
  )
//  console.log(res)
 }).catch((error)=>{
  alert(
  "Internal Error Occured."
  )
//  console.log(error)
 })
}
  return (
    <>
    <form  className='flex flex-col justify-center m-auto items-center border border-slate-400 w-4/5 rounded-lg shadow-md shadow-slate-500 '>
        <p className="font-semibold inter my-5">Name</p>
        <input 
        type="text"   
        className="rounded-lg border-slate-950
         border w-4/5 outline-none px-5 text-center
         capitalize" name="name" placeholder='Enter Your Name' 
          value={user.name}
          onChange={handleChange}
          />
        <p className="font-semibold inter my-5">Email</p>
        <input type="email"
          className="rounded-lg border-slate-950 border w-4/5 
          outline-none px-5
           text-center capitalize"
            name="email"
             placeholder='Enter Your Email'
             value={user.email}
             onChange={handleChange}
             autoComplete='off'
           required
             />

        <p className="font-semibold inter my-5">Subject</p>
        <input type="text"
          className="rounded-lg border-slate-950 w-4/5  border outline-none
           px-5 text-center capitalize"
            name="subject" 
            placeholder='Enter Your Subject' 
            value={user.subject}
            onChange={handleChange}
            autoComplete='off'
           required
           />

        <p className="font-semibold inter my-5 capitalize">How may I help you? </p>
        <textarea className="rounded-lg border-slate-950 
        w-4/5 h-40 border outline-none px-5 py-4 mb-8
         text-center capitalize"
          name="detail"
           placeholder='Exter your project in detail'
           value={user.detail}
           onChange={handleChange}
           autoComplete='off'
           required
           ></textarea>
       
        <Button size="lg" onClick={handleForm}className="w-4/5 mb-8">Submit</Button>

    </form>
    
    
    </>
  )
}

export default Contact