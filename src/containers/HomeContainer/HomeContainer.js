import React from 'react';
import style from './style.scss';
import {connect} from 'react-redux';

import TournamentList from '../../components/TournamentList/TournamentList';

class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
      return (
        <div className={style.wrapper}>
            <div className={style.tabs}>
                <div className={style.tab_item}>
                    <a href="#">LET THE BATTLE BEGIN</a>
                    <div className={style.underline}></div>
                </div>
                <div className={style.tab_item}>
                    <a href="#">FINISHED TOURNAMENTS</a>
                </div>
            </div>
            <TournamentList {...this.props} />
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data
  };
};

export default connect(mapStateToProps)(HomeContainer);
