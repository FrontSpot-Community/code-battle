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
  return (
    <div className={style.wrapper}>
      <dl className={style.header}>
        <dt className={style.title}>
          Tournaments summary
        </dt>
        <dd className={style.topStatus}>
          {props.status}
        </dd>
      </dl>

      <section className={style.status}>
        <div className={style.statusLineBlock}>
          <span className={style.statusLineBlockTitle}>Solved</span>
          <span className={style.statusLineBlockTitleStatus}>
            You have done {props.tournament.solving} %
          </span>
          <div className={style.line}>
            <span className={style.lineFull}> </span>
            <span className={style.linePartial} style={{width: `${props.tournament.solving}%`}}> </span>
          </div>
        </div>
        <div className={style.statusLineBlock}>
          <span className={style.statusLineBlockTitle}>Time left</span>
          <span className={style.statusLineBlockTitleStatusRed}>
            {props.tournament.timeLeft} days
          </span>
          <div className={style.line}>
            <span className={style.lineFull}> </span>
            <span
              className={style.linePartial}
              style={{width: `${props.tournament.timeLeft / props.tournament.totalTime * 100}%`}}/>
          </div>
        </div>
      </section>

      <section className={style.description}>
        <span className={style.descriptionTitle}>{props.tournament.title}</span>
        <span className={style.descriptionText}>{props.tournament.description}</span>
        {
          props.tournament.tags.map((item, idx) => (
            <span key={idx} className={style.descriptionTag}>{item}</span>
          ))
        }
      </section>

      <section className={style.details}>
        <span className={style.detailsTitle}>Details</span>

        <dl className={style.detailsDefinitions}>
          <dt>Start Date</dt><dd>{getDateFromUTC(props.tournament.start)}</dd>
          <dt>End Date</dt><dd>{getDateFromUTC(props.tournament.end)}</dd>
          <dt>Difficulty</dt><dd>{props.tournament.difficulty}</dd>
          <dt>Language</dt><dd>{props.tournament.language}</dd>
          <dt>Tasks</dt><dd>{props.tournament.taskIds.length}</dd>
          <dt>Created by</dt><dd>{props.tournament.author}</dd>
        </dl>
      </section>

    </div>
  );
};

export default Summary;
