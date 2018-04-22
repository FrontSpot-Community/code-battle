import React from 'react';
import {Link} from 'react-router-dom';

import style from './style.scss';

const BattleBodyRow = (props) => {
  const {task} = props;
  const stars = [];
  for (let i = 0; i < task.stars; i++) {
    stars.push(<i key={i} className="glyphicon glyphicon-star" />);
  }
  return (
    <div className={style.row}>
      <div><Link className={style.title} to={`/${props.preLink}/${task.id}`}>{task.name}</Link></div>
      <div className={style.faint}>{task.complexity}</div>
      {/* <div className={style.faint}>{stars}</div> */}
      {/* <div className={style.faint}>{task.satisfaction}</div>
      <div className={style.faint}>{task.solvedBy}</div> */}
      <div
        className={task.status === 'Open' ? style.status_open : style.status_resolved}
      >
        {task.status}
      </div>
    </div>
  );
};

export default BattleBodyRow;
