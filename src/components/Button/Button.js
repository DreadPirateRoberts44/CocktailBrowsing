import React from "react";
import "./Button.css";

function FlipButton(props) {
  return (
    <button className={props.cName} onClick={props.handleClick}>
      {props.prompt}
    </button>
  );
}

export default FlipButton;
