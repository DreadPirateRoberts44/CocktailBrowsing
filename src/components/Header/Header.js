import React from "react";
import "./Header.css";

function Header(props) {
  const handleChange = (event) => {
    props.getDrinksByIngredient(event.target.value);
  };

  return (
    <div className="header">
      <div className="input-container">
        <span className="liqour">
          <label>Liqour: </label>
          <select name="Liquor" onChange={handleChange}>
            <option value="Whiskey">Whiskey</option>
            <option value="Vodka">Vodka</option>
            <option value="Tequila">Tequila</option>
            <option value="Gin">Gin</option>
            <option value="Bourbon">Bourbon</option>
            <option value="Rum">Rum</option>
            <option value="Brandy">Brandy</option>
          </select>
        </span>
        <span className="other">
          <label>Other Ingredients: </label>
          <input
            type="text"
            id="otherIng"
            name="Other Ingredients"
            placeholder="Enter space seperated ingredients"
          ></input>
        </span>
      </div>
    </div>
  );
}

export default Header;
