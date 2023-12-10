import styles from "../styles/Home.module.css";
import { Michroma } from "next/font/google";
import { React, useContext, useState } from "react";
import { logincontext } from "@/global/logincon";
import {useForm} from 'react-hook-form'

const Mac = Michroma({ weight: "400", subsets: ["latin"] });

export default function About({ registerPage }) {
  const { login, setlogin } = useContext(logincontext);
  const {register,
    handleSubmit, formState:{errors}} = useForm()
    
    const onSubmit = (data) => console.log(data)
  return (
    <>
      <form
        id="popup-modal"
        className=" max-w-sm max-h-screen overflow-y-scroll no-scrollbar p-4 relative bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="text-white absolute top-2 text-black right-6 font-extrabold text-lg hover:cursor-pointer"
          onClick={() => {
            setlogin(false);
          }}
        >
          {" "}
          x{" "}
        </div>
        <div className="space-y-6" action="#">
          <h5
            className={`text-xl font-medium text-gray-900 dark:text-white ${Mac.className}`}
          >
            Sign Up to our platform
          </h5>
          <div className="flex">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 `}
              placeholder="Zaara"
              
              {...register("first_name",{required:true, pattern:/^[a-zA-Z]+$/})}
            ></input>
          </div>
          <div className="w-2"></div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Shajal"
              {...register("last_name",{required:true, pattern:/^[a-zA-Z]+$/})}
            ></input>
          </div>
          </div>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              {...register("email",{required:true, pattern:/^\S+@\S+$/i})}
            ></input>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("password",{required:true})}
            ></input>
          </div>
          <div>
            <label
              htmlFor="password1"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              confirm password
            </label>
            <input
              type="password"
              name="password1"
              id="password1"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              {...register("password1",{required:true})}
            ></input>
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  
                ></input>
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            RegisterPage your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registerPageed?{" "}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
              onClick={() => {
                registerPage("login");
              }}
            >
              Login
            </a>
          </div>
        </div>
      </form>
    </>
  );
}
