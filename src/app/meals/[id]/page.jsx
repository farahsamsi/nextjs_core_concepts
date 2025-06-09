import React from "react";

export const fetchSingleMeal = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data?.meals;
  } catch (err) {
    return [];
  }
};

// meta data setting
export async function generateMetadata({ params }) {
  const p = await params;

  // fetch post information
  const [meal] = await fetchSingleMeal(p.id);

  return {
    title: meal.strMeal,
    description: meal.strInstructions,
  };
}

export default async function SingleMealPage({ params }) {
  const p = await params;

  const [meal] = await fetchSingleMeal(p.id);

  return (
    <div>
      <h1>{meal?.strMeal}</h1>
    </div>
  );
}
