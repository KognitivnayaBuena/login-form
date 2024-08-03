import React from 'react';

import classes from "./Input.module.css";

interface InputProps {
  label: string;
  id: string;
  type: string;
  value: string;
  required?: boolean;
  autocomplete?: string; 
  name?: string;
  iconRight?: JSX.Element;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  value,
  required,
  autocomplete,
  name,
  iconRight,
  className,
  onChange
}) => {
  return (
    <div className={classes.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        name={name}
        autoComplete={autocomplete}
        onChange={onChange}
        className={`${classes.input} ${className}`}
      />
      {iconRight && <>{iconRight}</>}
    </div>
  );
};

export default Input;
