import React from 'react';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = ({changeView}) => {
    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">User Management</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="#" onClick={() => changeView(1)}>
                    Users
                </NavItem>
                <NavItem eventKey={2} href="#" onClick={() => changeView(2)}>
                    Add Users
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header;