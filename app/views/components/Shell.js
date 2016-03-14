import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// styles
import '../../assets/styles/shell.css';

export default class Shell extends Component {

  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  };

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">L & Z Wedding</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventkey={1}>
                <Link to="/">Our Story</Link>
              </NavItem>
              <NavItem eventkey={2}>
                <Link to="/wedding">Wedding</Link>
              </NavItem>
              <NavItem eventkey={3}>
                <Link to="/homies">Wedding Party</Link>
              </NavItem>
              <NavItem eventkey={3}>
                <Link to="/pics">Photos</Link>
              </NavItem>
              <NavItem eventkey={4}>
                <Link to="/rsvp">RSVP</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}
