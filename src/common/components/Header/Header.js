import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

import Breadcrumbs from './components/Breadcrumbs/index';
import Notifications from './components/Notifications/index';
import ProfileItem from './components/ProfileItem/index';
import AdminButtonPanel from './components/AdminButtonPanel';
import SecButton from './components/SecButton';

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

  renderAdminButtonPanel = () => {
    const {user} = this.props;
    return (user && user.isAdmin) ?
      <AdminButtonPanel activePageName={this.props.activePageName}/>
      : null;
  };

  renderHeader = () =>{
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
        <SecButton/>
        <div className={styles.header__rightPart}>
          {this.renderAdminButtonPanel()}
          <Notifications/>
          <ProfileItem user={this.props.user}/>
        </div>
      </header>
    );
  };

  render() {
    return (
      this.props.location.pathname !== '/login' ? this.renderHeader() : null
    );
  }
}

export default withRouter(Header);