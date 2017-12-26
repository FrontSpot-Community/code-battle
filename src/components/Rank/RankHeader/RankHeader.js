import React, {Component} from 'react';
import RankHeaderPart from '../RankHeaderPart';
import style from './style.scss';

export default class RankHeader extends Component {
  render() {
    return (
      <div className={style.rankHeader}>
        <RankHeaderPart title={this.props.leftTitle}>
          <span>
            <span className={style.rankNumber}>
              {this.props.rankPosition}
            </span> {' of '}{this.props.totalRankPosition}
          </span>
        </RankHeaderPart>

        <RankHeaderPart title={this.props.rightTitle}>
          <span> {this.props.totalScore}</span>
        </RankHeaderPart>
      </div>
    );
  }
}
