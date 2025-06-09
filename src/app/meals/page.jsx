import React from "react";
import MealSearchInput from "./components/MealSearchInput";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "All Meals",
  description: "Meals loaded from MealDB API",
};

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.search}`
      );
      const data = await res.json();
      return data?.meals;
    } catch (err) {
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <MealSearchInput></MealSearchInput>
      <div className="grid grid-cols-4 gap-4">
        {meals?.map((meal) => (
          <div key={meal?.idMeal}>
            <Image
              src={meal?.strMealThumb}
              width={641}
              height={641}
              alt={meal?.strMeal}
            />
            <h1 className={`${roboto.className} text-2xl font-bold`}>
              {meal?.strMeal}
            </h1>
            <p>{meal?.strInstructions}</p>
            <Link href={`meals/${meal?.idMeal}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
