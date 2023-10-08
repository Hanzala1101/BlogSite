import Styles from "../../styles/Home.module.css";
import { Michroma, Marcellus_SC, Amiri } from "next/font/google";

const Mar = Marcellus_SC({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "400", subsets: ["latin"] });

export default function Hasil() {
    return (
        <div className={Styles.background_image}>
            <div className="text-4xl text-center lg:text-5xl text-white ml-5 pt-8">
                <div className={Mar.className}>HASIL</div>
            </div>
            <div className="flex align-middle justify-center ">
                <div className={Styles.hlog}>
                    <div className={`m-2 p-2 text-xl ${Ami.className}, ${Styles.scroll}`}>
                    Hasil ki na qadri or la-hasil ki qadr yeh ek aam cheez hu gae hai.<br/>
                    Kabhi socha hai jo la-hasil hai jab hasil hujae toh kya tab bhi tum uski utni hi parwah karoge. Hum la-hasil ke piche itna bhagte hai ke jab woh hasil hu jae toh hame farq nahi padta.
                    Aesa pata hai kyu huta hai jab dil mein sacche jazbe na hu bas zid hu or zid hasil hune ke baad qadr kho deti hai. Isiliye Hasil hu ya la-hasil har us cheez ko dil se chahu qadr karo ke woh apni chamak kabhi na khaoe.
                    Jab yeh hasil kisi shaks se jud jata hai toh or qeemti hu jata hai pata hai kyu? kyu ke hum apna sukoon usme talash karte hai or jab hum apna sukoon kisi dosre se jod le yaqeen mane tab hum asal mein sukoon ko alvida keh dete hai.
                    Hamara rawayya us insaan ke mijaz per munhasir hu jata hai woh hame tawajjah de toh hum khud ko sab se khusnaseeb samajhne lagte hai or jab wahi shaks hame waqt khairat mein dene lage toh hum se zyada be-sukoon koi nahi huta or yeh besukooni hame zehni marz ki us stage per la chodti hai jaha hum khud se bezaar hujate hai. 
                    Kyu hum us insaan se itna jud jate hai? kyu us se judi cheze hame ahem lagne lagti hai? kyu woh din o raat hamari soch ka mehwar  ban jata hai? kyu use khush dekh hum apna ghum bhool jate hai? kyu hamare loye woh sab se ahem ban jata hai? kyu usper hamari soche khatam si hujati hai?
                    In sare kyu ka jawab dena koi lafzo ka khel nahi yeh jo kyu ulfat se jude hute hai unka jawab hargiz nahi huta yeh lafzo mein nahi ehsass se samjhe jate hai or yeh ehsass duniya ke har us lafzo per bhari hai jo is kyu ka jawab dena chahe per is ehsass se maar kha jate hai.<br/>
                    Mudda yeh hai ke jab woh hame hasil hu jate hai toh kuch kehte hai ab unme woh baat nahi, main kehti hu kya aapki chahat mein woh baat hi nahi thi jo aap hasil ke baad use faramoosh kr de rahe hai. Hqeeqat toh yeh hai ke jab man pasand shaks hasil hujae toh uski qadr o izzat dogni hu jati hai. Yahi toh asal chahat huti hai jo kabhi khtm nahi huti is jahan se us jahan taak aap ki sanso mein rachi basi huti hai.<br/>
                    Ager hasil kr uski qadr kho dete hai toh yaqeen mane aap ne kabhi us se sacchi ulfat ki hi nahi thi. Hasil ki qadar kerna unhi ki fitrat huti hai jinki fitrat, tarbiyat, or chahat azeem huti hai.<br/>
                    Jab sukoon or be-sukooni ek hi zaat se wabasta hu jae toh fir kuch yu huta hai<br/>
                    <mark>Woh hi Mera marz hai or us marz ki dawa bhi woh hi hai.</mark>
                    </div>
                </div>
            </div>    
            <a href="/mblog"><div className="text-xl text-[#ffffff] text-center"> Go back</div></a>
        </div>
    );
}