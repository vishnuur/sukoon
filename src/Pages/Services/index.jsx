import React from "react";
import Slider from "react-slick";
import carousel1 from "../../assets/images/acupuncture-header-1920x481-v2.jpg";
import painRelief from "../../assets/images/Icons/Pain Relief.png";
import anxiety from "../../assets/images/Icons/Stress and Anxiety.png";
import womensHealth from "../../assets/images/Icons/Women's Health.png";
import digestiveIssue from "../../assets/images/Icons/Digestive Issues.png";
import detox from "../../assets/images/Icons/Ditoxificaion.png";
import therapy from "../../assets/images/Icons/Mind Therapy.png";
import steamBath from "../../assets/images/Icons/Steam Bath.png";
import addiction from "../../assets/images/Icons/addiction.png";
import bg1 from "../../assets/images/bg_1.jpg";
import { Link } from "react-router-dom";

export default function Services() {
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
                    <span>Services</span>
                  </p>
                  <h1
                    className="mb-3"
                    data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                  >
                    Our Service Keeps you Smile
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <section className="ftco-section">
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
                  <img src={digestiveIssue} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Digestive Issues</h3>
                  <p>
                    We can help you relieve IBS and other digestive issues. We
                    use an all natural approach to relieving your symptoms
                    without having to give up healthy and tasty foods. Book your
                    acupuncture sessions with us.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={detox} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Ditoxificaion</h3>
                  <p>
                    According to traditional Chinese medicine, acupuncture is
                    believed to help remove toxins from the body by balancing
                    the body's energy. The insertion of needles into specific
                    points on the body is thought to help stimulate the body's
                    natural detoxification processes, such as the liver and
                    kidneys, which play a key role in removing toxins from the
                    body.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={therapy} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Mind Therapy</h3>
                  <p>
                    Mind therapy, also known as psychotherapy or talk therapy,
                    is a form of treatment that involves talking to a mental
                    health professional about your thoughts, feelings, and
                    behaviors.The goal of mind therapy is to help individuals
                    better understand themselves, their relationships, and the
                    world around them in order to improve mental health and
                    overall well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={steamBath} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Steam Bath</h3>
                  <p>
                    A steam bath, also known as a sauna, is a small room or
                    structure that is heated to a high temperature, typically
                    between 150-190°F (65-88°C), and filled with steam. The heat
                    and steam are intended to cause the body to sweat, which is
                    believed to have a number of health benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-self-stretch ftco-animate">
              <div className="media block-6 services d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={addiction} alt="icon name" />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Addiction</h3>
                  <p>
                    Acupuncture is typically used as a complementary therapy to
                    other addiction treatments, such as counseling and
                    medication-assisted treatment. The specific acupuncture
                    points used and the treatment protocol may vary depending on
                    the type of addiction and the individual patient's needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="ftco-section ftco-counter img"
        id="section-counter"
        style={{ backgroundImage: ` url(${bg1})` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-3 aside-stretch py-5">
              <div className=" heading-section heading-section-white ftco-animate pr-md-4">
                <h2 className="mb-3">Achievements</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
            <div className="col-md-9 py-5 pl-md-5">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="14">
                        0
                      </strong>
                      <span>Years of Experience</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="4500">
                        0
                      </strong>
                      <span>Qualified Dentist</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="4200">
                        0
                      </strong>
                      <span>Happy Smiling Customer</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="text">
                      <strong className="number" data-number="320">
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
      </section> */}

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <h2 className="mb-3">Our Best Pricing</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
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
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text </li>
                  <li>Sample Text</li>
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
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
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
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
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
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
                  <li>Sample Text</li>
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
    </div>
  );
}
