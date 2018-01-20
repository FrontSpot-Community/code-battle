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
      name,
      tags,
      difficulty,
      language,
      department,
      remaining,
      status,
      // taskIds,
      numberOfTasks
    } = tournament;

    // const numberOfTasks = taskIds.length;

    return (
      <section className={style.row}>
        <div className={style.tournamentInfo}>
          <Link className={style.tournamentName}
            to={{pathname: `/${id}`}}>{name}
          </Link>
          {this.renderTags(tags, name)}
        </div>
        <div className={style.item}>{numberOfTasks} tasks</div>
        <div className={style.item}>{difficulty}</div>
        <div className={style.item}>{language}</div>
        <div className={style.item}>{department}</div>
        <div className={style.item}>
          <span className={style[`status${status}`]}>{status}</span>
          <br/>
          {status === 'Started' && <span>{remaining}</span>}
        </div>
      </section>
    );
  }
}
