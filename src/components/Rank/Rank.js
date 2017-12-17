import React, {Component} from 'react';
import style from './style.scss';

export default class Rank extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.generalScore}>
          <div className={style.halfOfBlock}>
            <div className={style.title}>Your Rank Position</div>
            <div className={style.score}>
              <span className={style.rankNumber}>
                {this.props.rankPosition}
              </span>
              <span> of {this.props.totalRankPosition}</span>
            </div>
          </div>
          <div className={style.halfOfBlock}>
            <div className={style.title}>Your Total Score</div>
            <div className={style.score}>
              <span> {this.props.totalScore}</span>
            </div>

          </div>
        </div>
        <div className={style.userScoreList}>
          {this.props.userScoreList.map((user, index) => (
            <div className={style.userScoreListItem}
              key={user.username + index}>
              <div className={style.avatar}>
                <div className={style.imageWrapper}>
                  <img src={user.avatar} alt=""/>
                </div>
              </div>
              <div className={style.userInfo}>
                <div className={style.userName}>
                  {user.username}
                </div>
                <div className={style.userScore}>
                  {user.totalScore}
                </div>
              </div>
              <div className={style.index}>
                <span>{index +1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }
}
