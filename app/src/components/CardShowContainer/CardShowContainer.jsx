import "./CarShowContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { arrowToLeft, arrowToRight } from "../../assets/assetsIndex";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { useState } from "react";

export const CardShowContainer = () => {
  const bars = useSelector((state) => state.bars.bars);
  const [current, setCurrent] = useState(0);
  let lengthBars="" 
    {
      bars ? (lengthBars = bars.length) : lengthBars=0 
    }
  let tresBares = [];
  
  
  {
    bars ? ( tresBares = bars.slice(current, current+3)) : (tresBares = []);
  }

  const nextSlide = () => {
        setCurrent(current === lengthBars - 1? 0:  current + 2);
    };
<<<<<<< HEAD
=======

export const CardShowContainer = () => {
  const bars = useSelector((state) => state.bars.bars);
  let tresBares = [];
  {
    bars ? (tresBares = bars.slice(2, 5)) : (tresBares = []);
  }
>>>>>>> 9cc99a5 (Agrego redux y página de reservas)

    const prevSlide = () => {
        setCurrent(current === 0 ? lengthBars - 1 : current - 2);
    };
    /* if (!Array.isArray(bars) || bars.lengthBares <= 0) {
      return null;
  } */
  console.log(current)
=======

    const prevSlide = () => {
        setCurrent(current === 0 ? lengthBars - 1 : current - 2);
    };
   
  console.log(current)

>>>>>>> 696b4ee (card fixed issues)
  return (
    <section className="cardShowContainer">
      <h3 className="baresPopulares">Los bares más populares</h3>
      <div className="cardShow">
<<<<<<< HEAD
        <img src={arrowToLeft} alt="leftArrow" className="arrow" onClick={prevSlide}  />
=======
        {/* <img src={arrowToLeft} alt="leftArrow" className="arrow" /> */}
>>>>>>> 9cc99a5 (Agrego redux y página de reservas)
        {tresBares ? (
          tresBares.map((bar) => <BarCard bar={bar} key={bar._id} />)
        ) : (
          <></>
        )}

<<<<<<< HEAD
        <img src={arrowToRight} alt="rightArrow" className="arrow" onClick={nextSlide} />
=======
        {/* <img src={arrowToRight} alt="rightArrow" className="arrow" /> */}
>>>>>>> 9cc99a5 (Agrego redux y página de reservas)
      </div>
    </section>
  );
};

