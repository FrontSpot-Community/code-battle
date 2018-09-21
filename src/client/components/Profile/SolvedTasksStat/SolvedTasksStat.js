import React, {Component} from 'react';
import MonthsStatChart from '../shared/MonthsStatChart';
import TaskStatChart from '../shared/TaskStatChart';
import style from './style.scss';
import {CommingSoon} from 'src/client/components/Common';

export default class SolvedTasksStat extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    selected: 'janToJun'
  };

  handleChange = (e) => {
    this.setState({selected: e.target.value});
  };

  total = (arr) => arr.reduce((acc, curr) => acc + curr);

  render() {
    const {selected} = this.state;
    const {metrics, colors} = this.props;
    const {year, history} = metrics;

    const options = [
      {value: 'janToJun', label: `Jan ${year} - Jun ${year}`},
      {value: 'julToDec', label: `Jul ${year} - Dec ${year}`}
    ];

    const janToJunMetrics = {};
    const julToDecMetrics = {};
    Object.entries(history).map(([key, value]) => {
      janToJunMetrics[key] = value.slice(0, value.length / 2);
      julToDecMetrics[key] = value.slice(value.length / 2);
    });

    const janToJunMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const julToDecMonths = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const janToJunTotal = {
      fighter: this.total(janToJunMetrics.fighter),
      berserk: this.total(janToJunMetrics.berserk),
      champion: this.total(janToJunMetrics.champion),
      mortal: this.total(janToJunMetrics.mortal)
    };

    const julToDecTotal = {
      fighter: this.total(julToDecMetrics.fighter),
      berserk: this.total(julToDecMetrics.berserk),
      champion: this.total(julToDecMetrics.champion),
      mortal: this.total(julToDecMetrics.mortal)
    };

    return (
      <div className={style.wrapper}>
        <CommingSoon />

        <div className={style.header}>
          <div className={style.title}>Solved Tasks Stats</div>

          <div className={style.period}>
            <select name="period" onChange={this.handleChange}>
              {options.map(({label, value}) => {
                return (
                  <option key={value} value={value} defaultValue={selected === value}>
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
                metrics={selected === 'janToJun'
                  ? janToJunMetrics
                  : julToDecMetrics
                }
                colors={colors}
                months={selected === 'janToJun'
                  ? janToJunMonths
                  : julToDecMonths
                }
              />
            </div>
          </div>

          <div className={style.rightContent}>
            <div className={style.stretchCharts}>
              <TaskStatChart
                metrics={selected === 'janToJun'
                  ? janToJunTotal
                  : julToDecTotal
                }
                colors={colors}
              />
            </div>
          </div>

        </div>

      </div>
    );
  }
}
