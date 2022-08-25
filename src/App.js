import "./App.css";
import Drink from "./components/Drink/Drink";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function App() {
  const [drinks, setDrinks] = useState([]);
  const [displayDrinks, setDisplayDrinks] = useState([]);

  const getDrinksByIngredient = async (ingredient) => {
    setDrinks([]);
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient
    );
    const data = await res.json();

    function createDrink(result) {
      result.forEach(async (d) => {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${d.idDrink}`
        );
        const data = await res.json();
        var drink = data.drinks[0]

        drink.ingredients = []
        drink.measures = []

        for (var i = 0; i < 16; i++) {
          const ing = drink["strIngredient" + i];
          const measure = drink["strMeasure" + i];

          if (ing != null && measure != null) {
            drink.ingredients.push(ing);
            drink.measures.push(measure);
          }
        }

        setDrinks((drinks) => [...drinks, drink]);
      });
    }
    shuffle(data.drinks);
    createDrink(data.drinks);
    setDisplayDrinks((p) => drinks)
  };

  const filterDrinksByIngredients = (ingredients) => {
    if (ingredients.length === 0) {
      console.log("reset!")
      setDisplayDrinks((p) => drinks);
      return
    }

    var newDrinks = drinks

    ingredients.forEach((i) => {
      newDrinks = newDrinks.filter((d) => d.ingredients.includes(i));
    });

    if (newDrinks.length !== 0) {
      setDisplayDrinks((p) => newDrinks);
    }
  };

  useEffect(() => {
    getDrinksByIngredient("Whiskey");
  }, []);

  return (
    <>
      <Header getDrinksByIngredient={getDrinksByIngredient}
              filterDrinksByIngredients={filterDrinksByIngredients}></Header>
      <div className="App">
        {displayDrinks.map((drink, index) => {
          return <Drink drink={drink}></Drink>;
        })}
      </div>
    </>
  );
}

export default App;
