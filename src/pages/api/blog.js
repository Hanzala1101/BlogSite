import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("s1");

       const blog = await db
           .collection("xy")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(blog);
   } catch (e) {
       console.error(e);
   }
};