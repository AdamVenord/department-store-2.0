import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const NavBar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/stuffs">
      <Menu.Item>
        Stuff
      </Menu.Item>
    </Link>
    <Link to="/stuffs/new">
      <Menu.Item>
        Create A New Stuff
      </Menu.Item>
    </Link>
    <Link to="/nomatch">
      <Menu.Item>
        Meaning Of Life
      </Menu.Item>
    </Link>
  </Menu>
)

export default NavBar