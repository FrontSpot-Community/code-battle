import React from 'react';
import style from './style.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TournamentList from '../../components/TournamentList';
import Tabs from '../../components/Tabs';
import Rank from '../../components/Rank';
import {tournamentsRequest} from '../../actions/action_creators/tournamentActionCreators';
import {allUsersRequest} from '../../actions/action_creators/userActionCreators';
import Loader from 'src/components/Loader';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.tournamentsRequest();
    this.props.allUsersRequest();
  }

  renderTabs = () => (<Tabs />);

  render() {
    return (
      <div className={style.mainWrapper}>
        {!this.props.user
          ? <Loader />
          : <div className={style.wrapper}>
            <div className={style.tableContainer}>
              <TournamentList tournaments={this.props.tournaments}
                render={this.renderTabs}/>
            </div>
            <div className={style.rankContainer}>
              <Rank rankPosition={102}
                totalRankPosition={654}
                totalScore={190354}
                userScoreList={this.props.users}/>
            </div>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data,
    users: state.user.users,
    user: state.user.userInfo
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({tournamentsRequest, allUsersRequest}, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(HomeContainer);
