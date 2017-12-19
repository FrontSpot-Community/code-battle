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
    <tr className={style.tr}>
      <td><Link className={style.title} to={`${props.preLink}/${task.id}`}>{task.title}</Link></td>
      <td className={style.faint}>{task.difficulty}</td>
      <td className={style.faint}>{stars}</td>
      <td className={style.faint}>{task.satisfaction}</td>
      <td className={style.faint}>{task.solvedBy}</td>
      <td
        className={task.status === 'Open' ? style.status_open : style.status_resolved}
      >
        {task.status}
      </td>
    </tr>
  );
};

export default BattleBodyRow;
