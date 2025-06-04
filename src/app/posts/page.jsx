import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-3 gap-5">
      {posts?.map((singlePost) => (
        <div key={singlePost?.id}>
          <p>{singlePost?.title}</p>
          <p>{singlePost?.body}</p>
          <Link className="" href={`/posts/${singlePost.id}`}>
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
