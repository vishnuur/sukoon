import React, { useEffect, useState } from "react";
import logoImage from "../../assets/images/logo_sukoon.png";
import "./index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { slide as Menu } from "react-burger-menu";
import AppointmentModal from "../SubmitModal";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [burgerMenuVisible, setburgerMenuVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500; // Adjust this value based on when you want the header to become fixed

      if (scrollPosition > threshold && !isFixed) {
        setIsFixed(true);
      } else if (scrollPosition <= threshold && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  const checkCurrentPath = (path) => {
    if (pathname === path) {
      return "active";
    } else {
      return "";
    }
  };

  const handleModalOpen = () => {
    setburgerMenuVisible(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickItems = (path) => {
    setburgerMenuVisible(false);
    navigate(path);
  };

  const openWhatsApp = () => {
    const phoneNumber = "7559966277";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const message = "Hello, I would like to talk to you!";
    if (isMobile) {
      // Try to open the WhatsApp app on mobile devices
      window.location.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
      // Fallback to WhatsApp Web for non-mobile devices
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}`,
        "_blank"
      );
    }

    // window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}&app_absent=0`)
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${
        isFixed ? "fixed" : ""
      }`}
      id="ftco-navbar"
    >
      <div className="container">
        <img src={logoImage} className="logo img-fluid" />
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setburgerMenuVisible(true)}
          style={{ color: !isFixed ? "white" : "black" }}
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                onClick={() => onClickItems("/")}
                className={`nav-link ${checkCurrentPath("/")}`}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => onClickItems("/about")}
                className={`nav-link ${checkCurrentPath("/about")}`}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => onClickItems("/services")}
                className={`nav-link ${checkCurrentPath("/services")}`}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => onClickItems("/gallery")}
                className={`nav-link ${checkCurrentPath("/gallery")}`}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => onClickItems("/contact")}
                className={`nav-link ${checkCurrentPath("/contact")}`}
              >
                Contact
              </a>
            </li>
            <li className="nav-item cta">
              <a
                className="nav-link"
                data-toggle="modal"
                onClick={() => {
                  openWhatsApp();
                  // handleModalOpen();
                }}
              >
                <span>
                  <MdOutlineWhatsapp size={32} />
                  &nbsp;Make an Appointment
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Menu
        isOpen={burgerMenuVisible}
        right
        onClose={() => setburgerMenuVisible(false)}
        onOpen={() => setburgerMenuVisible(true)}
      >
        <a
          className="burger-close-menu"
          onClick={() => setburgerMenuVisible(false)}
        >
          <span className="icon-close"></span>
        </a>
        <ul className="navbar-nav ml-auto" style={{ marginTop: "24px" }}>
          <li className="nav-item">
            <a
              onClick={() => onClickItems("/")}
              className={`nav-link ${checkCurrentPath("/")}`}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => onClickItems("/about")}
              className={`nav-link ${checkCurrentPath("/about")}`}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => onClickItems("/services")}
              className={`nav-link ${checkCurrentPath("/services")}`}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => onClickItems("/gallery")}
              className={`nav-link ${checkCurrentPath("/gallery")}`}
            >
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => onClickItems("/contact")}
              className={`nav-link ${checkCurrentPath("/contact")}`}
            >
              Contact
            </a>
          </li>
          <li className="nav-item cta">
            <a
              className="nav-link"
              data-toggle="modal"
              onClick={() => {
                // handleModalOpen();
                openWhatsApp();
              }}
            >
              <span>
                <MdOutlineWhatsapp size={32} />
                &nbsp;Make an Appointment
              </span>
            </a>
          </li>
        </ul>
      </Menu>
      <AppointmentModal
        isVisible={modalOpen}
        setVisible={handleModalOpen}
        closeModal={closeModal}
      />
    </nav>
  );
}
