## Data Fetch in Next js

In Next Js data can be fetched simply by writing async function instead of using useEffect() hook. Example:

```jsx
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
        </div>
      ))}
    </div>
  );
}
```
