import styles from "@/styles/Home.module.css";
import { Michroma , Marcellus_SC , Amiri} from "next/font/google";

const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Mar = Marcellus_SC({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

export default function Famed() {
    return (
    <section id="famed">
        <div className={styles.background_image}>
            <div className="text-4xl lg:text-5xl text-white ml-5 pt-8">
                <div className={Mac.className}>FAMOUSE ARTICLES</div>
            </div>
            <div className={`m-10 ${styles.container}`}>
                <a href="/hasil"><div className={styles.articleBox}>
                    <div className={`text-6xl text-center ${Mar.className}`}>hasil</div>
                    <div className={`text-xl text-center p-10 ${ Ami.className}`}>Hasil ki na qadri or la-hasil ki qadr yeh ek aam cheez hu gae hai.Kabhi socha hai jo la-hasil hai jab hasil hujae toh kya tab bhi tum uski utni hi parwah karoge. Hum la-hasil ke piche itna bhagte hai ke jab woh hasil hu jae toh hame farq nahi padta................</div>
                </div></a>
                <a href="/login"><div className={styles.articleBox}>
                    <div className={`text-6xl text-center ${Mar.className}`}>bint-e-dil</div>
                    <div className={`text-xl text-center ${ Ami.className}`}></div>
                </div></a>
                <a href="/login"><div className={styles.articleBox}>
                    <div className={`text-6xl text-center ${Mar.className}`}>yaqeen</div>
                    <div className={`text-xl text-center ${ Ami.className}`}></div>
                </div></a>
            </div>
        </div>
    </section>
  );
};

