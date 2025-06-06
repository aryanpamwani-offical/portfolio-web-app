"use client"

import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
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
import { Send, Loader2 } from 'lucide-react';

const Contact = ({animation}) => {
  const lightTheme = useSelector((state) => state.themeKey);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: z.string()
      .min(2, { message: "Name must be at least 2 characters." })
      .max(50, { message: "Name must not exceed 50 characters." })
      .regex(/^[a-zA-Z\s]*$/, { message: "Name can only contain letters and spaces." }),
    email: z.string()
      .email({ message: "Please enter a valid email address." })
      .min(5, { message: "Email is too short." })
      .max(100, { message: "Email must not exceed 100 characters." }),
    subject: z.string()
      .min(2, { message: "Subject must be at least 2 characters." })
      .max(100, { message: "Subject must not exceed 100 characters." }),
    detail: z.string()
      .min(10, { message: "Detail must be at least 10 characters." })
      .max(1000, { message: "Detail must not exceed 1000 characters." }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "", email: "", subject: "", detail: ""
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    toast.promise(
      axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/contact/create`, values), {
        loading: 'Sending your message...',
        success: (res) => {
          form.reset();
          return 'Message sent successfully! I\'ll get back to you soon.';
        },
        error: (err) => {
          console.error("Form submission error:", err);
          return err.response?.data?.message || 'Failed to send message. Please try again.';
        },
        finally: () => {
          setIsLoading(false);
        },
      }
    );
  }

  return (
    <>
      <Form {...form} className="flex flex-col w-full items-center justify-center">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-4/5 m-auto gap-8" data-aos={animation}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter Your Name" 
                    className={`bg-transparent ${lightTheme ? "!border-[var(--grey-006)] focus:!border-[var(--grey-005)] outline-none" : "!border-[var(--grey-004)] focus:!border-[var(--grey-003)] outline-none"} !border`} 
                    {...field} 
                    disabled={isLoading}
                  />
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
                  <Input 
                    placeholder="Enter Your E-mail" 
                    className={`bg-transparent ${lightTheme ? "!border-[var(--grey-006)]" : "!border-[var(--grey-004)]"} !border`} 
                    {...field} 
                    disabled={isLoading}
                  />
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
                  <Input 
                    placeholder="Enter Your Subject" 
                    className={`bg-transparent ${lightTheme ? "!border-[var(--grey-006)]" : "!border-[var(--grey-004)]"} !border`} 
                    {...field} 
                    disabled={isLoading}
                  />
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
                  <Textarea 
                    placeholder="Explain the project in more detail" 
                    className={`bg-transparent ${lightTheme ? "!border-[var(--grey-006)]" : "!border-[var(--grey-004)]"} !border`} 
                    {...field} 
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            size="lg" 
            className="w-full gap-2 content-center" 
            variant={lightTheme ? 'default' : 'dark'}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span className="text-xl font-semibold">Send</span>
                <Send className='mt-1 w-5' />
              </>
            )}
          </Button>
        </form>
      </Form>
    </>
  )
}

export default Contact