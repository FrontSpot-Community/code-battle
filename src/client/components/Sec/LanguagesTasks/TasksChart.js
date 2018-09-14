import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

import style from './style.scss';

export default class TasksChart extends Component {
  render() {
    const {metrics/* , colors*/} = this.props;
    const columns = [];
    Object.entries(metrics).map(([key, value]) => {
      const metricArr = [key, value];
      columns.push(metricArr);
    });

    const data = {
      labels: ['JavaScript', 'Python', 'C#', 'Java', 'PHP'],
      datasets: [{
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          '#f39c12',
          '#a6c638',
          '#9f37b7',
          '#e74c3c',
          '#39c2d7'
        ],
        borderColor: '#222222'
      }]
    };

    const options = {
      legend: {
        display: false
      }
    };

    return (
      <div className={style.horBar}>
        <HorizontalBar data={data} options={options}/>
      </div>
    );
  }
}
