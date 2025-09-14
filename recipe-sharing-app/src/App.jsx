import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleAddRecipe = () => {
    const title = prompt("Enter recipe title:");
    const description = prompt("Enter recipe description:");
    if (title && description) {
      addRecipe({ title, description });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing App</h1>

      <button
        onClick={handleAddRecipe}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Add Recipe
      </button>

      <ul>
        {recipes.length === 0 && <p>No recipes yet. Add one above!</p>}
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mb-2">
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 underline">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
