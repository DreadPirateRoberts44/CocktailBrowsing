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
        <div className="recipe-card">
          <h4>Ingredients</h4>
          <hr></hr>
          <ul className="ingList">
            {ingredients.map((p) => (
              <>
                <li className="ing">
                  {p.m} {p.i}
                </li>
                <hr></hr>
              </>
            ))}
          </ul>
        </div>
        <div className={"button-container"}>
          <Button
            handleClick={handleClick}
            prompt={"Flip Back"}
            cName={"back"}
          ></Button>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default Drink;
