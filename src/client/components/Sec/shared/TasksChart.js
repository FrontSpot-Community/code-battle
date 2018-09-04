import React, {Component} from 'react';
import C3Component from './BaseC3';

export default class TasksChart extends Component {
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
        height: 100
      },
      bar: {
        width: 20,
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
      <div>
        <C3Component
          data={data}
          config={chartConfig}
        />
      </div>
    );
  }
}
