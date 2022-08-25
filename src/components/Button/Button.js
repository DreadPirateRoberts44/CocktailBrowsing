import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Button.css";

function FlipButton(props) {
  return (
    <button
      className={"flip-button " + props.flipped ? "flipped" : "not-flipped"}
      onClick={props.handleClick}
    >
      {props.prompt}
    </button>
  );
}

export default FlipButton;
