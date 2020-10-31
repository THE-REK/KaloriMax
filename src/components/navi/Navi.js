import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
  DropdownToggle,  
} from "reactstrap";


export default class Navi extends Component {
  render() {
    return (
      <div style={{ width:"1500px"}}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">KALORİMAX</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/foods/">Foods Calorie List</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/THE-REK/KaloriMax">
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/water/">Daily Water Needs</NavLink>
              </NavItem>
              <DropdownToggle style={{marginLeft:"495px"}} > <NavItem><NavLink  href="/profile">Profile</NavLink></NavItem>   </DropdownToggle>
            </Nav>
            
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
