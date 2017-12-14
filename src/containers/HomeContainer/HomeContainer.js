import React from 'react';
import style from './style.scss';
import {connect} from 'react-redux';

import TournamentList from '../../components/TournamentList';
import Tabs from '../../components/Tabs';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div className={style.wrapper}>
            <div className={style.listContainer}>
                <Tabs/>
                <TournamentList tournaments={this.props.tournaments}/>
            </div>
            <div className={style.rankContainer}></div>
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
