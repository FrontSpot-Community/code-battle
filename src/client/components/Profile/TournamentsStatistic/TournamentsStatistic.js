import React, {Component} from 'react';
import ProgressChart from '../shared/ProgressChart';
import Totals from '../shared/Totals';
import style from './style.scss';

export default class TournamentsStatistic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {metrics} = this.props;

    const metricsMap = {
      'Participated': metrics.participated,
      'Finished': metrics.finished,
      'Wins': metrics.wins,
      'Satisfation': metrics.satisfation
    };

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
            TournamentsStatistic
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
