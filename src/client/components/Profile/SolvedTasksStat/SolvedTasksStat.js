import React, {Component} from 'react';
import MonthsStatChart from '../shared/MonthsStatChart';
import TaskStatChart from '../shared/TaskStatChart';
import style from './style.scss';

export default class SolvedTasksStat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {year, history} = this.props.metrics;
    const total = (arr) => arr.reduce((acc, curr) => acc + curr);

    const reducedMetricsMap = {
      fighter: total(history.fighter),
      berserk: total(history.berserk),
      champion: total(history.champion),
      mortal: total(history.mortal)
    };

    const colorsMap = {
      fighter: '#f39c12',
      berserk: '#e74c3c',
      champion: '#39c2d7',
      mortal: '#a6c638'
    };

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>Solved Tasks Stats</dt>
          <dt className={style.period}>{year}</dt>
        </dl>
        <div className={style.content}>
          <div className={style.leftContent}>
            <div className={style.stretchCharts}>
              <MonthsStatChart metrics={history} colors={colorsMap} months={months} />
            </div>
          </div>
          <div className={style.rightContent}>
            <div className={style.stretchCharts}>
              <TaskStatChart metrics={reducedMetricsMap} colors={colorsMap} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
