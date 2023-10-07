import { React, useContext } from "react";
import { ContextProvider } from "@/global/global";

function card() {
  const login = useContext(ContextProvider);
  return (
    <>
      {login ? (
        <div className="absolute w-96 h-96 top-10 left-5">HELOOOO</div>
      ) : (
        <></>
      )}
    </>
  );
}

export default card;
