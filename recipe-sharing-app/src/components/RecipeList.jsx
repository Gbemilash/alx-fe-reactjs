import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>No recipes yet. Add one!</p>;
  }

  return (
    <div style={{ display: "grid", gap: "15px" }}>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            background: "#fafafa",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0" }}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none", color: "#007bff" }}>
              {recipe.title}
            </Link>
          </h3>
          <p style={{ margin: "0", color: "#444" }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
