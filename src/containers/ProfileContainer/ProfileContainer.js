import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  userEdit,
  userRequest
} from '../../actions/action_creators/userActionCreators';

import {
  ProfileDetails,
  TasksStatistic,
  TournamentsStatistic,
  UnfinishedActivity,
  SolvedTasksStat
} from '../../components/Profile';

import style from './style.scss';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    const userInfo = this.props.userInfo || {};
    this.state = {
      profileDetails: {
        githubLogin: userInfo.githubLogin,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        country: userInfo.country
      }
    };
  }

  componentWillMount() {
    this.props.userRequest();
  }

  componentWillReceiveProps(props) {
    if (!this.props.userInfo && props.userInfo) {
      const newProfileDetails = _.pick(props.userInfo, Object.keys(this.state.profileDetails));
      this.setState({profileDetails: newProfileDetails});
    }
  }

  onChangeProfileDetail = (title, value) => {
    const newProfileDetails = {...this.state.profileDetails};
    newProfileDetails[title] = value;
    this.setState({profileDetails: newProfileDetails});
  }

  onResetProfileDetails = (e) => {
    e.preventDefault();
    this.setState({userInfo: _.pick(this.props.userInfo, Object.keys(this.state.profileDetails))});
  }

  onSubmitProfileDetails = (e) => {
    e.preventDefault();
    this.props.userEdit({id: this.props.userInfo._id, ...this.state.profileDetails});
  }

  render() {
    const tournamentsMetrics = {
      participated: 57,
      finished: 21,
      wins: 3,
      satisfation: '67%'
    };

    const tasksMetrics = {
      assigned: 269,
      trained: 230,
      solved: 156,
      totalAttempts: 1921
    };

    const detailsFromServer = _.pick(this.props.userInfo, Object.keys(this.state.profileDetails));
    const isProfileDetailsChanged = !_.isEqual(this.state.profileDetails, detailsFromServer);
    return this.props.userLoading
      ? <div className={style.loader} />
      : <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.statisticsContainer}>
            <TasksStatistic
              metrics={tasksMetrics}
            />
            <TournamentsStatistic
              metrics={tournamentsMetrics}
            />
            <UnfinishedActivity/>
            <SolvedTasksStat/>
          </div>
          <div className={style.detailsContainer}>
            <ProfileDetails
              rankPosition={102}
              totalRankPosition={654}
              totalScore={190354}
              profileDetails={this.state.profileDetails}
              onChangeProfileDetail={this.onChangeProfileDetail}
              onResetProfileDetails={this.onResetProfileDetails}
              onSubmitProfileDetails={this.onSubmitProfileDetails}
              isProfileDetailsChanged={isProfileDetailsChanged}
            />
          </div>
        </div>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments.data,
    userInfo: state.user.userInfo,
    userLoading: state.user.isLoading
  };
};

const mapActionsToProps = (dispatch) => (
  bindActionCreators({userEdit, userRequest}, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(ProfileContainer);
