import "./App.css";
import Drink from "./components/Drink";
import React, { useState, useEffect } from "react";
import { queryByTitle } from "@testing-library/react";

function App() {
  const [drinks, setDrinks] = useState([]);

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  const getDrinksByIngredient = async (ingredient) => {
    setDrinks([]);
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient
    );
    const data = await res.json();

    function createDrink(result) {
      result.forEach(async (drink) => {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`
        );
        const data = await res.json();

        setDrinks((drinks) => [...drinks, data.drinks[0]]);
      });
    }
    shuffle(data.drinks);
    createDrink(data.drinks);
  };

  useEffect(() => {
    getDrinksByIngredient("7-Up");
  }, []);

  return (
    <div className="App">
      {console.log(drinks)}
      {drinks.map((drink, index) => {
        return Drink(drink);
      })}
    </div>
  );
}

export default App;
