import React, {Component} from 'react';


import TournamentIcon from './TournamentIcon';
import TournamentInfo from './TournamentInfo';

import './tournament.scss';

export default class Tournament extends Component {
  render() {
    return (
      <div className="tournament">
        <TournamentIcon icon="book"/>
        <TournamentInfo {...this.props} />
      </div>
    );
  }
}
