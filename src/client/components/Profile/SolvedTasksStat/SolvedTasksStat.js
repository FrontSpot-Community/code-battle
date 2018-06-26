import React, {Component} from 'react';
import TaskStatChart from '../shared/TaskStatChart';
import style from './style.scss';

export default class SolvedTasksStat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
            Solved Tasks Stats
          </dt>
        </dl>
        <TaskStatChart/>
      </div>
    );
  }
}
