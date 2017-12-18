import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Breadcrumbs from './components/Breadcrumbs';

import logo from '../../assets/images/logo.svg';
import styles from './header.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} className={styles.logo}/>
          CODE BATTLE
        </Link>
        <Breadcrumbs />
        {/* <Notifications />*/}
        {/* <ProfileItem />*/}
      </header>
    );
  }
}

export default Header;
