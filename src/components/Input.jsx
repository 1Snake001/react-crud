import React from "react";

function Input({ name, inputValue, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        name={name}
        id={name}
        value={inputValue}
        onChange={onChange}
        className="form-control"
        type="text"
      />
    </div>
  );
}
export default Input;
