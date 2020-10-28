import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,  
} from "reactstrap";
import { Link } from "react-router-dom"

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">KALORİMAX</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/foods/">Yemek Kalori Listesi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/THE-REK/KaloriMax">
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/water/">Günlük Su İhtiyacı</NavLink>
              </NavItem>
              
            </Nav>
            <Link to="/profile">Profile</Link>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
