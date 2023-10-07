import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import HomeComponent from "@/components/home";
import About from "@/components/about";
import Famed from "@/components/famed";
import Contact from "@/components/contact";
import Login from "../components/card";

export default function Home() {
  return (
    <>
    <div className={styles.background_image}>

      <Navbar />
      <Login />
      <HomeComponent />
      <About />
      <Famed />
      <Contact />
    </div>
    </>
  );
}
