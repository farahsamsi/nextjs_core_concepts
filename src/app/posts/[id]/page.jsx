import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

// meta data setting
export async function generateMetadata({ params }) {
  const p = await params;

  // fetch post information
  const post = await getSinglePost(p.id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function SinglePost({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p?.id);
  return (
    <div>
      <h1 className="text-xl">{singlePost?.title}</h1>
      <p>{singlePost?.body}</p>
    </div>
  );
}
