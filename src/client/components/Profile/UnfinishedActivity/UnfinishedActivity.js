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
        tasksStat: '5 of 15 tasks solved ',
        remainTime: '3 days remainging' // TODO: time in ...
      },
      {
        tournamentName: 'Simple Tournament Name',
        tasksStat: '2 of 10 tasks solved ',
        remainTime: '1 week remaining'
      }
    ];

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>Unfinished Activity</dt>
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
