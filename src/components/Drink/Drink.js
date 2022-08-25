import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Button from "../Button/Button";
import "./Drink.css";

function Drink(props) {
  const [flipped, setFlipped] = useState(false);

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
          {props.drink.ingredients.map((ing, index) => (
            <li className="ing">
              {props.drink.measures[index]} {ing}
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
