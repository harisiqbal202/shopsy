import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../img/onlineshop.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-fluid">
          <div className="row container">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <h3>CONTACT INFO</h3>
                <ul>
                  <li>
                    <i className="fa fa-location me-1"></i> Rawalpindi Islamabad
                  </li>
                  <li>
                    <i className="fa fa-phone me-1"></i> (+92) 341 5921486
                  </li>
                  <li>
                    <i className="fa fa-envelope me-1"></i>{" "}
                    <a href="kamil.shahzad456@gmail.com">
                      kamil.shahzad456@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-clock me-1"></i> Open time: 8:00AM -
                    6:00PM
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <h3>QUICK LINKS</h3>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right me-1"></i> Home
                  </li>
                  <li>
                    <i className="fa fa-chevron-right me-1"></i> About Us
                  </li>
                  <li>
                    <i className="fa fa-chevron-right me-1"></i> Support 24/7
                  </li>
                  <li>
                    <i className="fa fa-chevron-right me-1"></i> Return Policy
                  </li>
                  <li>
                    <i className="fa fa-chevron-right me-1"></i> Terms &
                    Condition
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <h3>CATEGORY</h3>
                <ul>
                  <li>
                    <NavLink className="nav-link" to="/products">
                      <i className="fa fa-chevron-right me-1"></i> Men's
                      Clothing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/products">
                      <i className="fa fa-chevron-right me-1"></i> Women's
                      Clothing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/products">
                      <i className="fa fa-chevron-right me-1"></i> Jewelery
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/products">
                      <i className="fa fa-chevron-right me-1"></i> Electronics
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <h3>OUR LOCATION</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26587.074588806536!2d73.03401030380681!3d33.59533136428672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94834d87f5a3%3A0x506e17bedd22f2e7!2sSaddar%2C%20Rawalpindi%2C%20Punjab%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1675077028114!5m2!1sen!2s"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    <i className="fa fa-copyright"></i> 2022 All Rights
                    Reserved. Designed By{" "}
                    <a href="#">
                      <img src={logo} width="30px" height="30px" alt="Logo" />{" "}
                      <span className="text-primary">Shopsy</span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="copyright-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
