"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Home from "./component/home"

export default function WiteBlog() {
  const [title, settitle] = useState("");
  const [description, setdesc] = useState("");
  const [famous, setFamous] = useState(false)
  const [range, setrange] = useState(0)
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
        body: JSON.stringify({  title, description, famous, range }),
      });
      console.log(description)
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
    <Home title={title} 
    description={description} settitle={settitle} 
    setdesc={setdesc} SubmitEvent={SubmitEvent} range={range}
     setrange={setrange} famous={famous} setFamous={setFamous} />
  );
}



