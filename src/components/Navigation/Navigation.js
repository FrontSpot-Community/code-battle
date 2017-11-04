import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap';

export default class Navigation extends Component {
    render() {
        return (
            <Navbar>
               <Navbar.Header>
                 <Navbar.Brand>
                   <a href="#">React-Bootstrap</a>
                 </Navbar.Brand>
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
