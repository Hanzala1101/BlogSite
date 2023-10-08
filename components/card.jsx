"use client";
import { React, useContext, useState } from "react";
import { logincontext } from "@/global/logincon";
import Login from "./login"
import SignUp from "./signup"

function card() {
  const { login, setlogin } = useContext(logincontext);
  const [logreg, setlogreg] = useState("login")
  return (
    <>
      
         <div className={`w-screen h-screen -top-6 z-10 ${login?"absolute": "hidden"}`}>
          <div className="relative flex justify-center items-center w-full h-full">
            <div className="absolute top-20 right-28 font-extrabold text-7xl" onClick={()=>{setlogin(false)}}> x </div>
            {logreg==="login"?<Login register={setlogreg}/>:<SignUp register={setlogreg}/>}
          </div>
        </div> 
       
    </>
  );
}

export default card;
