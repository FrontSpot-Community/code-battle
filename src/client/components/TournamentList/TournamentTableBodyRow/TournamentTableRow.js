import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';

import DateView from 'src/client/components/DateView';
import Status, {STATUS} from 'src/client/components/Status';

export default class TournamentTableRow extends Component {
  renderTags = (tags) => {
    return tags.map((tag, title) => (
      <span className={style.tag}
        key={tag + title}>{tag}
      </span>
    ));
  };

  getSecStyle = () => {
    const {name} = this.props.tournament;
    return name === 'SEC Tournament'
      ? {color: 'rgb(57, 194, 215)'}
      : {};
  }

  render() {
    const {tournament, adminMode} = this.props;
    const {
      id,
      name,
      tags,
      difficulty,
      language,
      department,
      endDate,
      status,
      taskIds
    } = tournament;

    // const numberOfTasks = taskIds.length;
    let remaining = endDate
      ? new Date(endDate) - new Date()
      : '';

    const TournamentLink = tournament.status === STATUS.STARTED || adminMode
      ? (
        <Link className={style.tournamentName}
          to={{pathname: `/${id}`}} title={name} style={this.getSecStyle()} >{name}
        </Link>
      ) : (
        <div className={style.tournamentName} title={`Not started yet - ${name}`}>{name}</div>
      );

    return (
      <section className={style.row}>
        <div className={style.tournamentInfo}>
          {TournamentLink}
          {this.renderTags(tags, name)}
        </div>
        <div className={style.item}>{taskIds.length}</div>
        <div className={style.item}>{difficulty}</div>
        <div className={style.item}>{language}</div>
        <div className={style.item}>{department}</div>
        <div className={style.columnItem}>
          <Status status={status} />
          {status === STATUS.STARTED
            && (<DateView time={remaining}> remaining</DateView>)}
        </div>
      </section>
    );
  }
}
