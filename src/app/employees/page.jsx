import React from "react";

export default async function Employees() {
  // getting data from API route
  const res = await fetch("http://localhost:3000/api/items");
  const { data } = await res.json();

  return (
    <div className="mt-6">
      {data?.map((singleData) => (
        <li key={singleData?._id}>{singleData?.name}</li>
      ))}
    </div>
  );
}
