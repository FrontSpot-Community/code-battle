import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

import style from './style.scss';

export default class ParticipantsChart extends Component {
  render() {
    const {metrics/* , colors*/} = this.props;
    const columns = [];
    // let metricsSum = 0;
    Object.entries(metrics).map(([key, value]) => {
      const metricArr = [key, value];
      // metricsSum += value;
      columns.push(metricArr);
    });

    const data = {
      labels: [
        'JavaScript',
        'Python',
        'C#',
        'Java',
        'PHP'
      ],
      datasets: [{
        data: [300, 50, 100, 25, 44],
        backgroundColor: [
          '#f39c12',
          '#a6c638',
          '#690081',
          '#e74c3c',
          '#39c2d7'
        ]
      }]
    };

    return (
      <div className={style.doughnut}>
        <Doughnut data={data}/>
      </div>
    );
  }
}
