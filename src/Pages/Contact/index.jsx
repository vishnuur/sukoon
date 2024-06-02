import React from "react";
import Slider from "react-slick";
import carousel1 from "../../assets/images/bg_1.jpg";
import { Link } from "react-router-dom";

export default function ContactScreen() {
  const settings = {
    dots: false,
    fade: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <div className="slider-wrap">
        <Slider {...settings}>
          <div className="single-carousel">
            <img src={carousel1} style={{ height: "50vh", width: "100%" }} />
            <div className="overlay"></div>
            <div
              className="container"
              data-scrollax-parent="true"
              style={{ top: "50%" }}
            >
              <div className="row slider-text align-items-end">
                <div className="col-md-7 col-sm-12 ftco-animate mb-5">
                  <p
                    className="breadcrumbs"
                    data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"
                  >
                    <span className="mr-2">
                      <Link to="/">Home</Link>
                    </span>{" "}
                    <span>Blog</span>
                  </p>
                  <h1
                    className="mb-3"
                    data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                  >
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>{" "}
          </div>
        </Slider>
      </div>
      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h4">Contact Information</h2>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3">
              <p>
                <span>Address:</span> Lot NO 10531 Ranauraa Magu Hulhumale,
                Malidives
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Phone:</span> <a href="tel://1234567920">+960 915-4433</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Email:</span>{" "}
                <a href="mailto:info@yoursite.com">admin@ansaarclinic.com</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Website</span> <a href="#">www.ansaarclinic.com</a>
              </p>
            </div>
          </div>
          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div className="col-md-6" id="map"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
