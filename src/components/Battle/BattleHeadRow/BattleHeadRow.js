import React from 'react';

import style from './style.scss';

const BattleHeadRow = (props) => {
  return (
    <header className={style.header}>
      {
        props.headerCells.map((item, idx) => (
          <div
            onClick={() => {
              item.sorted && props.onClickSort(item.propName);
            }}
            key={idx}
            className={props.nextSorts[item.propName] ? style.rotated : style.nonRotated}
          >
            {item.value}
          </div>
        ))
      }
    </header>
  );
};

export default BattleHeadRow;
