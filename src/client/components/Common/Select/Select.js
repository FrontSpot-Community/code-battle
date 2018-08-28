import React from 'react';

import style from './style.scss';

export const Select = (props) => {
  const {value, label, values, className = '', ...rest} = props;

  return (
    <label className={`${style.label} ${className}`}>
      <span>{label}</span>
      <div className={style.wrapper}>
        <select
          className={style.select}
          value={value} { ...rest }>
          {
            values.map((item) =>
              <option key={item.value} value={item.value}>{item.text}</option>
            )
          }
        </select>
      </div>
    </label>
  );
};

export default Select;
