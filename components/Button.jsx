import React from "react";

const Button = ({ buttonText, action, style }) => {
  return (
    <button onClick={() => action()} className={"cripto-button " + style}>
      {buttonText}
    </button>
  );
};

export default Button;