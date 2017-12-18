import React, {Component} from 'react';
import styles from './profileItem.scss';

import userPic from '../../../../assets/images/flip.jpg';
import caretIcon from '../../../../assets/images/caret.svg';

class ProfileItem extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.userPic} src={userPic} />
        <img src={caretIcon} />
      </div>
    );
  }
}

export default ProfileItem;
