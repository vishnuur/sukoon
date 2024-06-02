import React from "react";
import PhotoAlbum from "react-photo-album";
import Slider from "react-slick";
import carousel1 from "../../assets/images/bg_1.jpg";
import gallery1 from "../../assets/images/gallery/1.jpg";
import gallery2 from "../../assets/images/gallery/2.jpg";
import gallery3 from "../../assets/images/gallery/3.jpg";
import gallery4 from "../../assets/images/gallery/4.jpg";
import gallery5 from "../../assets/images/gallery/5.jpg";
import gallery6 from "../../assets/images/gallery/6.jpg";
import gallery7 from "../../assets/images/gallery/7.jpg";
import gallery8 from "../../assets/images/gallery/8.jpg";
import { Link } from "react-router-dom";

export default function GalleryScreen() {
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
  const photos = [
    { src: gallery1, width: 800, height: 600 },
    { src: gallery2, width: 1600, height: 900 },
    { src: gallery3, width: 800, height: 600 },
    { src: gallery4, width: 1600, height: 900 },
    { src: gallery5, width: 800, height: 600 },
    { src: gallery6, width: 1600, height: 900 },
    { src: gallery7, width: 800, height: 600 },
    { src: gallery8, width: 1600, height: 900 },
  ];
  return (
    <div>
      {" "}
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
                    <span>Services</span>
                  </p>
                  <h1
                    className="mb-3"
                    data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                  >
                    Gallery
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
}
