import "./App.css";
import Drink from "./components/Drink/Drink";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";

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
      var newDrinks = [];
      result.forEach(async (drink) => {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`
        );
        const data = await res.json();
        newDrinks.push(data.drinks[0]);

        setDrinks((drinks) => [...drinks, data.drinks[0]]);
      });

      //setDrinks(newDrinks);
    }
    shuffle(data.drinks);
    createDrink(data.drinks);
  };

  useEffect(() => {
    getDrinksByIngredient("Whiskey");
  }, []);

  return (
    <>
      <Header getDrinksByIngredient={getDrinksByIngredient}></Header>
      <div className="App">
        {drinks.map((drink, index) => {
          return <Drink drink={drink}></Drink>;
        })}
      </div>
    </>
  );
}

export default App;
