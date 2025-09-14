import { useRecipeStore } from "./recipeStore";



const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => deleteRecipe(id)}
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "5px 10px",
        marginTop: "10px",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
