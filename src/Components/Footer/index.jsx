import React from "react";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <div>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Ansaar Clinic.</h2>
                <p>
                  Ansaar clinic is dedicated to providing the highest quality of
                  care for our patients. We use a combination of traditional
                  acupuncture techniques and modern technology to deliver
                  personalized treatment plans that are tailored to your unique
                  needs.
                </p>
              </div>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft ">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="py-2 d-block">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="py-2 d-block">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="py-2 d-block">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="py-2 d-block">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="py-2 d-block">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 pr-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Our Services</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/services" className="py-2 d-block">
                      Acupuncture
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="py-2 d-block">
                      Hijama
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="py-2 d-block">
                      Mind Therapy
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="py-2 d-block">
                      Steam Bath
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Clinic</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        Lot NO 10531 Ranauraa Magu Hulhumale, Malidives
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">+960 915-4433</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">admin@ansaarclinic.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved Ansaar Clinic | This website is made with{" "}
                <i className="icon-heart" aria-hidden="true"></i> by{" "}
                <a target="_blank">NilaTech</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
