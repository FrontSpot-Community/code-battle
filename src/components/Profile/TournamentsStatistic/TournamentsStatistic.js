import React from 'react';
import ProgressChart from '../shared/ProgressChart';
import style from './style.scss';

const TournamentsStatistic = () => {
  return (
    <div className={style.wrapper}>
      <dl className={style.header}>
        <dt className={style.title}>
            TournamentsStatistic
        </dt>
      </dl>
      <ProgressChart/>
    </div>
  );
};

export default TournamentsStatistic;
