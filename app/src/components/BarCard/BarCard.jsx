import "./BarCard.css";
import { NavLink } from "react-router-dom";
import { veganStamp } from "../../assets/assetsIndex";

export const BarCard = (props) => {
  const bar = props.bar;

  return (
    <div className="barCard">
      <div
        className="imgCard"
        style={{ backgroundImage: `url(${bar.photos[0]})` }}
      >
        {bar.vegan ? (
          <img src={veganStamp} alt="veganStamp" className="veganStamp" />
        ) : (
          <></>
        )}
      </div>

      <div className="infoCard">
        <h3>{bar.name}</h3>
        <NavLink to={`/${bar._id}`} className="reservationButton">
          <button>Reservar</button>
        </NavLink>
      </div>
    </div>
  );
};
