"use client";
import {  useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Home.module.css";
import { Michroma, Orbitron , Amiri} from "next/font/google";


const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Orb = Orbitron({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

export default function witeBlog() {
  const [title, settitle] = useState("");
  const [description, setdesc] = useState("");

  const router = useRouter();

  const SubmitEvent = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/blog", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.background_image}>
      <form className="pt-10 p-5 text-white" method="POST" onSubmit={SubmitEvent}>
        <div className={`text-4xl font-bold ${Mac.className}`}>Write a Blog</div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <Titles title={title} settitle={settitle} />
          <div className={`${Ami.className}`}>
            Instrctions
            <ol>
              <li className=" font-bold">* to bold</li>
              <li className="font-extrabold text-lg">& to extra bold</li>
              <li className="bg-[#FFFF0060] w-fit px-2">
                ! marked yellow color
              </li>
              <li>{"&nbsp;"} for extra &nbsp;&nbsp;&nbsp;&nbsp;space</li>
              <li></li>
            </ol>
          </div>
        </div>
        <div className={`text-xl ml-2 ${Orb.className}`}>Start</div>
        <Descp desc={description} setdesc={setdesc}/>
        <button
          className="lg:mr-20 m-2 float-right bg-[#ffffff40] p-2 text-2xl  hover:text-black rounded-md"
          type="submit"
        >
          Review
        </button>
      </form>
    </div>
  );
}

function Titles({title, settitle}){
  return (
    <>
      <div className={`m-8 text-xl ml-2 ${Orb.className}`}>
        Title
        <input
          onChange={(e) => settitle(e.target.value)}
          name="Title "
          placeholder="Enter the Title"
          value={title}
          className=" ml-5 mb-4 p-2 rounded-md text-black"
        />
      </div>
    </>
  );
};
const Descp = ({desc, setdesc}) => {
  return (
    <>
      <div className="w-screen">
        <textarea
          className="w-11/12 p-2 h-80 mt-2 text-black"
          placeholder="long year ago....."
          onChange={(e) => setdesc(e.target.value)}
          value={desc}
        ></textarea>
      </div>
    </>
  );
};
