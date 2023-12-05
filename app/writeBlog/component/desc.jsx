import React from 'react'

export default function desc({ desc, setdesc }) {
  return (
    <div className="w-screen">
    <textarea
      className="w-11/12 p-2 h-80 mt-2 text-black"
      placeholder="long year ago....."
      onChange={(e) => setdesc(e.target.value)}
      value={desc}
    ></textarea>
  </div>
  )
}
