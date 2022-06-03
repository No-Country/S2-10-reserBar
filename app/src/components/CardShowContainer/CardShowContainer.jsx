import "./CarShowContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { arrowToLeft, arrowToRight } from "../../assets/assetsIndex";
import { useSelector } from "react-redux";
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
  
  


    const prevSlide = () => {
        setCurrent(current === 0 ? lengthBars - 1 : current - 2);
    };
   
  console.log(current)

  return (
    <section className="cardShowContainer">
      <h3 className="baresPopulares">Los bares más populares</h3>
      <div className="cardShow">

        <img src={arrowToLeft} alt="leftArrow" className="arrow" onClick={prevSlide}  />

        {tresBares ? (
          tresBares.map((bar) => <BarCard bar={bar} key={bar._id} />)
        ) : (
          <></>
        )}


        <img src={arrowToRight} alt="rightArrow" className="arrow" onClick={nextSlide} />

      </div>
    </section>
  );
};


