"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "@/components/navbar";
import HomeComponent from "@/components/home";
import About from "@/components/about";
import Famed from "@/components/famed";
import Contact from "@/components/contact";
import Login from "../components/logincard";
import { logincontext } from "@/global/logincon";

export default function Home() {
  const [loginCard, setloginCard] = useState(false);

  return (
    <logincontext.Provider value={{loginCard, setloginCard}}>
    <div className={`${loginCard?"overflow-hidden":" "} + ${styles.background_image}`}>
      <Navbar />
      <Login />
      <HomeComponent />
      <About />
      <Famed />
      <Contact />
    </div> 
    </logincontext.Provider>    
  )
}
