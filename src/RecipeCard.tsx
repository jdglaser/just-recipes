import {Link} from "react-router-dom";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Recipe } from "./types";

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard(props: RecipeCardProps) {
  const {id, name, description, image, ingredients, steps, tags} = props.recipe;
  const [loading, setLoading] = useState(true);

  return (
    <Link to={`/recipe/${id}`}>
        <div className="recipe-card">
          <div className="card-header">
            <h3>{name}</h3>
          </div>
          <div className="recipe-image-holder">
              <BeatLoader loading={loading} size={15} margin={2} />
              <img className="recipe-image" src={image} onLoad={() => setLoading(false)} onError={() => setLoading(false)}></img>
          </div>
          <div className="tags">
            <i>{tags.join(", ")}</i>
          </div>
        </div>
    </Link>
  )
}