"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Home from "./component/home"

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
      const res = await fetch("http://127.0.0.1:3000/api/blog/id", {
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
    <Home title={title} description={description} settitle={settitle} setdesc={setdesc} SubmitEvent={SubmitEvent}/>
  );
}



