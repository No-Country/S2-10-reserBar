import "./BarCard.css";
import { NavLink } from "react-router-dom";
import {veganStamp} from "../../assets/assetsIndex"

export const BarCard = (props) => {

  const bar = props.bar
  const vegan = true;

  return (
    <div className="barCard">
      <div
        className="imgCard"
        style={{ backgroundImage: `url(${bar.photos[0]})` }}
      >
        {vegan ? (<img src={veganStamp} alt="veganStamp" className="veganStamp"/>):(<></>)}
      </div>
      
      <div className="infoCard">
        <p>
          {bar.description}
        </p>
        <NavLink to={`/${bar._id}`} className="reservationButton">
        <button >

          Reservar
        
        </button>
        </NavLink>
      </div>
    </div>
  );
};
