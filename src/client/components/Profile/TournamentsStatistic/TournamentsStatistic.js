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
      'Wins': metrics.wins
    };

    const colorsMap = {
      'Participated': '#333333',
      'Finished': '#39c2d7',
      'Wins': '#a6c638'
    };

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>Tournaments</dt>
        </dl>
        <div className={style.content}>
          <Totals metrics={metricsMap} colors={colorsMap} />
          <ProgressChart metrics={metricsMap} colors={colorsMap} />
        </div>
      </div>
    );
  }
}
