import Header from "./Header";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import {Link, useParams} from "react-router-dom";
import _recipes from "../public/recipe.json";
import {Recipe} from "./types";

const recipes: Recipe[] = _recipes;

function RecipeDetailView() {
  const { id } = useParams();
  const [loadingImage, setLoadingImage] = useState(true);

  if (!id) {
    return (<>Not found :(</>)
  }

  const recipe = recipes.find(recipe => recipe.id.toString() === id);

  if (!recipe) {
    return (<>Not found :(</>)
  }

  return (
      <div className="recipe-detail-card">
        <div className="card-detail-header">
         <h2>{recipe.name}</h2>
        </div>
        <div className="detail-actions">
          <Link to="/">
            <img src="/home.svg" className="home icon"></img>
          </Link>
          <img src="/printer.svg" className="print icon"
            onClick={() => window.print()}>
          </img>
        </div>
        <div className="recipe-detail-image-holder">
            <BeatLoader loading={loadingImage} margin={2} size={15} />
            <img className="recipe-detail-image" src={recipe.image} onLoad={() => setLoadingImage(false)}></img>
        </div>
        <div className="recipe-content">
          <div className="ingredient-list">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient) => {
                return <li key={ingredient}>{ingredient}</li>
              })}
            </ul>
          </div>
          <div className="intruction-list">
            <h3>Instructions</h3>
            <ol>
              {recipe.steps.map((step) => {
                return <li key={step}>{step}</li>
              })}
            </ol>
          </div>
          <div className="tags">
            <h3>Tags</h3>
            <div className="tag-list">
              <i>{recipe.tags.join(", ")}</i>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RecipeDetailView