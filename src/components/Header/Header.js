import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Breadcrumbs from './components/Breadcrumbs';

import logo from '../../assets/images/logo.svg';
import styles from './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandTitle: 'CODE BATTLE',
      headerStyles: {
        backgroundColor: '#222222'
      }
    };
  }

  setHeaderBackground = (color) => {
    this.setState({headerStyles: {backgroundColor: color}});
  };

  render() {
    return (
      <header
        style={this.state.headerStyles}
        className={styles.header}
      >
        <Link to="/" className={styles.logoWrapper}>
          <img src={logo} className={styles.logo}/>
          {this.state.brandTitle}
        </Link>
        <Breadcrumbs setHeaderBackground={this.setHeaderBackground}/>
        {/* <Notifications />*/}
        {/* <ProfileItem />*/}
      </header>
    );
  }
}

export default Header;
