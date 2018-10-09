import React, {Component} from 'react';
import TournamentTable from './TournamentTable';
import style from './style.scss';

export default class TournamentList extends Component {
  render() {
    const {tournaments, adminMode} = this.props;
    return (
      <div className={style.wrapper}>
        {this.props.render()}
        <TournamentTable tournaments={tournaments} adminMode={adminMode}/>
      </div>
    );
  }
}
