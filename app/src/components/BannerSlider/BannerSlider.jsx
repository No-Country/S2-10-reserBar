import { useState } from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import "./BannerSlider.css";
import { arrowToLeft, arrowToRight } from "../../assets/assetsIndex";

const BannerSlider = () => {
  const arrayBanners = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);

  let lengthBanners = arrayBanners.length;

  const nextSlide = () => {
    setCurrent(current === lengthBanners - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lengthBanners - 1 : current - 1);
  };

  if (!Array.isArray(arrayBanners) || arrayBanners.lengthBanners <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {arrayBanners.map((banner, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          <img
            src={arrowToLeft}
            alt="leftArrow"
            className="left-arrow"
            onClick={prevSlide}
          />
          <div className="img-container">
            {index === current && (
              <img src={banner} alt="banner image" className="image" />
            )}
          </div>
          <img
            src={arrowToRight}
            alt="rightArrow"
            className="right-arrow"
            onClick={nextSlide}
          />
        </div>
      ))}
      {/* <button className="right-arrow" onClick={nextSlide}>
                {" "}
                right{" "}
            </button> */}
    </section>
  );
};

export default BannerSlider;
