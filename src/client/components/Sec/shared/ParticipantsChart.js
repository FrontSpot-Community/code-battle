import React, {Component} from 'react';
import C3Component from './BaseC3';

export default class ParticipantsChart extends Component {
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
        width: 300,
        height: 300
      },
      legend: {show: false},
      tooltip: {show: false}
    };

    return (
      <div>
        <C3Component
          data={data}
          config={chartConfig}
        />
      </div>
    );
  }
}
