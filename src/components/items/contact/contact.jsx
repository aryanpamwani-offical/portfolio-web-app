import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <>
    <section className='flex flex-col justify-center m-auto items-center border border-slate-400 w-4/5 rounded-lg shadow-md shadow-slate-500 '>
        <p className="font-semibold inter my-5">Name</p>
        <input type="text"  className="rounded-lg border-slate-950 border w-4/5 outline-none px-5 text-center capitalize" name="name" placeholder='Enter Your Name' />
        <p className="font-semibold inter my-5">Email</p>
        <input type="email"  className="rounded-lg border-slate-950 border w-4/5 outline-none px-5 text-center capitalize" name="email" placeholder='Enter Your Email' />

        <p className="font-semibold inter my-5">Subject</p>
        <input type="text"  className="rounded-lg border-slate-950 w-4/5  border outline-none px-5 text-center capitalize" name="subject" placeholder='Enter Your Subject' />

        <p className="font-semibold inter my-5 capitalize">How may I help you? </p>
        <textarea className="rounded-lg border-slate-950 w-4/5 h-40 border outline-none px-5 py-4 mb-8 text-center capitalize" name="details" placeholder='Exter your project in detail'></textarea>
       
        <Button size="lg" className="w-4/5 mb-8">Submit</Button>

    </section>
    
    
    </>
  )
}

export default Contact