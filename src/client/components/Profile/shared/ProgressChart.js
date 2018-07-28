import React, {Component} from 'react';
import C3Component from './BaseC3';
import style from './style.scss';

export default class ProgressChart extends Component {
  render() {
    const {metrics, colors} = this.props;
    const columns = [];
    Object.keys(metrics).map((item) => {
      if (item !== 'Total Attempts') {
        const metricArr = [item, metrics[item]];
        columns.push(metricArr);
      }
    });

    const data = {
      columns,
      type: 'bar',
      colors
    };

    const chartConfig = {
      width: 10,
      size: {
        height: 30,
        width: 480
      },
      bar: {
        width: 8,
        space: 0.5
      },
      axis: {
        rotated: true,
        x: {show: false},
        y: {show: false}
      },
      legend: {show: false}
    };

    return (
      <div className={style.chart}>
        <C3Component data={data} config={chartConfig}/>
      </div>
    );
  }
}
