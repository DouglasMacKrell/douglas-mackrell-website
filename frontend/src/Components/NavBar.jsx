import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import DMLogo from './Danger_Mouse.svg';
const Styles = styled.div`
  .navbar { background-color: #fff; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #222;
    &:hover { color: red; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: red; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img src={DMLogo} alt="DM Logo" className="NavBar-Logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/skills">Skills</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/links">Links</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavBar