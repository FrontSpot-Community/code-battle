import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import secGif from 'root/assets/images/sec.gif';
import styles from './secButton.scss';

class SecButton extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to='/sec'>
          <img className={styles.sec} src={secGif} />
        </Link>
      </div>
    );
  }
}

export default SecButton;
