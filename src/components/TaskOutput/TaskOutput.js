import React, {Component} from 'react';
import style from './style.scss';

export default class TaskOutput extends Component {
  render() {
    return (
      <div className={style.outputText}>
        {this.props.output}
      </div>
    );
  }
}
