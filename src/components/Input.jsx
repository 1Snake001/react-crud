import React from "react";

function Input({ name, inputValue, onChange, onBlur, errorMessage }) {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        onBlur={onBlur}
        name={name}
        id={name}
        value={inputValue}
        onChange={onChange}
        className={`form-control ${errorMessage && 'error'}`}
        type="text"
      />
      <div className="errorMessage text-danger">{errorMessage}</div>
    </div>
  );
}
export default Input;
