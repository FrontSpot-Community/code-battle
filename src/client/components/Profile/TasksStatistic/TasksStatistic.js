import React, {Component} from 'react';
import ProgressChart from '../shared/ProgressChart';
import Totals from '../shared/Totals';
import style from './style.scss';

export default class TasksStatistic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {metrics} = this.props;

    const metricsMap = {
      'Attempts': metrics && metrics.attempts,
      'Trained': metrics && metrics.trained,
      'Solved': metrics && metrics.solved
    };

    const colorsMap = {
      'Attempts': '#333333',
      'Trained': '#39c2d7',
      'Solved': '#a6c638'
    };

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>Tasks</dt>
        </dl>
        <div className={style.content}>
          <Totals metrics={metricsMap} colors={colorsMap} />
          <ProgressChart metrics={metricsMap} colors={colorsMap} />
        </div>
      </div>
    );
  }
}
