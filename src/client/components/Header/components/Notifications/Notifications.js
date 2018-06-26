import React, {Component} from 'react';

import bellIcon from 'root/assets/images/bell.svg';
import styles from './notifications.scss';

class Notifications extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.bell} src={bellIcon} />
      </div>
    );
  }
}

export default Notifications;
