import React from 'react';

import style from './style.scss';

const BodyMainCol = (props) => {
  return (
    <div className={style.col}>
      {Object.entries(props.positions).sort((a, b) => a - b).map(([key, person]) => {
        return (
          <div key={key}>{person.name}</div>
        );
      })}
    </div>
  );
};

export default BodyMainCol;
