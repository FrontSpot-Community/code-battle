import React, {Component} from 'react';
import C3Component from './baseC3';

export default class ProgressChart extends Component {
  render() {
    const data = {
      columns: [
        ['x', 'Category1', 'Category2'],
        ['value', 300, 400]
      ],
      type: 'bar'
    };

    const chartConfig = {
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
