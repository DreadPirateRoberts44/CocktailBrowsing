import React, { useState, useEffect } from "react";

function Drink(props) {
  const ingredients = [
    props.strIngredient1,
    props.strIngredient2,
    props.strIngredient3,
    props.strIngredient4,
    props.strIngredient5,
    props.strIngredient6,
    props.strIngredient7,
    props.strIngredient8,
    props.strIngredient9,
    props.strIngredient10,
    props.strIngredient11,
    props.strIngredient12,
    props.strIngredient13,
    props.strIngredient14,
    props.strIngredient15,
  ];

  return (
    <div className={"drinkCard "}>
      <img src={props.strDrinkThumb} alt={props.strDrink}></img>
    </div>
  );
}

export default Drink;
