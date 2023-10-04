import { SetStateAction, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Michroma, Orbitron , Amiri} from "next/font/google";


const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Orb = Orbitron({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

export default function witeBlog() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const SubmitEvent = () => {
    console.log(title, desc);
  };

  return (
    <div className={styles.background_image}>
      <div className="pt-10 p-5 text-white">
        <div className={`text-4xl font-bold ${Mac.className}`}>Write a Blog</div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          {titles(settitle)}
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
        {descp(setdesc)}
        <button
          className="lg:mr-20 m-2 float-right bg-[#ffffff40] p-2 text-2xl  hover:text-black rounded-md"
          onClick={SubmitEvent}
        >
          Review
        </button>
      </div>
    </div>
  );
}

const titles = (settitle: { (value: SetStateAction<string>): void; (arg0: string): void; }) => {
  return (
    <>
      <div className={`m-8 text-xl ml-2 ${Orb.className}`}>
        Title
        <input
          onChange={(e) => settitle(e.target.value)}
          name="Title "
          placeholder="Enter the Title"
          className=" ml-5 mb-4 p-2 rounded-md"
        />
      </div>
    </>
  );
};
const descp = (setdesc: { (value: SetStateAction<string>): void; (arg0: string): void; }) => {
  return (
    <>
      <div className="w-screen">
        <textarea
          className="w-11/12 p-2 h-80 mt-2"
          placeholder="long year ago....."
          onChange={(e) => setdesc(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};
