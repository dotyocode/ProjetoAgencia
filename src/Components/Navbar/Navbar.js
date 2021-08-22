import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  return (
    <>
      <nav className="navbars">
        <div className=" container">
          <div className="row">
            <div className="col-lg-2">
              <Link to="/" className="navbar-logo">
                <img className="logo" alt="My Awesome" src="/imgs/logo.png" />
              </Link>
            </div>
            <div className="col-lg-6">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contato" className="nav-links">
                    Contato
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/servicos" className="nav-links">
                    Serviços
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
