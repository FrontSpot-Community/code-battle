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
  }

  render() {
    return (
        <section className="tournament-list">
          {this.renderList()}
        </section>
    );
  }
}
