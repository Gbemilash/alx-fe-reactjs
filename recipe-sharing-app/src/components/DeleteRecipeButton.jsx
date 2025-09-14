import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white p-2 rounded mt-2"
    >
      Delete Recipe
    </button>
  );
}
