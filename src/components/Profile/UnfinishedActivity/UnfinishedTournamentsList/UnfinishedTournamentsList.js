import React, {Component} from 'react';
import style from './style.scss';

export default class UnfinishedTournamentsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {unfinishedTournamentsList} = this.props;

    return (
      <div className={style.unfinishedList}>
        {unfinishedTournamentsList
          .map((unfinishedTournament, index) => (
            <div
              key={unfinishedTournament.tournamentName + index}
              className={style.unfinishedListItem}
            >
              <div className={style.tournamentInfo}>
                <div className={style.tournamentName}>
                  {unfinishedTournament.tournamentName}
                </div>
                <div className={style.tournamentScore}>
                  {unfinishedTournament.tasksStat}
                  {unfinishedTournament.remainTime}
                </div>
              </div>

              <div className={style.arrowIcon}>
                <span></span>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
