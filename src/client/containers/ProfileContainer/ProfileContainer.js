import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  userEdit,
  userRequest
} from 'src/client/actions/action_creators/userActionCreators';
import {tournamentsRequest} from 'src/client/actions/action_creators/tournamentActionCreators';

import {
  ProfileDetails,
  ProfileTournaments
} from 'src/client/components/Profile';

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

  componentWillReceiveProps(props) {
    if (!this.props.userInfo && props.userInfo) {
      const newProfileDetails = _.pick(props.userInfo, Object.keys(this.state.profileDetails));
      this.setState({
        profileDetails: newProfileDetails, epamEmployee: props.userInfo.epamEmployee
      });
    }
  }

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
    return this.props.userLoading
      ? <div className={style.loader} />
      : <div className={style.mainWrapper}>
        <div className={style.wrapper}>
          <div className={style.statisticsContainer}>
            <ProfileTournaments tournaments={this.props.tournaments}/>
          </div>
          <div className={style.detailsContainer}>
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
