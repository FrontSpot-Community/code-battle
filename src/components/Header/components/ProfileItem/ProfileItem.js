import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import userPic from '../../../../assets/images/flip.jpg';
import caretIcon from '../../../../assets/images/caret.svg';

import styles from './profileItem.scss';

import {ButtonToolbar} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';

class ProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      userName: 'User Name'
    };
  }

  // toggleDropDown = () => {
  //   this.setState({isOpen: !this.state.isOpen});
  // };

  // handleOffClick = () => {
  //   if (!this.state.isOpen) {
  //     document.addEventListener('click', this.handleOffClickChecker, false);
  //   } else {
  //     document.removeEventListener('click', this.handleOffClickChecker, false);
  //   }
  //   this.setState({isOpen: !this.state.isOpen});
  // };
  //
  // handleOffClickChecker(e) {
  //   // console.log(this);
  //   // console.log(this.node);
  //   // console.log(e);
  //   if (this.node.contains(e.target)) {
  //     return;
  //   }
  //   this.handleOffClick();
  // }

  render() {
    const {isOpen} = this.state;
    return (

      <ButtonToolbar>
        <Dropdown
          id="dropdown-custom-1"
          pullRight

        >
          <Dropdown.Toggle
            className={isOpen ? styles.containerHover : styles.container}
          >
            <img className={styles.userPic} src={userPic} />
            <img
              style={{transform: `rotate(${isOpen ? '180deg' : '0deg'})`}}
              src={caretIcon}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu
            className={styles.dropDown}
          >
            <span className={styles.userName}>{this.state.userName}</span>
            <Link className={styles.dropDownItem} to={''}>My Profile</Link>
            <Link className={styles.dropDownItem} to={''}>Resolved Tasks</Link>
            <Link className={styles.logout} to={''}>LOGOUT</Link>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    );
  }
}

export default ProfileItem;
