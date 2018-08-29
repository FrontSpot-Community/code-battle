import React from 'react';
import style from './style.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TournamentList from 'src/client/components/TournamentList';
import Tabs from 'src/client/components/Tabs';
import Rank from 'src/client/components/Rank';
import {tournamentsRequest} from 'src/client/actions/action_creators/tournamentActionCreators';
import {allUsersRequest, userRequest} from 'src/client/actions/action_creators/userActionCreators';
import Loader from 'src/client/components/Loader';
import withActivePageDispatch from 'common/components/Hocs/withActivePageDispatch';
import withPageName from 'common/components/Hocs/withPageName';
import {HOME_PAGE} from 'common/constants/activePageNames';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.tournamentsRequest();
    this.props.allUsersRequest();
    this.props.userRequest();
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
              <Rank rankPosition={this.props.rankPosition}
                totalRankPosition={this.props.users.length}
                totalScore={this.props.user.statistics.totalScore}
                users={this.props.users}/>
            </div>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankPosition: state.user.users.findIndex(
      (item) => item._id === (state.user.userInfo && state.user.userInfo._id)
    ) + 1,
    tournaments: state.tournaments.data,
    users: state.user.users,
    user: state.user.userInfo
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({tournamentsRequest, allUsersRequest, userRequest}, dispatch)
);
export default connect(mapStateToProps, mapActionsToProps)(
  withActivePageDispatch(withPageName(HomeContainer, HOME_PAGE))
);
