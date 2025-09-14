import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) return <p style={{ textAlign: "center" }}>Recipe not found.</p>;

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h2 style={{ marginTop: 0 }}>{recipe.title}</h2>
      <p style={{ color: "#555" }}>{recipe.description}</p>

      <h3 style={{ marginTop: "20px" }}>✏️ Edit Recipe</h3>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate("/")} />
    </div>
  );
};

export default RecipeDetails;
