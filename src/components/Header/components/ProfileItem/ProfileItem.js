import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import userPic from '../../../../assets/images/flip.jpg';
import caretIcon from '../../../../assets/images/caret.svg';

import styles from './profileItem.scss';

class ProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      userName: 'User Name',
      avatarUrl: ''
    };
  }

  componentDidMount() {
    this.currentElement.addEventListener('mouseleave', () => {
      this.setState({isOpen: false});
    });
  }

  toggleDropDown = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({
        ...this.state,
        userName: nextProps.user.githubUsername,
        avatarUrl: nextProps.user.gitHubAvatar_url
      });
    }
  }


  render() {
    const {isOpen} = this.state;
    return (
      <div
        className={isOpen ? styles.containerHover : styles.container}
        onClick={this.toggleDropDown}
        ref={(item) =>{
          this.currentElement = item;
        }}
      >
        <img className={styles.userPic} src={this.state.avatarUrl || userPic} />
        <img
          style={{transform: `rotate(${isOpen ? '180deg' : '0deg'})`}}
          src={caretIcon}
        />
        <div
          style={{display: this.state.isOpen ? 'flex' : 'none'}}
          className={styles.dropDown}
        >
          <span className={styles.userName}>{this.state.userName}</span>
          <Link className={styles.dropDownItem} to={'/profile'}>My Profile</Link>
          <Link className={styles.dropDownItem} to={''}>Main</Link>
          {/* <Link className={styles.logout} to={''}>LOGOUT</Link> */}
        </div>
      </div>
    );
  }
}

export default ProfileItem;
