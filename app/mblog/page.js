import Styles from "../../styles/Home.module.css";
import { Michroma, Marcellus_SC, Amiri } from "next/font/google";
import React from 'react';

const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Mar = Marcellus_SC({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "400", subsets: ["latin"] });


export default function Mblog() {

  return (
    <section id="main">
      <div className={Styles.background_image}>
        <div className="text-4xl lg:text-5xl text-white ml-5 pt-8">
          <div className={Mac.className}>RECENT BLOGS</div>
        </div>
        <div className={`flex flex-col items-center m-10 ${Styles.scroll}`}>
            <a href="/hasil"><Blog title="Hasil" desc="Woh hi mera Marz hai or us marz ki Dawa bhi woh hai."/></a>
            <Blog title="Bint-e-Dil" desc={<>Ek faqat tujh se tagaful nahi barta main ne <br />Warna har zaat se mafroor hue firte hain</>}/>
            <Blog title="Yaqeen" desc={<>EK umeed jo khatam nahi huti <br/> EK yaqeen ke woh aaega nahi</>}/>
            <Blog title="Humsafar" desc="Main tujhe kabhi na khud se juda likho"/>
            <Blog title="Hasrat" desc="Hasrat e deedar bhi kya cheez hai yaar samne hu toh musalsal dekha bhi nahi jata"/>
        </div>

        <div className="flex justify-center ">
          <a href="/">
            <button className="bg-red-800 text-white p-2 rounded-md hover:bg-red-950">
              Go to Home
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}


const star = () =>{
    return (
        <>
        <div className="flex justify-end space-x-1">
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
        </>
    );
};


const Blog = (props) =>{
    return(
        <div className={Styles.blogbox}>
            <div className={`text-4xl ${Mar.className}`}>{props.title}</div>
            <div className={`text-xl ${Ami.className}`}>{props.desc}</div>
            {star()}
          </div>
    );
}

