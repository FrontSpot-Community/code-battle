import React, {Component} from 'react';
import C3Component from './BaseC3';
import style from './style.scss';

export default class TaskStatChart extends Component {
  render() {
    const {metrics, colors} = this.props;
    const columns = [];
    let metricsSum = 0;
    Object.entries(metrics).map(([key, value]) => {
      const metricArr = [key, value];
      metricsSum += value;
      columns.push(metricArr);
    });

    const data = {
      columns,
      type: 'donut',
      order: null,
      colors
    };

    const chartConfig = {
      donut: {
        title: metricsSum,
        width: 15,
        label: {show: false}
      },
      size: {
        width: 150,
        height: 150
      },
      legend: {show: false},
      tooltip: {show: false}
    };

    return (
      <div className={style.chartDonut}>
        <C3Component data={data} config={chartConfig} />
      </div>
    );
  }
}
