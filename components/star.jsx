"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { RiChatDeleteFill } from "react-icons/ri";
import { MdEditNote } from "react-icons/md";

export default  function star(props)  {
    const router = useRouter()
    const removeblog = async () => {
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
        const res = await fetch(`http://127.0.0.1:3000/api/blog?id=${props.id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
      }
    }
    return (
      <>
        <div className="flex justify-between w-56">
          <div className="flex justify-end space-x-1">
            {[...Array(3)].map((e, i) => (
              <Rating color="text-black" />
            ))}
            {[...Array(5 - 3)].map((e, i) => (
              <Rating color="text-gray-300 dark:text-gray-500" />
            ))}
          </div>
          <div className="flex justify-between w-20 ">
            <button onClick={removeblog}>
              <RiChatDeleteFill size={25} />
            </button>
            <button>
              <MdEditNote size={30} />
            </button>
          </div>
        </div>
      </>
    )
}

const Rating = ({ color }) => {
    return (
      <svg
        className={`w-4 h-4 ${color}`}
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
  };