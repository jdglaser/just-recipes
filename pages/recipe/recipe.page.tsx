import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import {Recipe} from "../../renderer/types";
import {Page as ErrorPage} from "../../renderer/_error.page"
import "./recipe.css";

export { Page }

function Page({recipe}: {recipe: Recipe}) {
  const [loadingImage, setLoadingImage] = useState(true);

  if (!recipe) {
    return (<ErrorPage is404 />)
  }

  return (
      <div className="recipe-detail-card">
        <div className="card-detail-header">
         <h2>{recipe.name}</h2>
        </div>
        <div className="detail-actions">
          <a href="/">
            <img src="/home.svg" className="home icon"></img>
          </a>
          <img src="/printer.svg" className="print icon"
            onClick={() => window.print()}>
          </img>
        </div>
        <div className="recipe-detail-image-holder">
          <img className="recipe-detail-image" src={recipe.image} onLoad={() => {console.log("Setting to false"); setLoadingImage(false)}}></img>
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