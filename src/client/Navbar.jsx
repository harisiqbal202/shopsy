import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./../img/onlineshop.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="alert alerclasst-success alert-dismissible fade show">
        <div className="container">
          <p>
            Shop the new arrival now on the spot.
            <NavLink to="/admin" className="rounded mx-2">
              Shop now
            </NavLink>
          </p>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
          ></button>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} width="30px" height="30px" alt="Logo" />{" "}
            <span className="">Shopsy</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white bg-primary rounded px-3"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="flex my-2 my-lg-0">
              <input
                className="btn btn-primary p-2"
                type="button"
                onClick={() => navigate("/login")}
                value="Login Now"
              ></input>
              <NavLink to="/" className="btn-blk ms-4">
                <i className="fas fa-cart-plus"></i> Cart (0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
