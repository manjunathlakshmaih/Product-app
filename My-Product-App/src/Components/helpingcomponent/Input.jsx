import React from "react";
import "./Input.css";

const Input = ({ register, error, name, type, placeholder, rules }) => {
  return (
    <div className="input-group">
      <input type={type} placeholder={placeholder} {...register(name, rules)} />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default Input;
