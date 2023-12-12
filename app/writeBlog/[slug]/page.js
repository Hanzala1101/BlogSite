import Home from "../component/homeEdit"

const getBlogs = async (id) => {
  try {
    const res = await fetch(`http://127.0.0.1:3000/api/blog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs by id");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


export default async function WiteBlog({ params }) {
  const id = params.slug;
  // console.log("id"+ id)
  const { blog } = await getBlogs(params.slug);
  // console.log(blog.title +"blogssa")

  return (
    <Home id={id} title={blog.title} description={blog.description}
      range={blog.range}
      famous={blog.famous} />
  );
}



