import React, {Component} from 'react';
import style from './style.scss';

export default class ProfileDetailsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {profileDetails} = this.props;

    return (
      <div className={style.profileDetailsList}>
        {Object
          .entries(profileDetails)
          .map(([profileDetail, value]) => {
            <div
              key={profileDetail}
              className={style.profileDetailsListItem}
            >
              <div className={style.profileDetail}>
                <div className={style.profileDetailName}>
                  {profileDetail}
                </div>
                <div className={style.profileDetailValue}>
                  {value}
                </div>
              </div>
            </div>;
          })
        }
      </div>
    );
  }
}
