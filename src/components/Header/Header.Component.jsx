import React from "react";
import { Navbar } from "react-bootstrap";

import HeaderLinks from "./HeaderLinks.Component";
export default ({ logout }) => {
  return (
      <Navbar className='header'>
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <HeaderLinks logout={logout}/>
        </Navbar.Collapse>
      </Navbar>
    );
};
