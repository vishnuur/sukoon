import React from "react";
import Slider from "react-slick";
import carousel1 from "../../assets/images/Cupping-therapy-cropped-1536x523.jpg";
import ansarclinic from "../../assets/images/AnsaarClinic.png";
import bg1 from "../../assets/images/1aabba_33f115e2c30441b091adcfd01cb8a75f_mv2.jpg";
import bg2 from "../../assets/images/about-2.jpg";
import bg3 from "../../assets/images/person_1.jpg";
import bg4 from "../../assets/images/person_2.jpg";
import bg5 from "../../assets/images/person_3.jpg";
import { Link } from "react-router-dom";

export default function About() {
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
            <img src={carousel1} style={{ height: "50vh" }} />
            <div className="overlay"></div>
            <div
              className="container"
              data-scrollax-parent="true"
              style={{ top: "50%", width: "100%" }}
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
                    <span>About</span>
                  </p>
                  <h1
                    className="mb-3"
                    data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                  >
                    About Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <section className="intro-section spad">
        <div className="container">
          <div className="row d-md-flex">
            <div className="col-lg-6">
              <img
                src={ansarclinic}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-lg-6 intro-text">
              <h2>About Us</h2>
              <p>
                Acupuncture has been successfully practiced in China for more
                than 3,000 years and is one of the oldest healing systems in the
                world. Our body is a network of interacting energies. An even
                distribution and smooth flow of these energies will maintain
                health, whereas any interruption, depletion or stagnation in
                these energies can lead to disease. The principle of acupuncture
                is to aid these natural processes, helping the body to re-order
                the interaction of energies and heal itself.
              </p>
              <a href="" className="site-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row d-md-flex">
            <div
              className="col-md-6 ftco-animate img about-image order-md-last"
              style={{ backgroundImage: `url(${bg1})` }}
            ></div>
            <div className="col-md-6 ftco-animate pr-md-5 order-md-first">
              <div className="row">
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div
                    className="nav ftco-animate nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-whatwedo-tab"
                      data-toggle="pill"
                      href="#v-pills-whatwedo"
                      role="tab"
                      aria-controls="v-pills-whatwedo"
                      aria-selected="true"
                    >
                      Our Vision
                    </a>

                    <a
                      className="nav-link"
                      id="v-pills-mission-tab"
                      data-toggle="pill"
                      href="#v-pills-mission"
                      role="tab"
                      aria-controls="v-pills-mission"
                      aria-selected="false"
                    >
                      Our mission
                    </a>

                    <a
                      className="nav-link"
                      id="v-pills-goal-tab"
                      data-toggle="pill"
                      href="#v-pills-goal"
                      role="tab"
                      aria-controls="v-pills-goal"
                      aria-selected="false"
                    >
                      Our Aim
                    </a>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center">
                  <div
                    className="tab-content ftco-animate"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-whatwedo"
                      role="tabpanel"
                      aria-labelledby="v-pills-whatwedo-tab"
                    >
                      <div>
                        <h2 className="mb-4">We Offer High Quality Services</h2>
                        <p>
                          our vision is to be the best preferred enhanced
                          acupuncture therapy designed to meet today’s and
                          tomorrow’s healthcare needs.
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-mission"
                      role="tabpanel"
                      aria-labelledby="v-pills-mission-tab"
                    >
                      <div>
                        <h2 className="mb-4">To Accomodate All Patients</h2>
                        <p>
                          our mission is to offer first-class treatments in-line
                          with international standards, combining the ancient
                          methodology with modern technology.
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-goal"
                      role="tabpanel"
                      aria-labelledby="v-pills-goal-tab"
                    >
                      <div>
                        <h2 className="mb-4">Help Our Customers Needs</h2>
                        <p>
                          Our aim is to showcase acupuncture as a powerful
                          compliment to Western medicine and an effective method
                          in the field of healthcare prevention.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section-2">
        <div className="container-wrap">
          <div className="row d-flex no-gutters">
            <div
              className="col-md-6 img"
              style={{ backgroundImage: `url(${bg2})` }}
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
                      At Ansaar Clinic, our team of well-experienced doctors is
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
                      At Ansaar Clinic, we are dedicated to providing our
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
                      At Ansaar Clinic, we understand that comfort is an
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

      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-2">Testimony</h2>
              <span className="subheading">Our Happy Customer Says</span>
            </div>
          </div>
          <div className="row justify-content-center ftco-animate">
            <div className="col-md-8">
              <div className="carousel-testimony owl-carousel ftco-owl">
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${bg3})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">
                        I recently visited Ansaar Clinic for acupuncture and
                        hijama treatments, and I am so grateful for the
                        experience. From the moment I walked in, I was welcomed
                        by the warm and knowledgeable staff who put me at ease
                        right away.
                      </p>
                      <p className="name">Name</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${bg4})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">
                        I would highly recommend Ansaar Clinic to anyone seeking
                        acupuncture and hijama treatments. The combination of
                        expert care, high-quality facilities, and a comfortable
                        environment make it the perfect place for anyone looking
                        to improve their health and well-being.
                      </p>
                      <p className="name">Name</p>
                      <span className="position">Interface Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${bg5})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">
                        What I appreciated the most about my experience at
                        Ansaar Clinic was the level of care and attention I
                        received from the staff. They took the time to listen to
                        my concerns, answer my questions, and provide emotional
                        support. They were truly dedicated to helping me achieve
                        optimal health and wellness.
                      </p>
                      <p className="name">Name</p>
                      <span className="position">UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${bg3})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">
                        The acupuncture treatments were effective and pain-free,
                        providing me with relief from my chronic pain. The
                        hijama therapy was also incredibly helpful, providing me
                        with a sense of rejuvenation and increased energy.
                      </p>
                      <p className="name">Name</p>
                      <span className="position">Web Developer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${bg3})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left"></i>
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5">
                        I recently visited Ansaar Clinic for acupuncture and
                        hijama treatments, and I couldn't be happier with my
                        experience. From the moment I walked in, I was greeted
                        by a friendly and professional staff, who made me feel
                        comfortable and at ease.
                      </p>
                      <p className="name">Name</p>
                      <span className="position">System Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: `url(${bg3})` }}
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
    </div>
  );
}
