import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

import style from './style.scss';

export default class ProgressChart extends Component {
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
      labels,
      datasets: [{
        data: dataArray,
        backgroundColor,
        borderColor: '#222222'
      }]
    };

    const options = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false,
          categoryPercentage: 0.6,
          barPercentage: 1,
          gridLines: {
            display: false
          },
          stacked: true
        }]
      }
    };

    return (
      <div className={style.horBar}>
        <HorizontalBar data={data} options={options}/>
      </div>
    );
  }
}
