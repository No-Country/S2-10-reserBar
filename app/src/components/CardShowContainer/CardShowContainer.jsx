import "./CarShowContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { arrowToLeft, arrowToRight } from "../../assets/assetsIndex";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const CardShowContainer = () => {
  const bars = useSelector((state) => state.bars.bars);
  const [current, setCurrent] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia(`(max-width: 768px)`);
    console.log(match);
    setMobile(match.matches);
  }, [mobile]);

  let lengthBars = "";
  {
    bars ? (lengthBars = bars.length) : (lengthBars = 0);
  }
  let tresBares = [];
  let unBar = [];

  {
    bars ? (tresBares = bars.slice(current, current + 3)) : (tresBares = []);
  }

  {
    bars ? (unBar = bars.slice(current, current + 1)) : (unBar = []);
  }

  const nextSlide = () => {
    setCurrent(current === lengthBars - 1 ? 0 : current + 2);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? lengthBars - 1 : current - 2);
  };
  /* if (!Array.isArray(bars) || bars.lengthBares <= 0) {
      return null;
  } */

  return (
    <section className="cardShowContainer">
      <h3 className="baresPopulares">Los bares más populares</h3>
      <div className="cardShow">
        <img
          src={arrowToLeft}
          alt="leftArrow"
          className="arrow"
          onClick={prevSlide}
        />

        {unBar || tresBares ? (
          mobile ? (
            unBar.map((bar) => <BarCard bar={bar} key={bar._id} />)
          ) : (
            tresBares.map((bar) => <BarCard bar={bar} key={bar._id} />)
          )
        ) : (
          <></>
        )}

        <img
          src={arrowToRight}
          alt="rightArrow"
          className="arrow"
          onClick={nextSlide}
        />
      </div>
    </section>
  );
};
