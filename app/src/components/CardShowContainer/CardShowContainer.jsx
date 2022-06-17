import "./CarShowContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { arrowToLeft, arrowToRight } from "../../assets/assetsIndex";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const CardShowContainer = () => {
  const bars = useSelector((state) => state.bars.bars);
  const [current, setCurrent] = useState(0);

  const [mobile, setMobile] = useState({
    matches: window.innerWidth > 976 ? false : true,
  });
  
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 976px)");
    mql.addEventListener("change", resize);
    
    function resize(e) {
      console.log("matches",e.matches);
      if (e.matches) {
        // If media query matches
        setMobile({matches:true});
        
      } else {
        setMobile({matches:false});
        
      }
    }
    return () => {
      mql.removeEventListener("change", resize);
    };
  }, []);

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
    if(lengthBars%2==0){
      setCurrent(current >= lengthBars -2  ? 0 : current + 2);
    }else{
      setCurrent(current === lengthBars -1  ? 0 : current + 2);
    }

    
  };

  const prevSlide = () => {
    if(current==1){
      setCurrent( lengthBars-1);
    }else{
      setCurrent(current <= 0 ? lengthBars-1  : current - 2);
    }
    
    
  };
  if (!Array.isArray(bars) || bars.lengthBares <= 0) {
      return null;
  }
  
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
          mobile.matches ? (
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
