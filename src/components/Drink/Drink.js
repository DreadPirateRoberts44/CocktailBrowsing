import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Button from "../Button/Button";
import "./Drink.css";

function Drink(props) {
  const [flipped, setFlipped] = useState(false);
  var ingredients = [];

  for (var i = 0; i < 16; i++) {
    const ing = props.drink["strIngredient" + i];
    const measure = props.drink["strMeasure" + i];

    if (ing != null && measure != null)
      ingredients.push({ i: ing, m: measure });
  }
  const handleClick = () => {
    setFlipped(!flipped);
  };
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className={"drinkCard "}>
        <img src={props.drink.strDrinkThumb} alt={props.drink.strDrink}></img>
        <h2 data-text={props.drink.strDrink}>{props.drink.strDrink}</h2>
        <Button
          handleClick={handleClick}
          prompt={"See Ingredients"}
          cName={"front"}
        ></Button>
      </div>
      <div className={"drinkCard"}>
        <ol className="ingList">
          {ingredients.map((p) => (
            <li className="ing">
              {p.m} {p.i}
            </li>
          ))}
        </ol>
        <Button
          handleClick={handleClick}
          prompt={"Flip Back"}
          className={"back"}
        ></Button>
      </div>
    </ReactCardFlip>
  );
}

export default Drink;
