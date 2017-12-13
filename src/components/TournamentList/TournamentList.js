import React, {Component} from 'react';
import Tournament from '../Tournament/Tournament';

import style from './style.scss';

export default class TournamentList extends Component {
    renderTournamentHeader = () => {
        return (
            <div className={style.headers}>
                <div className={style.first}></div>
                <div className={style.second}></div>
            </div>);
    };
  renderList = () => {
    return this.props.tournaments && this.props.tournaments.map((t) => {
      return (
        <Tournament key={t.id} {...t} />
      );
    });
  }

  render() {
    return (
        <div className={style.wrapper}>
            {this.renderTournamentHeader()}
            <div className="tournament-count">
                {this.props.tournaments.length} Tournaments Found
            </div>
            <div className="tournament-list">
                {this.renderList()}
            </div>
        </div>
    );
  }
}
