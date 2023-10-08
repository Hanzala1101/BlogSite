"use client";
import { React, useState, createContext } from "react";
import Card from "@/components/card";
import Nav from '@/components/navbar';
export const ContextProvider = createContext();

const context = (props) => {
  const [login, setLogin] = useState(false);
  return (
    <ContextProvider.Provider value={{login,setLogin}}>
        {children}
    </ContextProvider.Provider>
  );
};

export default context;
