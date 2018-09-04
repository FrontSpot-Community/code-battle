import React, {Component} from 'react';
import style from './style.scss';

// import RankHeader from '../../Rank/RankHeader';
import ProfileDetailsList from './ProfileDetailsList';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {profileDetails, epamEmployee} = this.props;

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
              Your details
          </dt>
        </dl>
        <ProfileDetailsList
          epamEmployee={epamEmployee}
          profileDetails={profileDetails}
          onChangeEpamEmployee={this.props.onChangeEpamEmployee}
          onChangeProfileDetail={this.props.onChangeProfileDetail}
          onResetProfileDetails={this.props.onResetProfileDetails}
          onSubmitProfileDetails={this.props.onSubmitProfileDetails}
          isProfileDetailsChanged={this.props.isProfileDetailsChanged}
        />
      </div>
    );
  }
}
