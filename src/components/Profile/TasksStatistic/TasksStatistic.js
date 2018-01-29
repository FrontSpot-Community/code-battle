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
      'Assigned': metrics.assigned,
      'Trained': metrics.trained,
      'Solved': metrics.solved,
      'Total Attempts': metrics.totalAttempts
    };

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
            TasksStatistic
          </dt>
        </dl>
        <Totals
          totalValuesMap={metricsMap}
        />
        <ProgressChart/>
      </div>
    );
  }
}
