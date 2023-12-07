import styles from "@/styles/Home.module.css";
import { Michroma , Marcellus_SC , Amiri} from "next/font/google";

const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Mar = Marcellus_SC({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

const getBlogs = async () => {
    try {
      const res = await fetch("http://127.0.0.1:3000/api/blog");
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

export default async function Famed() {
    // useEffect(async() => {
        const {Blogs} = await getBlogs();
        // console.log(Blogs[0].famous)
        // return ()=>Blogs;
    // }, [])
    
    
    return (
    <section id="famed">
        <div className={styles.background_image}>
            <div className="text-4xl lg:text-5xl text-white ml-5 pt-8">
                <div className={Mac.className}>FAMOUSE ARTICLES</div>
            </div>
            <div className={`m-10 ${styles.container}`}>
                {Blogs.filter((blog)=>blog.famous).map((blog)=>{
                    return(
                        <a href="/hasil"><div className={styles.articleBox}>
                        <div className={`text-6xl text-center ${Mar.className}`}>{blog.title}</div>
                        <div className={`text-xl text-center p-10 ${ Ami.className}`}>{blog.description.slice(0,400)}</div>
                    </div></a>        
                    )
                })}
            </div>
        </div>
    </section>
  );
};

