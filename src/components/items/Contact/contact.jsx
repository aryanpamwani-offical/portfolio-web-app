"use client"

import axios from 'axios';
import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Textarea } from '@/components/ui/textarea';

const Contact = ({animation}) => {
  const lightTheme=useSelector((state)=>state.themeKey);

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    subject: z.string().min(2, {
      message: "Subject must be at least 2 characters.",
    }),
    detail: z.string().min(10, {
      message: "Detail must be at least 10 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", subject: "", detail: ""
    },
  });

  function onSubmit(values) {
    try {
  axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact/create`, values)
      .then((res) => {
        toast.success("Contact Form Saved Successfully");
        form.reset(); // Reset form after successful submission
      })
      .catch((error) => {
        toast.error("Internal Error Occurred");
        console.error(error);
      });
  
} catch (error) {
  console.error("Form submission error:", error);
}

    // axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact/`, values)
    //   .then((res) => {
    //     toast.success("Contact Form Saved Successfully");
    //     form.reset(); // Reset form after successful submission
    //   })
    //   .catch((error) => {
    //     toast.error("Internal Error Occurred");
    //     console.error(error);
    //   });
  }

  return (
    <>
      <Form {...form} className="flex flex-col w-full items-center justify-center">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex  flex-col w-4/5 m-auto gap-4 " data-aos={animation}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Name" className="bg-transparent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your E-mail" className="bg-transparent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Subject" className="bg-transparent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Detail</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your project in detail" className="bg-transparent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg" className="w-full" variant={lightTheme ? 'default' : 'dark'}>Submit</Button>
        </form>
      </Form>
      <ToastContainer />
    </>
  )
}

export default Contact