import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

export default function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Recipe Sharing App</h1>
      <Routes>
        {/* Home page with recipe list and add form */}
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        {/* Details page for a specific recipe */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

