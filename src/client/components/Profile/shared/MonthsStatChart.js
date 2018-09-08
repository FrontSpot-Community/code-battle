import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

import style from './style.scss';

export default class MonthsStatChart extends Component {
  render() {
    const {metrics, colors, months: labels} = this.props;
    const datasets = Object.entries(metrics).map(([key, value]) => (
      {
        data: value,
        backgroundColor: colors[key]
      }
    ));

    const data = {
      labels,
      datasets
    };

    const options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          categoryPercentage: 0.6,
          barPercentage: 0.6
        }],
        yAxes: [{
          gridLines: {
            color: '#333',
            zeroLineColor: '#333'
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
