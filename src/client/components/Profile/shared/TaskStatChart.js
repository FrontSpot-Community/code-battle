import React, {Component} from 'react';
import {Chart, Doughnut} from 'react-chartjs-2';
import {plugin} from 'src/common/utils/doughnutPlugin';

import style from './style.scss';

export default class TaskStatChart extends Component {
  componentWillMount() {
    Chart.pluginService.register({
      beforeDraw: plugin
    });
  }

  render() {
    const {metrics, colors} = this.props;
    let metricsSum = 0;
    const labels = [];
    const dataArray = [];
    const backgroundColor = [];
    Object.entries(metrics).map(([key, value]) => {
      metricsSum += value;
      labels.push(key);
      dataArray.push(value);
      backgroundColor.push(colors[key]);
    });

    const data = {
      labels,
      datasets: [{
        data: dataArray,
        backgroundColor,
        borderWidth: 0
      }]
    };

    const options ={
      maintainAspectRatio: false,
      cutoutPercentage: 85,
      legend: {
        display: false
      },
      elements: {
        center: {
          text: metricsSum,
          color: '#ffffff', // Default is #000000
          fontStyle: 'Oswald', // Default is Arial
          sidePadding: 20, // Defualt is 20 (as a percentage)
          size: 32
        }
      }
    };

    return (
      <div className={style.doughnut}>
        <Doughnut data={data} options={options}/>
      </div>
    );
  }
}
