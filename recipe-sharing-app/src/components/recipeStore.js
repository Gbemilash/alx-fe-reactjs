/*
 Compatibility shim: re-export the real store at ../recipeStore.js
 so imports that expect src/components/recipeStore.js don't break.
*/
import { useRecipeStore } from '../recipeStore';
export default useRecipeStore;
export { useRecipeStore };
