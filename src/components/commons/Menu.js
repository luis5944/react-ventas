import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="panel is-dark ">
      <p className="panel-heading has-text-centered">Menú</p>
      <div className="panel-block">
        <Link to="/" className="button is-fullwidth">
          <span className="icon">
            <i className="fas fa-home"></i>
          </span>
          <span>Inicio</span>
        </Link>
      </div>
      <div className="panel-block">
        <Link to="/clientes" className="button is-fullwidth">
          <span className="icon">
            <i className="fas fa-users"></i>
          </span>
          <span>Clientes</span>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
