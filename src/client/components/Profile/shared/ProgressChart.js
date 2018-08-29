import React, {Component} from 'react';
import C3Component from './BaseC3';
import style from './style.scss';

export default class ProgressChart extends Component {
  render() {
    const {metrics, colors} = this.props;
    const columns = [];
    Object.entries(metrics).map(([key, value]) => {
      const metricArr = [key, value];
      columns.push(metricArr);
    });

    const data = {
      columns,
      type: 'bar',
      colors
    };

    const chartConfig = {
      size: {
        height: 40
      },
      bar: {
        width: 13,
        space: 0.6
      },
      axis: {
        rotated: true,
        x: {show: false},
        y: {show: false}
      },
      legend: {show: false},
      tooltip: {show: false}
    };
    return (
      <div className={style.chart}>
        <C3Component data={data} config={chartConfig} />
      </div>
    );
  }
}
