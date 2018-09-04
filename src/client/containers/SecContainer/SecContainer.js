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
  TournamentScore
} from 'src/client/components/Sec';

import style from './style.scss';

class SecContainer extends Component {
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
      epamEmployee: userInfo.epamEmployee
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
        profileDetails: newProfileDetails, epamEmployee: props.userInfo.epamEmployee
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
      epamEmployee: this.state.epamEmployee});
  }

  render() {
    const detailsFromServer = _.pick(this.props.userInfo, Object.keys(this.state.profileDetails));
    const isProfileDetailsChanged = !_.isEqual(this.state.profileDetails, detailsFromServer) ||
      (this.state.epamEmployee !== this.props.userInfo.epamEmployee);

    const places = {
      '0': {name: '1st'},
      '1': {name: '2nd'},
      '2': {name: '3rd'},
      '3': {name: '4th'},
      '4': {name: '5th'},
      '5': {name: '6th'},
      '6': {name: '7th'},
      '7': {name: '8th'},
      '8': {name: '9th'},
      '9': {name: '10th'}
    };

    const tournaments = {
      'javaScript': {
        '0': {name: 'John 1'},
        '1': {name: 'John 2'},
        '3': {name: 'John 3'},
        '2': {name: 'John 4'},
        '4': {name: 'John 5'},
        '5': {name: 'John 6'},
        '6': {name: 'John 7'},
        '7': {name: 'John 8'},
        '8': {name: 'John 9'},
        '9': {name: 'John 10'}
      },
      'python': {
        '0': {name: 'David 1'},
        '1': {name: 'David 2'},
        '2': {name: 'David 3'},
        '3': {name: 'David 4'},
        '4': {name: 'David 5'},
        '5': {name: 'David 6'},
        '6': {name: 'David 7'},
        '7': {name: 'David 8'},
        '8': {name: 'David 9'},
        '9': {name: 'David 10'}
      },
      'csharp': {
        '0': {name: 'Peter 1'},
        '1': {name: 'Peter 2'},
        '2': {name: 'Peter 3'},
        '3': {name: 'Peter 4'},
        '4': {name: 'Peter 5'},
        '5': {name: 'Peter 6'},
        '6': {name: 'Peter 7'},
        '7': {name: 'Peter 8'},
        '8': {name: 'Peter 9'},
        '9': {name: 'Peter 10'}
      },
      'java': {
        '0': {name: 'Mark 1'},
        '1': {name: 'Mark 2'},
        '2': {name: 'Mark 3'},
        '3': {name: 'Mark 4'},
        '4': {name: 'Mark 5'},
        '5': {name: 'Mark 6'},
        '6': {name: 'Mark 7'},
        '7': {name: 'Mark 8'},
        '8': {name: 'Mark 9'},
        '9': {name: 'Mark 10'}
      },
      'php': {
        '0': {name: 'Steve 1'},
        '1': {name: 'Steve 2'},
        '2': {name: 'Steve 3'},
        '3': {name: 'Steve 4'},
        '4': {name: 'Steve 5'},
        '5': {name: 'Steve 6'},
        '6': {name: 'Steve 7'},
        '7': {name: 'Steve 8'},
        '8': {name: 'Steve 9'},
        '9': {name: 'Steve 10'}
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
          <div className={style.resultsContainer}>
            <div className="ProfileTournaments">
              <TournamentScore
                places={places}
                tournaments={tournaments}
              />
            </div>
          </div>
          <div className={style.chartsContainer}>
            <div className="ProfileDetails">
              <ProfileDetails
                rankPosition={102}
                totalRankPosition={654}
                totalScore={190354}
                epamEmployee={this.state.epamEmployee}
                profileDetails={this.state.profileDetails}
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

export default connect(mapStateToProps, mapActionsToProps)(SecContainer);
