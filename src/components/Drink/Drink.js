import React, { useState, useEffect } from "react";
import "./Drink.css";

function Drink(props) {
  var ingredients = [];

  for (var i = 0; i < 16; i++) {
    const ing = props["strIngredient" + i];
    const measure = props["strMeasure" + i];

    if (ing != null && measure != null)
      ingredients.push({i: ing, m: measure});
  }

  return (
    <span>
      <div className={"drinkCard "}>
        <img src={props.strDrinkThumb} alt={props.strDrink}></img>
        <h1 data-text={props.strDrink}>{props.strDrink}</h1>
        <ol className="ingList">
          {ingredients.map((p) => <li className="ing">{p.m} of {p.i}</li>)}
        </ol>
      </div>
    </span>
  );
}

export default Drink;
