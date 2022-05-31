import "./CarShowContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { arrowToLeft, arrowToRight } from "../../assets/assetsIndex";
import { useSelector } from "react-redux";

export const CardShowContainer = () => {
  const bars = useSelector((state) => state.bars.bars);
  let tresBares = [];
  {
    bars ? (tresBares = bars.slice(2, 5)) : (tresBares = []);
  }

  return (
    <section className="cardShowContainer">
      <h3 className="baresPopulares">Los bares más populares</h3>
      <div className="cardShow">
        {/* <img src={arrowToLeft} alt="leftArrow" className="arrow" /> */}
        {tresBares ? (
          tresBares.map((bar) => <BarCard bar={bar} key={bar._id} />)
        ) : (
          <></>
        )}

        {/* <img src={arrowToRight} alt="rightArrow" className="arrow" /> */}
      </div>
    </section>
  );
};
