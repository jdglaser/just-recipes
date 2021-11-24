import _recipes from "../../public/recipe.json";
import { Recipe } from "../../renderer/types";
import type { PageContextBuiltIn } from "vite-plugin-ssr";

const recipes = _recipes as Recipe[];

export { prerender, onBeforeRender }

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const { recipeId } = pageContext.routeParams;

  const recipe = recipes.find(recipe => recipe.id.toString() === recipeId);
  const pageProps = { recipe };

  const documentProps = {
    title: `${recipe?.name}`,
    description: `${recipe?.description}`,
    image: recipe?.image
  }

  return {pageContext: {pageProps, documentProps}}
}

async function prerender() {
  const recipePages = recipes.map(recipe => {
    const url = `/recipe/${recipe.id}`;

    return {
      url,
    }
  })

  return [...recipePages]
}