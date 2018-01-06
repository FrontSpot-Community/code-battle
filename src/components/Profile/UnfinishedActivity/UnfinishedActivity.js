import React, {Component} from 'react';
import style from './style.scss';

import UnfinishedTournamentsList from './UnfinishedTournamentsList';

export default class UnfinishedActivity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const unfinishedTournaments = [
      {
        tournamentName: 'From Newbie To Overlord',
        tasksStat: '1/10',
        remainTime: '3' // TODO: time in ...
      },
      {
        tournamentName: 'Simple Tournament Name',
        tasksStat: '3/5',
        remainTime: '1'
      }
    ];

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
            UnfinishedActivity
          </dt>
        </dl>
        <UnfinishedTournamentsList
          unfinishedTournamentsList={unfinishedTournaments}
        />
        <div>
          No more unfinished tournaments found
        </div>
      </div>
    );
  }
}
