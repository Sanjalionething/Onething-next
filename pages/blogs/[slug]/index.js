import Image from "next/image";
// import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
// import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API

const SinglePostPage = async ({ params }) => {
  // const { slug } = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  return (
      <div className="textContainer">
        <h1>Blog Detail</h1>
      </div>
  );
};

export default SinglePostPage;
