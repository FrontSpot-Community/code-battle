import React, {Component} from 'react';
import C3Component from './BaseC3';

export default class ProgressChart extends Component {
  render() {
    const data = {
      columns: [
        ['x', 'Category1', 'Category2', 'Category3'],
        ['value', 300, 400, 40]
      ],
      type: 'bar',
      width: 100,
      size: {
        height: 100
      }
    };

    const chartConfig = {
      width: 10,
      size: {
        width: 640,
        height: 100
      },
      axis: {
        rotated: true,
        x: {
          type: 'category'
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
