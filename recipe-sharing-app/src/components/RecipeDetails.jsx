import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      {editing ? (
        <EditRecipeForm recipe={recipe} onClose={() => setEditing(false)} />
      ) : (
        <p>{recipe.description}</p>
      )}

      {!editing && <button onClick={() => setEditing(true)}>Edit</button>}
      <DeleteRecipeButton id={recipe.id} />
      <div style={{ marginTop: "10px" }}>
        <Link to="/">⬅ Back to all recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
