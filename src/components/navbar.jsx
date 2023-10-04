import Image from "next/image";
import Main  from "../assets/main.png";
import Logo from "../assets/logo.png";
import styles from "@/styles/Home.module.css";

export default function navbar() {
  return (
    <div className="flex justify-between mx-5 pt-5 ">
      <div className={styles.logo}>
        <Image src={Logo} alt="not found" className="w-full h-full object-contain"/>
      </div>
      <div className="flex uppercase  text-white ">
        <a href="/mblog"><div className="pr-10 hover:font-bold ">
        Home
        </div></a>
        <a href="#famed"><div className="pr-10 hover:font-bold">Famed</div></a>
        <a href="#about"><div className="pr-10 hover:font-bold">About</div></a>
        <a href="#contact"><div className="pr-10 hover:font-bold">Contact</div></a>
        <a href="/lg"><div className="pr-10 hover:font-bold">Login</div></a>
      </div>
    </div>
  )
}


