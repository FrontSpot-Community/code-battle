
import React, {Component} from 'react';
import RankList from './RankList';
import style from './style.scss';

export default class Rank extends Component {
  render() {
    return (
      <div className={style.wrapper}>

        <dl className={style.header}>
          <dt className={style.title}>
            Users
          </dt>
        </dl>

        <RankList rankList={this.props.userScoreList}/>

      </div>
    );
  }
}
