import React from 'react'
import styles from "@/styles/Home.module.css";
import Titles from "./title";
import Descp from "./desc";
import CheckBox from "./checkbox";
import { Michroma, Orbitron, Amiri } from "next/font/google";
const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Orb = Orbitron({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

export default function home({title, description, settitle, setdesc, SubmitEvent}) {
  return (
    <>
    <div className={styles.background_image}>
      <form
        className="pt-5 p-5 text-white"
        method="POST"
        onSubmit={SubmitEvent}
      >
        <div className={`text-4xl font-bold ${Mac.className}`}>
          Write a Blog
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <Titles title={title} settitle={settitle} />
          <div className={`${Ami.className}`}>
            <Titles title={title} settitle={settitle} />

          </div>
        </div>
        <div className="flex flex-row space-x-52">
          <div className={`text-xl ml-2 ${Orb.className}`}>Start</div>
          <div className="">
            <CheckBox />
          </div>
          <div><label htmlFor="default-range" className={`text-xl ${Ami.className}`}>Rank:</label>
            <input id="default-range" type="range" value="50" className="w-36 h-2 ml-5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" /></div>

        </div>
        <Descp desc={description} setdesc={setdesc} />
        <button
          className="lg:mr-20 m-2 float-right bg-[#ffffff40] p-2 text-2xl  hover:text-black rounded-md"
          type="submit"
        >
          Review
        </button>
      </form>
    </div>
    </>
  )
}
