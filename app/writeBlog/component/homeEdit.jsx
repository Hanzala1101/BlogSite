"use client";
import React, { useState } from "react";
import Home from "./home";
import { useRouter } from "next/navigation";


export default function Home({ id, title, description }) {
  const [newTitle, setnewtitle] = useState(title);
  const [newDescription, setnewdesc] = useState(description);
  const [newfamous, setnewFamous] = useState(false)
  const [newrange, setnewrange] = useState(0)

  const router = useRouter();

  const SubmitEvent = async (e) => {
    e.preventDefault();

    if (!newTitle || !newDescription) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:3000/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription, newfamous, newrange }),
      });

      if (res.ok) {
        router.push(`/hasil/${id}`);
      } else {
        throw new Error("Failed to update a blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Home
      title={newTitle}
      description={newDescription}
      settitle={setnewtitle}
      setdesc={setnewdesc}
      SubmitEvent={SubmitEvent} range={newrange}
      setrange={setnewrange} famous={newfamous} setFamous={setnewFamous}
    />
  );
}
