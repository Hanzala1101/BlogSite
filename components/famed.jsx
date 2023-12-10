import styles from "@/styles/Home.module.css";
import { Michroma, Marcellus_SC, Amiri } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Mar = Marcellus_SC({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

const getBlogs = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:3000/api/blog`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default function Famed() {
  const [Blogs, setBlogs] = useState();
  const [loding, setloding] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const {Blogs}  = await getBlogs();
      console.log(Blogs);
      setBlogs(Blogs);
    };
  
    fetchData();
    setloding(true)
  }, []);

  return (
    <section id="famed">
      <div className={styles.background_image}>
        <div className="text-4xl lg:text-5xl text-white ml-5 pt-8">
          <div className={Mac.className}>FAMOUSE ARTICLES</div>
        </div>
        {loding?<div className={`m-10 ${styles.container}`}>
          {Blogs?.filter((blog) => blog.famous)
            .sort((a, b) => b.range - a.range)
            .slice(0, 3)
            .map((blog) => {
              return (
                <Link href={`/hasil/${blog._id}`}>
                  <div className={styles.articleBox}>
                    <div className={`text-6xl text-center ${Mar.className}`}>
                      {blog.title}
                    </div>
                    <div
                      className={`text-xl text-center p-10 overflow-hidden ${Ami.className}`}
                    >
                      {parse(blog.description.slice(0, 300))}...
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>:<div className="text-4xl w-screen h-screen flex justify-center align-center">....</div>}
      </div>
    </section>
  );
}
