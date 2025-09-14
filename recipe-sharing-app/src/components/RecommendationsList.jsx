// src/components/RecommendationsList.jsx
import React, { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const recommendations = useMemo(() => {
    return recipes
      .filter((recipe) => !favoritesIds.includes(recipe.id))
      .slice(0, 5); // show top 5 recommendations for simplicity
  }, [recipes, favoritesIds]);

  if (!recommendations.length) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
