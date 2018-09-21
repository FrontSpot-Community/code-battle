import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Joyride from 'react-joyride';
import {ACTIONS, EVENTS} from 'react-joyride/es/constants';
import {profileSteps} from 'src/common/constants/joyride';
import {
  userEdit,
  userRequest
} from 'src/client/actions/action_creators/userActionCreators';
import {tournamentsRequest} from 'src/client/actions/action_creators/tournamentActionCreators';

import {
  ProfileDetails,
  TasksStatistic,
  TournamentsStatistic,
  UnfinishedActivity,
  SolvedTasksStat
} from 'src/client/components/Profile';

import style from './style.scss';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    const userInfo = this.props.userInfo || {};
    this.state = {
      run: false,
      stepIndex: 0,
      steps: profileSteps,
      profileDetails: {
        githubLogin: userInfo.githubLogin,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber,
        country: userInfo.country,
        upsa: userInfo.upsa
      },
      epamEmployee: userInfo.epamEmployee,
      statistics: userInfo.statistics
    };
  }

  componentWillMount() {
    this.props.userRequest();
    this.props.tournamentsRequest();
  }

  componentDidMount() {
    this.setState({run: true});
  }

  componentWillReceiveProps(props) {
    if (!this.props.userInfo && props.userInfo) {
      const newProfileDetails = _.pick(props.userInfo, Object.keys(this.state.profileDetails));
      this.setState({
        profileDetails: newProfileDetails,
        epamEmployee: props.userInfo.epamEmployee,
        statistics: props.userInfo.statistics
      });
    }
  }

  tourCallback = (tour) => {
    const {action, index, type} = tour;

    if (type === EVENTS.STEP_AFTER && index === 1) {
      this.setState({run: false});
    } else if ([EVENTS.STEP_AFTER, EVENTS.CLOSE, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      this.setState({stepIndex: index + (action === ACTIONS.PREV ? -1 : 1)});
    }
  };


  onChangeProfileDetail = (title, value) => {
    const newProfileDetails = {...this.state.profileDetails};
    newProfileDetails[title] = value;
    this.setState({profileDetails: newProfileDetails});
  }

  onChangeEpamEmployee = () => {
    this.setState({epamEmployee: !this.state.epamEmployee});
  }

  onResetProfileDetails = (e) => {
    e.preventDefault();
    this.setState({userInfo: _.pick(this.props.userInfo, Object.keys(this.state.profileDetails))});
  }

  onSubmitProfileDetails = (e) => {
    e.preventDefault();
    this.props.userEdit({
      id: this.props.userInfo._id,
      ...this.state.profileDetails,
      epamEmployee: this.state.epamEmployee
    });
  }

  render() {
    const {profileDetails, epamEmployee, statistics} = this.state;
    const detailsFromServer = _.pick(this.props.userInfo, Object.keys(profileDetails));
    const isProfileDetailsChanged = !_.isEqual(profileDetails, detailsFromServer) ||
      (epamEmployee !== this.props.userInfo.epamEmployee);

    const colorsMap = {
      fighter: '#f39c12',
      berserk: '#e74c3c',
      champion: '#39c2d7',
      mortal: '#a6c638'
    };

    const tournamentsMetrics = {
      participated: 57,
      finished: 21,
      wins: 3
    };

    const solvedMonthsMetrics = {
      year: 2017,
      history: {
        mortal: [29, 17, 11, 18, 13, 11, 4, 1, 23, 28, 20, 23],
        champion: [22, 22, 22, 11, 4, 22, 3, 2, 2, 2, 15, 2],
        fighter: [4, 1, 23, 28, 20, 23, 18, 13, 11, 4, 1, 23],
        berserk: [3, 2, 2, 2, 15, 2, 13, 11, 4, 1, 23, 28]
      }
    };

    return this.props.userLoading
      ? <div className={style.loader} />
      : <div className={style.mainWrapper}>
        <Joyride
          callback={this.tourCallback}
          run={this.state.run}
          stepIndex={this.state.stepIndex}
          steps={this.state.steps}
        />
        <div className={style.wrapper}>
          <div className={style.statisticsContainer}>
            <TournamentsStatistic metrics={tournamentsMetrics} colors={colorsMap} />
            <TasksStatistic metrics={statistics && statistics.tasks} colors={colorsMap} />
            <UnfinishedActivity />
            <SolvedTasksStat metrics={solvedMonthsMetrics} colors={colorsMap} />
          </div>
          <div className={style.detailsContainer}>
            <div className="ProfileDetails">
              <ProfileDetails
                rankPosition={102}
                totalRankPosition={654}
                totalScore={190354}
                epamEmployee={epamEmployee}
                profileDetails={profileDetails}
                onChangeEpamEmployee={this.onChangeEpamEmployee}
                onChangeProfileDetail={this.onChangeProfileDetail}
                onResetProfileDetails={this.onResetProfileDetails}
                onSubmitProfileDetails={this.onSubmitProfileDetails}
                isProfileDetailsChanged={isProfileDetailsChanged}
              />
            </div>
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
  bindActionCreators({userEdit, userRequest, tournamentsRequest}, dispatch)
);

export default connect(mapStateToProps, mapActionsToProps)(ProfileContainer);
