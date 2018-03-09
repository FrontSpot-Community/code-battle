import React from 'react';

import style from './style.scss';

export const Switcher = (props) => {
  const {checked, onChange, disabled, className = '', ...rest} = props;

  return (
    <div className={`${style.switcher} ${className}`}>
      <label className={style.switcherWrapper}>
        <input
          className={style.switcherWrapperInput}
          type='checkbox'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <span className={style.switcherWrapperFakeInput} />
        {!disabled &&
          <span className={style.switcherCheckedText}>{checked ? 'Yes' : 'No'}</span>}
      </label>
    </div>
  );
};

export default Switcher;
