import { useState } from "react";
import { useRecipeStore } from "../recipeStore";


const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Please enter a recipe title.");
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        rows={4}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ➕ Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
