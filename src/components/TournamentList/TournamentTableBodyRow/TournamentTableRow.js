import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';

export default class TournamentTableRow extends Component {
  renderTags = (tags) => {
    return tags.map((tag, title) => (
      <span className={style.tag}
        key={tag + title}>{tag}
      </span>
    ));
  };

  render() {
    const {tournament} = this.props;
    const {
      id,
      tags,
      name,
      difficulty,
      language,
      department,
      remaining,
      status,
      taskIds
    } = tournament;

    const numberOfTasks = taskIds.length;

    return (
      <tr className={style.row}>
        <td className={style.tournamentInfo}>
          <Link className={style.tournamentName}
            to={`/${id}`}>{name}
          </Link>
          {this.renderTags(tags, name)}
        </td>
        <td>{numberOfTasks} tasks</td>
        <td>{difficulty}</td>
        <td>{language}</td>
        <td>{department}</td>
        <td>
          <span className={style[`status${status}`]}>{status}</span>
          <br/>
          {status === 'Started' && <span>{remaining}</span>}
        </td>
      </tr>
    );
  }
}
