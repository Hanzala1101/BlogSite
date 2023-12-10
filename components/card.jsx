"use client";
import { React, useContext, useState } from "react";
import { logincontext } from "@/global/logincon";
import SignUp from "./signup";

function card() {
  const { login, setlogin } = useContext(logincontext);
  const [isSignin, setisSignin] = useState(false);
  return (
    <>
      <div
        className={`w-screen h-screen -top-2 z-10  ${
          login ? "absolute backdrop-blur-sm" : "hidden"
        }`}
      >
        <div className="relative flex justify-center items-center w-full h-full z-10">
          <SignUp isSignIn={isSignin} />
        </div>
      </div>
    </>
  );
}

export default card;
