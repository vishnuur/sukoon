import React, { useState } from "react";
import Slider from "react-slick";
import carousel1 from "../../assets/images/acupuncture-process.jpg";
import carousel2 from "../../assets/images/close-up-cupping-therapy-experience.jpg";
import carousel3 from "../../assets/images/woman-experiencing-cupping-therapy.jpg";
import digestive from "../../assets/images/Icons/Digestive Issues.png";
import anxiety from "../../assets/images/Icons/Stress and Anxiety.png";
import womensHealth from "../../assets/images/Icons/Women's Health.png";
import painRelief from "../../assets/images/Icons/Pain Relief.png";
import apoev190200057 from "../../assets/images/apoev190200057.jpg";
import bgImage from "../../assets/images/bg_1.jpg";
import galleryBg1 from "../../assets/images/gallery/1.jpg";
import galleryBg2 from "../../assets/images/gallery/2.jpg";
import galleryBg3 from "../../assets/images/gallery/3.jpg";
import galleryBg4 from "../../assets/images/gallery/4.jpg";
import { MdOutlineWhatsapp } from "react-icons/md";

import "./index.css";
import { Link } from "react-router-dom";
import AppointmentModal from "../../Components/SubmitModal";
import { DatePicker } from "antd";

export default function Home() {
  const [isModalOpen, setisModalOpen] = useState(false);
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
    pauseOnHover: false,
  };

  const openWhatsApp = () => {
    const phoneNumber = "9609787696";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const message = "Hello, I would like to talk to you!";
    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}`,
        "_blank"
      );
    }
  };

  return (
    <div>
      <div className="slider-wrap">
        <Slider {...settings}>
          <div className="single-carousel">
            <img src={carousel1} />
            <div className="overlay"></div>
            <div className="container" style={{ width: "30%" }}>
              <div data-scrollax-parent="true">
                <div data-scrollax=" properties: { translateY: '70%' }">
                  <h1 data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                    Needles of healing, hands of care: Acupuncture
                  </h1>
                  <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                    Acupuncture is used to treat a wide range of physical and
                    emotional conditions, including chronic pain, infertility,
                    anxiety, and depression.
                  </p>
                  <a
                    onClick={() => {
                      // setisModalOpen(true);
                      openWhatsApp();
                    }}
                    style={{ color: "white" }}
                    className="btn btn-primary px-4 py-3 make-appoinment-btn"
                  >
                    <MdOutlineWhatsapp size={32} />
                    &nbsp;Make an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-carousel">
            <img src={carousel2} />
            <div className="overlay"></div>
            <div className="container">
              <div data-scrollax-parent="true">
                <div data-scrollax=" properties: { translateY: '70%' }">
                  <h1 data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                    Experience the healing power of cupping therapy
                  </h1>
                  <p className="mb-4">
                    Cupping therapy is used to treat a variety of conditions
                    including chronic pain, muscle tension, and respiratory
                    issues.
                  </p>
                  <a
                    onClick={() => {
                      // setisModalOpen(true);
                      openWhatsApp();
                    }}
                    style={{ color: "white" }}
                    className="btn btn-primary px-4 py-3 make-appoinment-btn"
                  >
                    <MdOutlineWhatsapp size={32} />
                    &nbsp;Make an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-carousel">
            <img src={carousel3} />
            <div className="overlay"></div>
            <div className="container">
              <div data-scrollax-parent="true">
                <div data-scrollax=" properties: { translateY: '70%' }">
                  <h1 data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                    Cupping therapy: the natural way to relieve pain and tension
                  </h1>
                  <p className="mb-4">
                    In acupuncture, cupping therapy is often used in conjunction
                    with needle therapy to enhance the healing process.{" "}
                  </p>
                  <a
                    onClick={() => {
                      // setisModalOpen(true);
                      openWhatsApp();
                    }}
                    className="btn btn-primary px-4 py-3 make-appoinment-btn"
                    style={{ color: "white" }}
                  >
                    <MdOutlineWhatsapp size={32} />
                    &nbsp;Make an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <section className="ftco-intro">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 color-1 p-4">
              <h3 className="mb-4">Emergency Cases</h3>
              <p>Please contact Us</p>
              <span className="phone-number"> +960 915-4433</span>
            </div>
            <div className="col-md-6 color-2 p-4">
              <h3 className="mb-4">Opening Hours</h3>
              <p className="openinghours d-flex">
                <span>Monday - Thursday</span>
                <span>7:00 AM - 8:00 PM</span>
              </p>
              <p className="openinghours d-flex">
                <span>Saturday - Sunday</span>
                <span>7:00 AM - 8:00 PM</span>
              </p>
              <p className="openinghours d-flex">
                <span>Friday Holiday</span>
                <span>10:00 - 16:00</span>
              </p>
            </div>
            {/* <div className="col-md-6 color-3 p-4">
              <h3 className="mb-2">Make an Appointment</h3>
              <form action="#" className="appointment-form">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down"></span>
                        </div>
                        <select
                          name=""
                          id=""
                          className="form-control select-list"
                        >
                          <option value="">Department</option>
                          <option value="">Teeth Whitening</option>
                          <option value="">Teeth CLeaning</option>
                          <option value="">Quality Brackets</option>
                          <option value="">Modern Anesthetic</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <span className="icon-supervisor_account"></span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="National ID"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <span className="icon-user"></span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="appointment_name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <span className="icon-paper-plane"></span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="appointment_email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <span className="icon-phone2"></span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down"></span>
                        </div>
                        <select
                          name=""
                          id=""
                          className="form-control select-list"
                        >
                          <option value="">Gender</option>
                          <option value="">Male</option>
                          <option value="">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5">
                    <div className="form-group">
                      <div className="form-control home-datepicker">
                        <DatePicker
                          variant="borderless"
                          onChange={() => console.log("first")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="form-group">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down"></span>
                        </div>
                        <select
                          name=""
                          id=""
                          className="form-control select-list"
                        >
                          <option value="">Time Slot</option>
                          <option value="">07:00AM to 08:00AM</option>
                          <option value="">08:00AM to 09:00AM</option>
                          <option value="">09:00AM to 10:00AM</option>
                          <option value="">10:00AM to 11:00AM</option>
                          <option value="">11:00AM to 12:00AM</option>
                          <option value="">12:00PM to 01:00PM</option>
                          <option value="">02:00PM to 03:00PM</option>
                          <option value="">03:00PM to 04:00PM</option>{" "}
                          <option value="">04:00PM to 05:00PM</option>
                          <option value="">05:00PM to 06:00PM</option>
                          <option value="">06:00PM to 07:00PM</option>
                          <option value="">07:00PM to 08:00PM</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    value="Make an Appointment"
                    className="btn btn-primary  submit-btn-home"
                  >
                    Submit Appointment
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-services">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-2">
                Service that's truly personalized, just for you.
              </h2>
              <p>
                Experience the natural balance of mind, body and spirit with
                acupuncture.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={painRelief} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Pain Relief</h3>
                  <p>
                    We relieve aches and pains including back pain, headaches,
                    arthritis and more. So, If you've tried medication, ice
                    packs and hot packs and still found yourself suffering,
                    acupuncture may be exactly what you're looking for.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={anxiety} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Stress and Anxiety</h3>
                  <p>
                    Acupuncture can help relieve stress by regulating
                    neurotransmitters in the brain associated with stress and
                    pain. It can also restore harmony in your body by restoring
                    the natural balance of your mental, physical and emotional
                    health.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={womensHealth} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Women's Health</h3>
                  <p>
                    Acupuncture offers women a safe, natural and effective
                    solution against common conditions such as period pains,
                    mood swings or menopausal symptoms. Whatever you may be
                    going through, acupuncture may be able to help.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={digestive} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Digestive Issues </h3>
                  <p>
                    We can help you relieve IBS and other digestive issues. We
                    use an all natural approach to relieving your symptoms
                    without having to give up healthy and tasty foods. Book your
                    acupuncture sessions with us.
                  </p>
                </div>
                <p>
                  <Link to="/services" className="btn btn-primary px-4 py-3">
                    More..
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-wrap mt-5">
          <div className="row d-flex no-gutters">
            <div
              className="col-md-6 img"
              style={{
                backgroundImage: `url(${apoev190200057})`,
              }}
            ></div>
            <div className="col-md-6 d-flex">
              <div className="about-wrap">
                <div className="heading-section heading-section-white mb-5 ftco-animate">
                  <h2 className="mb-2">Acupuncture &amp; Hijama</h2>
                  <p>
                    Acupuncture is a tool in the healing process, but not the
                    only tool. The true power of acupuncture lies in its ability
                    to stimulate the body's own healing mechanisms.
                  </p>
                </div>
                <div className="list-services d-flex ftco-animate">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-check2"></span>
                  </div>
                  <div className="text">
                    <h3>Well Experience Doctors</h3>
                    <p>
                      At Sukoon Clinic, our team of well-experienced doctors is
                      dedicated to providing the highest level of care in
                      acupuncture. With many years of training and practical
                      experience, our doctors have a deep understanding of the
                      human body and the intricate systems that keep it
                      functioning.
                    </p>
                  </div>
                </div>
                <div className="list-services d-flex ftco-animate">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-check2"></span>
                  </div>
                  <div className="text">
                    <h3>High Technology Facilities</h3>
                    <p>
                      At Sukoon Clinic, we are dedicated to providing our
                      patients with the latest and most advanced technologies in
                      acupuncture care. Our state-of-the-art facilities are
                      equipped with the latest tools and equipment, ensuring
                      that our patients receive the most effective treatments
                      possible.
                    </p>
                  </div>
                </div>
                <div className="list-services d-flex ftco-animate">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className="icon-check2"></span>
                  </div>
                  <div className="text">
                    <h3>Comfortable Clinic</h3>
                    <p>
                      At Sukoon Clinic, we understand that comfort is an
                      essential part of the healing process. That's why we've
                      designed our clinic to be a warm and welcoming place where
                      patients can relax and feel at ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-services"></section>
      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: `url(${bgImage})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-3 aside-stretch py-5">
              <div className=" heading-section heading-section-white ftco-animate pr-md-4">
                <h2 className="mb-3">Achievements</h2>
                <p>Sample text.</p>
              </div>
            </div>
            <div className="col-md-9 py-5 pl-md-5">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="10">
                        0
                      </strong>
                      <span>Years of Experience</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="10">
                        0
                      </strong>
                      <span>Qualified Doctors</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="25000">
                        0
                      </strong>
                      <span>Happy Smiling Customer</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="1000">
                        0
                      </strong>
                      <span>Patients Per Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-3">Our Best Pricing</h2>
              <p>
                We offer a wide range of pricing options to suit your needs.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 ftco-animate">
              <div className="pricing-entry pb-5 text-center">
                <div>
                  <h3 className="mb-4">Acupuncture</h3>
                  <p>
                    <span className="price">$24.50</span>{" "}
                    <span className="per">/ session</span>
                  </p>
                </div>
                <ul>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                </ul>
                <p className="button text-center">
                  <a
                    href="#"
                    className="btn btn-primary btn-outline-primary px-4 py-3"
                  >
                    Order now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 ftco-animate">
              <div className="pricing-entry pb-5 text-center">
                <div>
                  <h3 className="mb-4">Hijama</h3>
                  <p>
                    <span className="price">$34.50</span>{" "}
                    <span className="per">/ session</span>
                  </p>
                </div>
                <ul>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                </ul>
                <p className="button text-center">
                  <a
                    href="#"
                    className="btn btn-primary btn-outline-primary px-4 py-3"
                  >
                    Order now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 ftco-animate">
              <div className="pricing-entry active pb-5 text-center">
                <div>
                  <h3 className="mb-4">Mind Therapy</h3>
                  <p>
                    <span className="price">$54.50</span>{" "}
                    <span className="per">/ session</span>
                  </p>
                </div>
                <ul>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                </ul>
                <p className="button text-center">
                  <a
                    href="#"
                    className="btn btn-primary btn-outline-primary px-4 py-3"
                  >
                    Order now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 ftco-animate">
              <div className="pricing-entry pb-5 text-center">
                <div>
                  <h3 className="mb-4">Steam Bath</h3>
                  <p>
                    <span className="price">$89.50</span>{" "}
                    <span className="per">/ session</span>
                  </p>
                </div>
                <ul>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                  <li>sample text</li>
                </ul>
                <p className="button text-center">
                  <a
                    href="#"
                    className="btn btn-primary btn-outline-primary px-4 py-3"
                  >
                    Order now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-gallery">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 ftco-animate">
              <Link
                to="/gallery"
                className="gallery img d-flex align-items-center"
                style={{ backgroundImage: `url(${galleryBg1})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-3 ftco-animate">
              <Link
                to="/gallery"
                className="gallery img d-flex align-items-center"
                style={{ backgroundImage: `url(${galleryBg2})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-3 ftco-animate">
              <Link
                to="/gallery"
                className="gallery img d-flex align-items-center"
                style={{ backgroundImage: `url(${galleryBg3})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-3 ftco-animate">
              <Link
                to="/gallery"
                className="gallery img d-flex align-items-center"
                style={{ backgroundImage: `url(${galleryBg4})` }}
              >
                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                  <span className="icon-search"></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-quote">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-md-5 aside-stretch py-5 choose">
              <div className="heading-section heading-section-white mb-5 ftco-animate">
                <h2 className="mb-2">Sukoon Clinic Acupuncture &amp; Hijama</h2>
              </div>
              <div className="ftco-animate">
                <p>
                  Acupuncture and hijama (also known as cupping therapy) are
                  both forms of traditional Chinese medicine that have been used
                  for thousands of years to promote healing and well-being.
                  While acupuncture involves the insertion of thin needles into
                  specific points on the body, hijama involves the use of
                  suction cups on the skin.
                </p>
                <ul className="un-styled my-5">
                  <li>
                    <span className="icon-check"></span>Acupuncture
                  </li>
                  <li>
                    <span className="icon-check"></span>Hijama
                  </li>
                  <li>
                    <span className="icon-check"></span>Mind Therapy
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 py-5 pl-md-5">
              <div className="heading-section mb-5 ftco-animate">
                <h2 className="mb-2">Get an Appointment...</h2>
              </div>
              <form action="#" className="ftco-animate">
                <div className="row">
                  {/* <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
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
                  </div> */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <button
                        // type="submit"
                        value="Make an appointment"
                        className="btn btn-primary py-3 px-5"
                        onClick={openWhatsApp}
                      >
                        <MdOutlineWhatsapp size={32} />
                        &nbsp; Make an appointment
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <AppointmentModal
        isVisible={isModalOpen}
        setVisible={() => setisModalOpen(true)}
        closeModal={() => setisModalOpen(false)}
      />
    </div>
  );
}
