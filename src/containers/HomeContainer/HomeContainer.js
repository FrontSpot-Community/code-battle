import React from 'react';
import style from './style.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TournamentList from '../../components/TournamentList';
import Tabs from '../../components/Tabs';
import Rank from '../../components/Rank';
import {tournamentsRequest} from '../../actions/action_creators/tournamentActionCreators';

import userScoreList from './mockUsers';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.tournamentsRequest({a: 'a'});
  }

  renderTabs = () => (<Tabs />);

  render() {
    return (
      <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.tableContainer}>
            <TournamentList tournaments={this.props.tournaments}
              render={this.renderTabs}/>
          </div>
          <div className={style.rankContainer}>
            <Rank rankPosition={102}
              totalRankPosition={654}
              totalScore={190354}
              userScoreList={userScoreList}/>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({tournamentsRequest}, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(HomeContainer);
