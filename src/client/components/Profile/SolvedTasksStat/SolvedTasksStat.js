import React, {Component} from 'react';
import MonthsStatChart from '../shared/MonthsStatChart';
import TaskStatChart from '../shared/TaskStatChart';
import style from './style.scss';

export default class SolvedTasksStat extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    half: '1'
  };

  handleChange = (e) => {
    this.setState({half: e.target.value});
  };

  total = (arr) => arr.reduce((acc, curr) => acc + curr);

  render() {
    const {half} = this.state;
    const {year, history} = this.props.metrics;

    const options = [
      {value: '1', label: `Jan ${year} - Jun ${year}`},
      {value: '2', label: `Jul ${year} - Dec ${year}`}
    ];

    const colorsMap = {
      fighter: '#f39c12',
      berserk: '#e74c3c',
      champion: '#39c2d7',
      mortal: '#a6c638'
    };

    const firstHalfMetrics = {};
    const secondHalfMetrics = {};
    Object.entries(history).map(([key, value]) => {
      firstHalfMetrics[key] = value.slice(0, value.length / 2);
      secondHalfMetrics[key] = value.slice(value.length / 2);
    });

    const firstHalfMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const secondHalfMonths = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const reducedFisrtHalf = {
      fighter: this.total(firstHalfMetrics.fighter),
      berserk: this.total(firstHalfMetrics.berserk),
      champion: this.total(firstHalfMetrics.champion),
      mortal: this.total(firstHalfMetrics.mortal)
    };

    const reducedSecondHalf = {
      fighter: this.total(secondHalfMetrics.fighter),
      berserk: this.total(secondHalfMetrics.berserk),
      champion: this.total(secondHalfMetrics.champion),
      mortal: this.total(secondHalfMetrics.mortal)
    };

    return (
      <div className={style.wrapper}>

        <div className={style.header}>
          <div className={style.title}>Solved Tasks Stats</div>

          <div className={style.period}>
            <select name="period" onChange={this.handleChange}>
              {options.map(({label, value}) => {
                return (
                  <option key={value} value={value} defaultValue={half === value}>
                    {label}
                  </option>
                );
              })}
            </select>
          </div>

        </div>

        <div className={style.content}>

          <div className={style.leftContent}>
            <div className={style.stretchCharts}>
              <MonthsStatChart
                metrics={half === '1'
                  ? firstHalfMetrics
                  : secondHalfMetrics
                }
                colors={colorsMap}
                months={half === '1'
                  ? firstHalfMonths
                  : secondHalfMonths
                }
              />
            </div>
          </div>

          <div className={style.rightContent}>
            <div className={style.stretchCharts}>
              <TaskStatChart
                metrics={half === '1'
                  ? reducedFisrtHalf
                  : reducedSecondHalf
                }
                colors={colorsMap}
              />
            </div>
          </div>

        </div>

      </div>
    );
  }
}
