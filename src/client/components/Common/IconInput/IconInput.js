import React, {Component} from 'react';
import style from './style.scss';

export default class IconInput extends Component {
  render() {
    return (<div className={style.wrapper}>
      <span className={style.icon}>
        <i className={this.props.iconClass}></i>
      </span>

      <input type="text"
        placeholder={this.props.placeholder}
        className={style.input}
      />
    </div>);
  }
}
