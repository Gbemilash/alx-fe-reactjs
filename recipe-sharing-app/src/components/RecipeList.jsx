import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";


import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const [editingId, setEditingId] = useState(null);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "15px" }}>
          {editingId === recipe.id ? (
            <EditRecipeForm recipe={recipe} onClose={() => setEditingId(null)} />
          ) : (
            <>
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description}</p>
              <button onClick={() => setEditingId(recipe.id)}>Edit</button>
              <DeleteRecipeButton id={recipe.id} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
