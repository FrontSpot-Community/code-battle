import React, {Component} from 'react';
import style from './style.scss';

import TasksChart from '../shared/TasksChart';

export default class LanguagesTasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
            Languages Tasks
          </dt>
        </dl>
        <TasksChart metrics={this.props.metrics}/>
      </div>
    );
  }
}
