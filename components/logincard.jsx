"use client";
import { React, useContext, useState } from "react";
import { logincontext } from "@/global/logincon";
import SignUp from "./AuthModel";

function card() {
  const { loginCard } = useContext(logincontext);
  const [isSignin, setisSignin] = useState(true);
  return (
    <>
      <div
        className={`w-screen h-screen -top-2 z-10  ${
          loginCard ? "absolute backdrop-blur-sm" : "hidden"
        }`}
      >
        <div className="relative flex justify-center items-center w-full h-full z-10">
          <SignUp isSignIn={isSignin} setisSignin={setisSignin} />
        </div>
      </div>
    </>
  );
}

export default card;
