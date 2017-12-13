import React from 'react';
import style from './style.scss';
import {connect} from 'react-redux';

import TournamentList from '../../components/TournamentList/TournamentList';
import Tabs from '../../components/Tabs';

class HomeContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
      return (
        <div className={style.wrapper}>
            <Tabs/>
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
