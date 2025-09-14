// src/components/SearchBar.jsx
import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (event) => {
    event.preventDefault(); // prevent page reload
    setSearchTerm(input);
    filterRecipes();
  };

  return (
    <form onSubmit={handleSearch} style={{ marginBottom: "10px" }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", width: "70%" }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          marginLeft: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
