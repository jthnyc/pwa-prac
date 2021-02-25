import React from "react";
// import {Nav, Navbar} from "react-bootstrap";
import styled, {keyframes} from "styled-components";

const NavMenu = () => {
  return (
    // <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
    //   {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Story</Nav.Link>
    //       <Nav.Link href="#pricing">RSVP</Nav.Link>
    //       <Nav.Link href="#schedule">Schedule</Nav.Link>
    //       <Nav.Link href="#travel">Travel</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar>
      <Navlist>
        <ListItem>
          <ListLink href="Story">Story</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="RSVP">RSVP</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="Schedule">Schedule</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="Travel">Travel</ListLink>
        </ListItem>
      </Navlist>
    </Navbar>
  );
};

export default NavMenu;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const Navbar = styled.nav`
  // border: 1px solid yellow;
  background: transparent;
  width: 100%;
  height: 3rem;
  position: absolute;
  top: 0px;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 3s linear;
  transition: visibility 3s linear;
`;

const Navlist = styled.ul`
  // border: 1px solid green;
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 30%;
  padding: 2rem;
`;

const ListItem = styled.li`
  // border: 1px solid gray;
`;

const ListLink = styled.a`
  color: green;
  font-size: 1.2em;
  text-shadow: 1px 1px #888888;
`;
