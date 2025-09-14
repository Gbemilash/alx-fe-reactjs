import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import { useRecipeStore } from "./recipeStore";

export default function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // ✅ Seed data (will only run on first load)
    setRecipes([
      {
        id: 1,
        title: "Spaghetti Bolognese",
        description: "Classic Italian pasta with a rich tomato and meat sauce.",
      },
      {
        id: 2,
        title: "Chicken Curry",
        description: "Spicy chicken curry with coconut milk and fresh herbs.",
      },
    ]);
  }, [setRecipes]);

  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>🍲 Recipe Sharing App</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/add">Add Recipe</Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
