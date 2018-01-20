import React from 'react';
import style from './style.scss';

const getDateFromUTC = (utc) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const date = new Date(Date.parse(utc));
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const Summary = (props) => {
  const {tournament, status} = props;
  return (
    <div className={style.wrapper}>
      <dl className={style.header}>
        <dt className={style.title}>
          Tournaments summary
        </dt>
        <dd className={style.topStatus}>
          {status}
        </dd>
      </dl>

      <section className={style.status}>
        <div className={style.statusLineBlock}>
          <span className={style.statusLineBlockTitle}>Solved</span>
          <span className={style.statusLineBlockTitleStatus}>
            You have done {tournament.solving} %
          </span>
          <div className={style.line}>
            <span className={style.lineFull}> </span>
            <span className={style.linePartial} style={{width: `${tournament.solving}%`}}> </span>
          </div>
        </div>
        <div className={style.statusLineBlock}>
          <span className={style.statusLineBlockTitle}>Time left</span>
          <span className={style.statusLineBlockTitleStatusRed}>
            {tournament.timeLeft} days
          </span>
          <div className={style.line}>
            <span className={style.lineFull}> </span>
            <span
              className={style.linePartial}
              style={{width: `${tournament.timeLeft / tournament.totalTime * 100}%`}}/>
          </div>
        </div>
      </section>

      <section className={style.description}>
        <h4 className={style.descriptionTitle}>{tournament.title}</h4>
        <p className={style.descriptionText}>{tournament.description}</p>
        {
          tournament.tags.map((item, idx) => (
            <span key={idx} className={style.descriptionTag}>{item}</span>
          ))
        }
      </section>

      <section className={style.details}>
        <span className={style.detailsTitle}>Details</span>

        <dl className={style.detailsDefinitions}>
          {tournament.start
            ? [
              <dt key={0}>Start Date</dt>,
              <dd key={1}>{getDateFromUTC(tournament.start)}</dd>
            ]
            : null}
          {tournament.end
            ? [
              <dt key={0}>End Date</dt>,
              <dd key={1}>{getDateFromUTC(tournament.end)}</dd>
            ]
            : null}
          {tournament.difficulty
            ? [<dt key={0}>Difficulty</dt>, <dd key={1}>{tournament.difficulty}</dd>]
            : null}
          {tournament.language
            ? [<dt key={0}>Language</dt>, <dd key={1}>{tournament.language}</dd>]
            : null}
          {tournament.taskIds
            ? [<dt key={0}>Tasks</dt>, <dd key={1}>{tournament.taskIds.length}</dd>]
            : null}
          {tournament.author
            ? [<dt key={0}>Created by</dt>, <dd key={1}>{tournament.author}</dd>]
            : null}
        </dl>
      </section>

    </div>
  );
};

export default Summary;
