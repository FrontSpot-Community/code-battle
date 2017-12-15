import React, {Component} from 'react';
import Tournament from '../Tournament/Tournament';

import './tournament-list.scss';

export default class TournamentList extends Component {
  renderList = () => {
    return this.props.tournaments && this.props.tournaments.map((t) => {
      return (
        <Tournament key={t.id} {...t} />
      );
    });
  };

  render() {
    return [
        <div className="tournament-count">
          {this.props.tournaments.length} Tournaments Found
        </div>,
        <div className="tournament-list">
          {this.renderList()}
        </div>
    ];
  }
}
