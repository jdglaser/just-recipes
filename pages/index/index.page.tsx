import React from "react";
import { useState } from "react";
import { Recipe } from "../../renderer/types";
import RecipeCard from "./RecipeCard";
import "../recipe/recipe.css";

export { Page };

function Page({recipes}: {recipes: Recipe[]}) {
  const [searchValue, setSearchValue] = useState("");
  const recipeCards = recipes
    .filter((recipe) => {
      const lowerSearchValue = searchValue.toLowerCase();
      if (searchValue != "") {
        return recipe.name.toLowerCase().includes(lowerSearchValue) ||
          recipe.tags.some((tag) => tag.toLowerCase().includes(lowerSearchValue))
      } else {
        return true;
      }
    })
    .sort((recipeA, recipeB) => {
      const textA = recipeA.name.toLowerCase()
      const textB = recipeB.name.toLowerCase()
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    .map((recipe) => {
      return (
        <RecipeCard key={recipe.id} recipe={recipe} />
      )
    })

  return (
    <>
      <div className="search">
        <input type="text" value={searchValue} onChange={(evt) => setSearchValue(evt.target.value)} />
      </div>
      <div className="recipes">
        {recipeCards}
      </div>
    </>
  )
}
