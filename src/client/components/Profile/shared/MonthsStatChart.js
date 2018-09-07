import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

import style from './style.scss';

export default class MonthsStatChart extends Component {
  render() {
    const {metrics, colors} = this.props;
    const labels = [];
    const dataArray = [];
    const backgroundColor = [];
    Object.entries(metrics).map(([key, value]) => {
      labels.push(key);
      dataArray.push(value);
      backgroundColor.push(colors[key]);
    });

    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [1, 3, 2, 1, 5, 2],
          backgroundColor: '#a6c638',
          borderColor: '#222222'
        },
        {
          data: [3, 1, 5, 4, 2, 4],
          backgroundColor: '#39c2d7',
          borderColor: '#222222'
        },
        {
          data: [5, 1, 5, 4, 1, 3],
          backgroundColor: '#f39c12',
          borderColor: '#222222'
        },
        {
          data: [4, 1, 3, 1, 2, 5],
          backgroundColor: '#e74c3c',
          borderColor: '#222222'
        }
      ]
    };

    const options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          categoryPercentage: 0.6,
          barPercentage: 0.6
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };

    return (
      <div className={style.chartMonths}>
        <Bar data={data} options={options}/>
      </div>
    );
  }
}
