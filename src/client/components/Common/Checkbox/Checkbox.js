import React from 'react';

import style from './style.scss';

export const Checkbox = (props) => {
  const {text, className = '', ...rest} = props;

  return (
    <label className={`${style.wrapper} ${style.label} ${className}`}>
      <input
        className={style.checkbox}
        type="checkbox"
        {...rest}
      />
      <span className={style.fakeCheckbox} />
      <span className={style.fakeCheckobText}>{text}</span>
    </label>
  );
};

export default Checkbox;
