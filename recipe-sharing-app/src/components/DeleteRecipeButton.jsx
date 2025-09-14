import { useRecipeStore } from "../recipeStore";

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      if (onDelete) onDelete();
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "6px",
        cursor: "pointer",
        marginTop: "15px",
        width: "100%",
      }}
    >
      🗑 Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
