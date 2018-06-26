import React from 'react';
import style from './style.scss';

const HeadRow = (props) => {
  return (
    <header className={style.header}>
      {
        props.headerCells.map((item, idx) => (
          <p key={idx}>
            {item}
          </p>
        ))
      }
    </header>
  );
};

export default HeadRow;
