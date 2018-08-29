import React, {Component} from 'react';
import MonthsStatChart from '../shared/MonthsStatChart';
import TaskStatChart from '../shared/TaskStatChart';
import style from './style.scss';

export default class SolvedTasksStat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {metrics} = this.props;
    const total = (arr) => arr.reduce((acc, curr) => acc + curr);

    const reducedMetricsMap = {
      'Fighter': total(metrics.fighter),
      'Berserk': total(metrics.berserk),
      'Champion': total(metrics.champion),
      'Mortal': total(metrics.mortal)
    };

    const colorsMap = {
      'Fighter': '#f39c12',
      'Berserk': '#e74c3c',
      'Champion': '#39c2d7',
      'Mortal': '#a6c638'
    };

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>Solved Tasks Stats</dt>
        </dl>
        <div className={style.content}>
          <div className={style.leftContent}>
            <MonthsStatChart metrics={metrics} months={months} colors={colorsMap} />
          </div>
          <div className={style.rightContent}>
            <TaskStatChart metrics={reducedMetricsMap} colors={colorsMap} />
          </div>
        </div>

      </div>
    );
  }
}
