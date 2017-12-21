
import React, {Component} from 'react';
import RankList from './RankList';
import RankHeader from './RankHeader';
import style from './style.scss';

export default class Rank extends Component {
  render() {
    return (
      <div className={style.wrapper}>

        <RankHeader leftTitle={'Your Rank Position'}
          rightTitle={'Your Total Score'}
          rankPosition={this.props.rankPosition}
          totalRankPosition={this.props.totalRankPosition}
          totalScore={this.props.totalScore}/>

        <RankList rankList={this.props.userScoreList}/>

      </div>
    );
  }
}
