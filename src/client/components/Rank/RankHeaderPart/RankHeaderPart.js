import React, {Component} from 'react';
import style from './style.scss';

export default class RankTopHeaderPart extends Component {
  render() {
    return (
      <div className={style.rankHeaderPart}>
        <div className={style.title}>{this.props.title}</div>
        <div className={style.info}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
