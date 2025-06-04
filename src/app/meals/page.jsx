import React from "react";
import MealSearchInput from "./components/MealSearchInput";

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
            <h1 className="text-2xl font-bold">{meal?.strMeal}</h1>
            <p>{meal?.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
