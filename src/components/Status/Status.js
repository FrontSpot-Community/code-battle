import React from 'react';
import style from './style.scss';

const Status = ({status}) => {
  return (
    <div className={style[`status${status}`]}>{status}</div>
  );
};

export default Status;
