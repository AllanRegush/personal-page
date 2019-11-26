import { Link } from 'gatsby';
import React from "react";
import Nav from "./Nav";

const Header = () => (
  <header>
    <Link to="/">
      <a><span>AR</span></a>
    </Link>
    <Nav />
  </header>
);

export default Header;
