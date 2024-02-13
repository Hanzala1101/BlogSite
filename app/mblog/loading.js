import Styles from "../../styles/Home.module.css";
import { Michroma, Marcellus_SC, Amiri } from "next/font/google";
import React from "react";

const Mac = Michroma({ weight: "400", subsets: ["latin"] });

export default async function Mblog() {
  return (
    <section id="main">
      <div className={Styles.background_image}>
        <div className="text-4xl lg:text-5xl text-white ml-5 pt-8">
          <div className={Mac.className}>RECENT BLOGS</div>
        </div>
        <div className={`flex flex-col items-center m-10 ${Styles.scroll}`}>
          
           {[...Array(5)].map((i,index)=> <div key={index}>
                <div className={`animate-pulse h-10 ${Styles.blogbox}`} >
                 .
                </div>
            </div>)}
        </div>

        <div className="flex justify-center ">
          <a href="/">
            <button className="bg-red-800 text-white p-2 my-8 rounded-md hover:bg-red-950">
              Go to Home
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
