import React, {Component} from 'react';

import style from './style.scss';

export default class TaskDetails extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.headerName}>DETAILS</span>
        </div>
        <div className={style.content}>
          {this.props.details}
        </div>
      </div>
    );
  }
}
