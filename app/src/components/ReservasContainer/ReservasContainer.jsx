import "./ReservasContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { useSelector } from "react-redux";

export const ReservasContainer = () => {
  const bars = useSelector((state) => state.bars.bars);

  return (
    <section className="ReservasContainer">
      <h3 className="Título">Reservar</h3>
      <div className="contenedorCards">
        {/* <img src={arrowToLeft} alt="leftArrow" className="arrow" /> */}
        {bars ? bars.map((bar) => <BarCard bar={bar} key={bar._id} />) : <></>}

        {/* <img src={arrowToRight} alt="rightArrow" className="arrow" /> */}
      </div>
    </section>
  );
};
