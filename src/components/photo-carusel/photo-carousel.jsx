import React from "react";
import Slider from "react-slick";
import { Photos } from "./inside";

import cls from "./photo-carousel.module.scss";

const PhotoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <>
      <section id="carousel" className={cls.wrapper}>
        <h4 className={cls.title}>Oliy Talim muassasalari</h4>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {Photos.map((item, idx) => (
              <div key={idx} className={cls["img-container"]}>
                <img className={cls.img} src={item} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default PhotoCarousel;
