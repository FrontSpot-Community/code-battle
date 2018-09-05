import React from 'react';
import style from './style.scss';

const HeadRow = (props) => {
  return (
    <header className={style.header}>
      {
        Object.entries(props.headerCells).map(([key, value]) => (
          <p key={key} className={style[key]}>
            {value}
          </p>
        ))
      }
    </header>
  );
};

export default HeadRow;
