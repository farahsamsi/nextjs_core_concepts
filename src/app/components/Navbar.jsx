"use client";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-4 justify-around md:w-1/2">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/posts">
          <li>Posts</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/meals">
          <li>Meals</li>
        </Link>
        <Link href="/employees">
          <li>Employees</li>
        </Link>
        <Link href="/employees/add">
          <li>Add Employee</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
