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
      
         <div className={`w-screen h-screen -top-2 z-10  ${login?"absolute backdrop-blur-sm": "hidden"}`}>
          <div className="relative flex justify-center items-center w-full h-full z-10">
            {logreg==="login"?<Login registerPage={setlogreg}/>:<SignUp registerPage={setlogreg}/>}
          </div>
        </div> 
       
    </>
  );
}

export default card;
