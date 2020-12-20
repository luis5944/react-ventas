import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar is-warning">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="logo.png" alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
