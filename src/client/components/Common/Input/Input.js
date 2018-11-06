import React from 'react';

import style from './style.scss';

export const Input = (props) => {
  const {value, label, className = '', ...rest} = props;

  return (
    <label className={`${style.label} ${className}`}>
      <span>{label}</span>
      <input
        className={style.input}
        value={value} { ...rest }
      />
    </label>
  );
};

export default Input;
