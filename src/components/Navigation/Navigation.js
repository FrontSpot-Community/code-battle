import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap';

import codeBattleLogo from '../../assets/images/code-battle-logo.png';
import styles from './navigation.scss';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <a href="#" className={styles.logoWrapper}>
                        <img src={codeBattleLogo} className={styles.logo}/>
                        CODE BATTLE
                    </a>
                </Navbar.Header>
                <Nav>
                {this.props.links.map((link, index) => {
                    return (
                        <LinkContainer key={index} to={link.path}>
                            <NavItem eventKey={index}>{link.title}</NavItem>
                        </LinkContainer>
                  );
                })}
                </Nav>
            </Navbar>
        );
    }
}
