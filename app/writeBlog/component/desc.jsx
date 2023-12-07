import React from "react";
import ReactQuill, { Quill, editor } from "react-quill";
// import ImageResize  from 'quill-image-resize-module';
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./CustomToolbar";

export default function desc({ desc, setdesc }) {
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];
  return (
    <div className="w-full bg-gray-200 text-black mr-5">
      <CustomToolbar />
      <ReactQuill
      className="h-80"
        theme="snow"
        value={desc}
        onChange={(e) => setdesc(e)}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
