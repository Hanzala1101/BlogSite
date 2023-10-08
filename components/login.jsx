import styles from "../styles/Home.module.css";
import { Michroma , Old_Standard_TT} from "next/font/google";

const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const old = Old_Standard_TT({ weight: "700", subsets: ["latin"] });

export default function About() {
  return (
    <>
      <div className={`flex align-middle justify-center pt-10 ${styles.background_image}`}>
        <div className={styles.centered_circle1}>
          <div className="text-center w-full mt-16 pb-3">
            <div className={`text-6xl font-bold ${Mac.className}`}>LOGIN</div>
          </div>
        
          <div className="flex flex-col items-center w-50 mt-6">
            <div className=" place-items-start">
            <div className={`mb-2 text-lg font-serif text-left ${Mac.className}`}>Email:</div>
            <input type="email" placeholder="Email" className="p-2 mb-4 rounded-md"/>
            <div className={`mb-2 text-lg font-serif text-left ${Mac.className}`}>Password:</div>
            <input type="password" placeholder="Password" className="p-2 mb-4 rounded-md"/>
            </div>
            <div className="mb-2">
              <button className="bg-red-800 text-white p-2 rounded-md hover:bg-red-950 font-serif">
                Log In
              </button>
            </div>
            <div className={`mb-2 text-center text-lg ${Mac.className}`}>
                OR
            </div>
            <div>
              <a href="/signup"><button className="bg-red-800 text-white p-2 rounded-md hover:bg-red-950 font-serif">
                Sign Up
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
