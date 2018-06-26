import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Breadcrumbs from './components/Breadcrumbs';
import Notifications from './components/Notifications';
import ProfileItem from './components/ProfileItem';

import logo from 'root/assets/images/logo.svg';
import styles from './header.scss';
import {colors} from 'src/common/constants/colors';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandTitle: 'CODE BATTLE',
      headerStyles: {
        backgroundColor: colors.bgDark
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
        <Notifications />
        <ProfileItem user={this.props.user}/>
      </header>
    );
  }
}

export default Header;
