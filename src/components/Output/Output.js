import React, {Component} from 'react';
import style from './style.scss';

class Output extends Component {
  render() {
    const {details, time, passed, failed, errors} = this.props;
    return (
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.headerName}>OUTPUT</span>
          <div className={style.statsWrapper}>
            <span className={style.stat}>Time: {time}</span>
            <span className={style.stat}>Passed: {passed}</span>
            <span className={style.stat}>Failed: {failed}</span>
            <span className={style.stat}>Errors: {errors}</span>
          </div>
        </div>
        <div className={style.output} dangerouslySetInnerHTML={{__html: details}} />
      </div>
    );
  }
}

export default Output;
