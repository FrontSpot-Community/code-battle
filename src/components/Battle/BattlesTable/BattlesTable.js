import React from 'react';
import BattleBodyRow from '../BattleBodyRow';
import BattleHeadRow from '../BattleHeadRow';

import style from './style.scss';

const BattleTable = (props) => {
  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead>
          <BattleHeadRow
            headerCells={props.headerCells}
            onClickSort={props.onClickSort}
            nextSorts={props.nextSorts}
          />
        </thead>
        <tbody>
          {
            props.tasks.map((item, idx) => (
              <BattleBodyRow
                task={item}
                key={idx}
                preLink={props.preLink}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default BattleTable;
