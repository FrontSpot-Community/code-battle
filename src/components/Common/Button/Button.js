import React from 'react';
import style from './style.scss';

export default ({children, onClick}) => {
  return (<button onClick={onClick} className={style.button}>
    <span className={style.buttonText}>{children}</span>
  </button>
  );
};
