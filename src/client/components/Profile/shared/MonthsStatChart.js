import React, {Component} from 'react';
import C3Component from './BaseC3';
import style from './style.scss';

export default class MonthsStatChart extends Component {
  componentWillMount() {
    this.yTicksValues = this.yTicksHandle();
  }

  yTicksHandle = () => {
    const {metrics} = this.props;
    const maxArr = [];

    Object.entries(metrics).map(([key, value]) => {
      if (key !== 'year') {
        maxArr.push(Math.max(...value));
      }
    });

    let maxMetricValue = Math.ceil(Math.max(...maxArr) / 10) * 10;

    const ticksArr = [];
    while (maxMetricValue > 0) {
      ticksArr.push(maxMetricValue);
      maxMetricValue -= 10;
    }
    ticksArr.push(0);

    return ticksArr.reverse();
  }

  tooltipHandle = (data, months, year) => {
    const tasks = data[0].value;
    const complexity = data[0].id;
    const month = months[data[0].index];

    const tooltip = document.createElement('div');
    tooltip.style.opacity = 0.9;
    tooltip.style.width = '136px';
    tooltip.style.padding = '10px';
    tooltip.style.fontSize = '12px';
    tooltip.style.lineHeight = 1.17;
    tooltip.style.borderRadius = '5px';
    tooltip.style.backgroundColor = '#111111';
    tooltip.innerText = `${tasks} ${complexity}'s tasks solved at ${month} ${year}`;

    return tooltip.outerHTML;
  };

  render() {
    const {metrics, months, colors} = this.props;
    const year = metrics.year;

    const data = {
      columns: [
        ['Mortal', ...metrics.mortal],
        ['Champion', ...metrics.champion],
        ['Fighter', ...metrics.fighter],
        ['Berserk', ...metrics.berserk]
      ],
      type: 'bar',
      colors
    };

    const chartConfig = {
      size: {
        width: 500,
        height: 160
      },
      bar: {
        width: 13,
        space: 0.5
      },
      axis: {
        x: {
          type: 'category',
          categories: months
        },
        y: {
          tick: {values: this.yTicksValues}
        }
      },
      grid: {
        x: {show: false},
        y: {show: true}
      },
      legend: {show: false},
      tooltip: {
        grouped: false,
        contents: (d) => this.tooltipHandle(d, months, year)
      }
    };

    return (
      <div className={style.chartMonths} >
        <C3Component data={data} config={chartConfig} />
      </div>
    );
  }
}
