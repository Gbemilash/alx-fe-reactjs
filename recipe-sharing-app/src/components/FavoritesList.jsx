// src/components/FavoritesList.jsx
import React, { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favoritesIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favorites = useMemo(() => {
    return favoritesIds
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean); // Remove undefined in case recipe was deleted
  }, [favoritesIds, recipes]);

  if (!favorites.length) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
