"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Home.module.css";
import { Michroma, Orbitron, Amiri } from "next/font/google";

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
      const res = await fetch("http://127.0.0.1:3000/api/blog", {
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

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
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
        <div className= "flex flex-row space-x-52">
          <div className={`text-xl ml-2 ${Orb.className}`}>Start</div>
          <div className="">
          <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchChecked"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="flexSwitchChecked"
            >
              Famouse
            </label>
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
  );
}

function Titles({ title, settitle }) {
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
}
const Descp = ({ desc, setdesc }) => {
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
