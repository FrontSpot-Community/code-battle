import React from 'react';
import BattleBodyRow from '../BattleBodyRow';
import BattleHeadRow from '../BattleHeadRow';

import style from './style.scss';

const BattleTable = (props) => {
  return (
    <div className={style.wrapper}>
      <BattleHeadRow
        headerCells={props.headerCells}
        onClickSort={props.onClickSort}
        nextSorts={props.nextSorts}
      />
      <section className={style.body}>
        {
          props.tasks.map((item, idx) => (
            <BattleBodyRow
              task={item}
              key={idx}
              preLink={props.preLink}
            />
          ))
        }
      </section>
    </div>
  );
};

export default BattleTable;
