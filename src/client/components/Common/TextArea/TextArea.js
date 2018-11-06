import React from 'react';

import style from './style.scss';

export const TextArea = (props) =>{
  const {value, label, className = '', ...rest} = props;

  return (
    <label className={`${style.label} ${className}`}>
      <span>{label}</span>
      <textarea
        className={style.textArea}
        value={value} { ...rest }
      />
    </label>
  );
};

export default TextArea;
