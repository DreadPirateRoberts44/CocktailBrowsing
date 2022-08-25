import React from "react";
import "./Header.css";

function Header(props) {
  const handleSelectChange = (event) => {
    props.getDrinksByIngredient(event.target.value);
  };

  const handleInputChange = (event) => {
    const ingredients = event.target.value.split(",").map((t) => t.trim())
    props.filterDrinksByIngredients(ingredients);
  };

  return (
    <div className="header">
      <div className="input-container">
        <label>Liqour: </label>
        <select name="Liquor" onChange={handleSelectChange}>
          <option value="none"></option>
          <option value="Vodka">Vodka</option>
          <option value="Tequila">Tequila</option>
          <option value="Gin">Gin</option>
          <option value="Whiskey">Whiskey</option>
          <option value="Bourbon">Bourbon</option>
          <option value="Rum">Rum</option>
          <option value="Brandy">Brandy</option>
        </select>
        <label>Other Ingredients</label>
        <input
          type="text"
          id="otherIng"
          name="Other Ingredients"
          onChange={handleInputChange}
          placeholder="Enter space seperated ingredients"
        ></input>
      </div>
    </div>
  );
}

export default Header;
