import React, {Component} from 'react';
import style from './style.scss';

import RankHeader from '../../Rank/RankHeader';
import ProfileDetailsList from './ProfileDetailsList';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {rankPosition, totalRankPosition, totalScore, profileDetails} = this.props;

    return (
      <div className={style.wrapper}>
        <dl className={style.header}>
          <dt className={style.title}>
              Your details
          </dt>
        </dl>
        <RankHeader
          leftTitle={'Your Rank Position'}
          rightTitle={'Your Total Score'}
          rankPosition={rankPosition}
          totalRankPosition={totalRankPosition}
          totalScore={totalScore}
        />
        <ProfileDetailsList
          profileDetails={profileDetails}
        />
      </div>
    );
  }
}
