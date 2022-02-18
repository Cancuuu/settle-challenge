import React from "react";

const Input = ({ disabled, placeholder, value, onAction }) => {
  return (
    <input
      disabled={disabled}
      type="number"
      placeholder={placeholder}
      className="input w-full h-16 text-xl border-2 border-gray-400 rounded-xl p-2"
      onChange={(e) => onAction(e.target.value)}
      value={value}
    />
  );
};

export default Input;
