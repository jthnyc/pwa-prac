import React from "react";
import {Nav, Navbar} from "react-bootstrap";
// import styled from "styled-components";

const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Story</Nav.Link>
          <Nav.Link href="#pricing">RSVP</Nav.Link>
          <Nav.Link href="#schedule">Schedule</Nav.Link>
          <Nav.Link href="#travel">Travel</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
    // <Navbar>
    //   <ul>
    //     <li>
    //       <a href="Story">Story</a>
    //     </li>
    //     <li>
    //       <a href="RSVP">RSVP</a>
    //     </li>
    //     <li>
    //       <a href="Schedule">Schedule</a>
    //     </li>
    //     <li>
    //       <a href="Travel">Travel</a>
    //     </li>
    //   </ul>
    // </Navbar>
  );
};

export default NavMenu;

// const Navbar = styled.nav`
//   border: 1px solid green;
//   background: transparent;
//   position: absolute;
//   top: 0px;
// `;
