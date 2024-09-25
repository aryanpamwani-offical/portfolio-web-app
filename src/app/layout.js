"use client"
import "./globals.css";
import Navbar from "@/components/items/Navbar/Nav";
import Footer from "@/components/items/Footer/footer";
import React,{useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  {store}  from '../Features/store';
import {Provider} from 'react-redux';
import ThemeChooser from "@/components/items/Theme/theme";
import ThemeMaker from "@/components/items/Theme/ThemeMaker";
import Head from "next/head";
import GoogleAnalyticsTag from "@/components/items/GoogleAnalytics/GoogleAnalytics";





export default function RootLayout({ children }) {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      
    })
  }, [])
 
 
  return (
      <Provider store={store}>
    <html lang="en">
      <body className="">
    
<ThemeMaker>

<GoogleAnalyticsTag
containerId={"GTM-K8R3BDDL"}
/>
       
        <Navbar/>
        <div className="relative top-36 overflow-hidden">
       

        {children}
        <ToastContainer />

        
        <ThemeChooser />
        <Footer/>


        </div>
        </ThemeMaker>
 
      
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8R3BDDL"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

        </body>
    </html>
        </Provider>
  );
}
