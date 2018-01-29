import React, {Component} from 'react';
import style from './style.scss';

export default class RankList extends Component {
  render() {
    return (
      <div className={style.rankList}>
        {this.props.rankList.map((user, index) => (
          <div className={style.rankListItem}
            key={user.githubDisplayName || user.githubUsername + index}>

            <div className={style.avatar}>
              <div className={style.imageWrapper}>
                <img src={user.gitHubAvatar_url}/>
              </div>
            </div>

            <div className={style.userInfo}>
              <div className={style.userName}>
                {user.githubDisplayName || user.githubUsername}
              </div>
              <div className={style.userScore}>
                {user.totalScore}
              </div>
            </div>

            <div className={style.userIndex}>
              <span>{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
