import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Breadcrumbs from './components/Breadcrumbs';

import codeBattleLogo from '../../assets/images/code-battle-logo.png';
import styles from './header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/" className={styles.logoWrapper}>
          <img src={codeBattleLogo} className={styles.logo}/>
          CODE BATTLE
        </Link>
        <Breadcrumbs />
      </header>
    );
  }
}

export default Header;
