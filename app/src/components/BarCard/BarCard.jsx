import "./BarCard.css";
import { NavLink } from "react-router-dom";
import { veganStamp } from "../../assets/assetsIndex";
import { ImLocation2 } from "react-icons/im";

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
        <p>
          <ImLocation2 />
          {bar.location}
        </p>
        <NavLink to={`/${bar._id}`} className="reservationButton">
          <button>Reservar</button>
        </NavLink>
      </div>
    </div>
  );
};
