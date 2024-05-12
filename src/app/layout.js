import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/items/navbar/Nav";
import Footer from "@/components/items/footer/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="relative top-36 overflow-hidden">
        {children}
        <Footer/>
        </div>
        {/* 
https://i.ibb.co/6tnJ750/next-js-seeklogo.png
https://i.ibb.co/2NXq63R/cplus.png
https://i.ibb.co/MVp70L3/cssLogo.png
https://i.ibb.co/s9VzLxd/express.png
https://i.ibb.co/2SFbNJB/github.png
https://i.ibb.co/NSFggrW/github-Logo.png
https://i.ibb.co/2YcxWVW/html5.png
https://i.ibb.co/BKmtqNS/jsLogo.png
https://i.ibb.co/cx501zr/linkedin.png
https://i.ibb.co/0jk8jG1/logo.png
https://i.ibb.co/XSJw7xT/main.jpg
https://i.ibb.co/3W1T1z9/material-Logo.png
https://i.ibb.co/GF7M6bJ/menu.png
https://i.ibb.co/yqBbPjB/mongodb.png
https://i.ibb.co/RGF1mW7/navlogo.png
https://i.ibb.co/4Z8M674/OIP.jpg
https://i.ibb.co/txLvGMG/project-One.png
https://i.ibb.co/6y9NpkQ/project-Three.png
https://i.ibb.co/pj2PVRC/project-Two.png
https://i.ibb.co/vmswnbn/python.png
https://i.ibb.co/Jvj5mzd/reactjs-logo-icon.png
https://i.ibb.co/yB7dThY/tailwind-Logo.png
https://i.ibb.co/NnBp9k7/twitterx.png */}
        </body>
    </html>
  );
}
