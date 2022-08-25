import "./App.css";
import Drink from "./components/Drink/Drink";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function caseInsensitiveIncludes(array, element) {
  return array.some(e => {
    return e.toLowerCase() === element.toLowerCase();
  });
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

    function setDrinksFromList(l) {
      l.forEach(async (d) => {
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
        setDisplayDrinks((drinks) => [...drinks, drink]);
      });
    }

    // shuffle(data.drinks);
    setDrinksFromList(data.drinks);
  };

  const filterDrinksByIngredients = (ingredients) => {
    if (ingredients[0] === "") {
      console.log("reset!")
      setDisplayDrinks((p) => drinks);
      return
    }

    var newDrinks = drinks

    ingredients.forEach((i) => {
      newDrinks = newDrinks.filter((d) => caseInsensitiveIncludes(d.ingredients, i));
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
