import React from 'react';

import style from './style.scss';

const BattleHeadRow = (props) => {
  return (
    <tr className={style.tr}>
      {
        props.headerCells.map((item, idx) => (
          <th
            onClick={() => {
              item.sorted && props.onClickSort(item.propName);
            }}
            key={idx}
            className={props.nextSorts[item.propName] ? style.rotated : style.nonRotated}
          >
            {item.value}
          </th>
        ))
      }
    </tr>
  );
};

export default BattleHeadRow;
