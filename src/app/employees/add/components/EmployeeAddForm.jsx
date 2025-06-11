"use client";

import { useRouter } from "next/navigation";

export default function EmployeeAddForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.employeeName.value;

    const payload = { name };
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);
    if (result.insertedId) {
      form.reset();
      router.push("/employees");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="employeeName" placeholder="Employee Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
