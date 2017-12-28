import React, {Component} from 'react';
import C3Component from './baseC3';

export default class TaskStatChart extends Component {
  render() {
    const data = {
      columns: [
        ['Berserk', 40],
        ['Fighter', 10],
        ['Mortal', 20],
        ['Champion', 30]
      ],
      type: 'donut'
    };

    const chartConfig = {
      width: 10,
      size: {
        width: 640
      },
      title: 'Dogs love:', // Provide RESOLVED TASKS NUMBER
      transition: {
        duration: 0
      },
      point: {
        show: false
      },
      tooltip: {
        format: {
          value: (value) => `${value} ${units}`
        }
      }
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
