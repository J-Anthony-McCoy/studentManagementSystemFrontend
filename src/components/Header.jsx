import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Header = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/">Students of Mock High School</NavbarBrand>
          <Nav>
            <NavItem>
              <Link className="btn btn-primary" to="/create">
                Create Student
              </Link>
            </NavItem>
            <NavItem>
              <Link className="btn btn-primary ml-1" to="/delete">
                Delete Student
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
