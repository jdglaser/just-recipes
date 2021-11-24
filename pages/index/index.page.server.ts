import _recipes from "../../public/recipe.json";
import { Recipe } from "../../renderer/types";

const recipes = _recipes as Recipe[];

export { prerender, onBeforeRender }

async function onBeforeRender() {
  return {
    pageContext: {
      pageProps: {
        recipes
      }
    }
  }
}

async function prerender() {
  const indexPage = {
    url: "/",
  }

  return [indexPage]
}