import React from 'react';
import style from './style.scss';

const FormItem = (props) => {
  const {label, type = 'text', ...rest} = props;
  return (
    <div
      className={style.formItem}
    >
      <label className={style.formItemTitle}>
        {label}
        <input
          type={type}
          className={style.formItemValue}
          {...rest}
        />
      </label>
    </div>
  );
};

export default FormItem;
