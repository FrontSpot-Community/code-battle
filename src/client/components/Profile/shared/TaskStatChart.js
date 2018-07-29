import React, {Component} from 'react';
import C3Component from './BaseC3';
import style from './style.scss';

export default class TaskStatChart extends Component {
  render() {
    const data = {
      columns: [
        ['Fighter', 90],
        ['Berserk', 16],
        ['Champion', 40],
        ['Mortal', 84]
      ],
      type: 'donut',
      order: null
    };

    const chartConfig = {
      donut: {
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
