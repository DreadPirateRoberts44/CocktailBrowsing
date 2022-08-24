import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [drinks, setDrinks] = useState([]);

  const getDrinksByIngredient = async (ingredient) => {
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
        setDrinks((currentList) =>
          [...currentList, data.drinks[0]].sort((a, b) =>
            a.name > b.name ? 1 : -1
          )
        );
      });
    }
    createDrink(data.drinks);
  };
  useEffect(() => {
    getDrinksByIngredient("vodka");
  }, []);

  return (
    <div className="App">
      {drinks.map((drink, index) => {
        return <p key={index}>{drink.strDrink}</p>;
      })}
    </div>
  );
}

export default App;
