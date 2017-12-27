import React from 'react';
import ProgressChart from '../shared/ProgressChart';
import style from './style.scss';

const TasksStatistic = () => {
  return (
    <div className={style.wrapper}>
      <dl className={style.header}>
        <dt className={style.title}>
          TasksStatistic
        </dt>
      </dl>
      <ProgressChart/>
    </div>
  );
};

export default TasksStatistic;
