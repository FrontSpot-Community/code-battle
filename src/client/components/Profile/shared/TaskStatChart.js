import React, {Component} from 'react';
import C3Component from './BaseC3';

export default class TaskStatChart extends Component {
  render() {
    const data = {
      columns: [
        ['Berserk', 16],
        ['Fighter', 90],
        ['Mortal', 84],
        ['Champion', 40]
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
          value: (value) => `${value}`
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
