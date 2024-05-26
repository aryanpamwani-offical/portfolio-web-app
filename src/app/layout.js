"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/items/navbar/Nav";
import Footer from "@/components/items/footer/footer";
import React,{useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         
       })
 }, [])
  return (
    <html lang="en">
      <body className={inter.className}>


       

        <Navbar/>
        <div className="relative top-36 overflow-hidden">
       

        {children}
        <ToastContainer />

        
        <Footer/>


        </div>
        </body>
    </html>
  );
}
