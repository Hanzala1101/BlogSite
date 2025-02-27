import Home from "./component/homeEdit"

const getBlogs = async (id) => {
  try {
    const res = await fetch(`https://blog-zaara.vercel.app/api/blog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs by id");
    }
    return res.json();
  } catch (error) {
    console.log("Error good loading blog: ", error);
  }
};


export default async function EditBlog({ params }) {
    const { blog } = await getBlogs(params.slug);
    // console.log(blog.famous,"fajdhsudfhasoidf")
    return (
      <Home id={params.slug} title={blog.title} description={blog.description}
        range={blog.range}
        famous={blog.famous} />
      
    );
}



