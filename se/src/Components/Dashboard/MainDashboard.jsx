import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./style.css";
import "./footerstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faGear } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const MainDashboard = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              SMART CITY
            </Link>
            <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              <FontAwesomeIcon icon={faGear} className="me-1" />
              Services
            </Link>
          </li>
        </ul>
            <div className="d-flex align-items-center">
              <div className="me-3">
                <Link to="/user-login" className="btn btn-user-login">
                  <FaUser className="me-1" />
                  User Login
                </Link>
              </div>
              <div>
                <Link to="/admin-login" className="btn btn-admin-login">
                  <FaLock className="me-1" />
                  Admin Login
                </Link>
              </div>
            </div>

          </div>
        </nav>
        <section className="main-content">
          <h2 className="section-title mt-5">Smart City Management</h2>
          <div className="container-fluid py-5 my-4 mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 shadow p-3 mb-5 bg-body rounded">
                <div
                  id="carouselExampleControlsNoTouching"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://www.researchgate.net/publication/343577759/figure/fig2/AS:923316915294211@1597147315853/Illustration-of-an-IoT-based-Smart-City-where-all-services-are-connected-into-the-grid.ppm"
                        className="d-block w-100 img-fluid"
                        alt="Slide 1"
                        style={{ width: '816px', height: '387px' }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://www.researchgate.net/publication/362373639/figure/fig1/AS:1183854454947840@1659264305210/Smart-city-applications.png"
                        className="d-block w-100 img-fluid"
                        alt="Slide 2"
                        style={{ width: '816px', height: '387px' }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://www.researchgate.net/publication/326874508/figure/fig1/AS:659522603470850@1534253850559/A-smart-city-architecture-abstract-view-From-the-technical-point-of-view-the.png"
                        className="d-block w-100 img-fluid"
                        alt="Slide 3"
                        style={{ width: '816px', height: '387px' }}
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col" id="company">
              <img src="images/logo.png" alt="" class="logo" />
              <p>
               "smart city management aims to create more livable, sustainable,
                and resilient urban environments by harnessing the power of
                technology and innovation to improve the quality of life for
                residents and visitors alike." 
              </p>
              <div class="social">
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col" id="services">
              <h3>Services</h3>
              <div class="links">
                <a href="#">E-parking</a>
                <a href="#">Health Care</a>
                <a href="#">Entertainment</a>
                <a href="#">Protection</a>
              </div>
            </div>

            <div class="col" id="useful-links">
              <h3>Links</h3>
              <div class="links">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Our Policy</a>
                <a href="#">Help</a>
              </div>
            </div>

            <div class="col" id="contact">
              <h3>Contact</h3>
              <div class="contact-details">
                <i class="fa fa-location"></i>
                <p>
                  FF-42,Hyderabad, <br /> Telangana, INDIA
                </p>
              </div>
              <div class="contact-details">
                <i class="fa fa-phone"></i>
                <p>+1-8755856858</p>
              </div>
            </div>
          </div>
          <br></br>

          <p className="card-text text-black">
            Follow us on :
            <div className="justify-content-evenly">
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} style={{ color: "black" }} />
              </a>
              &nbsp; &nbsp;
              <a href="https://instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "black" }}
                />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:youremail@example.com">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "black" }} />
              </a>
            </div>
          </p>
        </div>
      </footer>
    </>
  );
};

export default MainDashboard;
