import "./BarNav.css";
import { useState, useParams } from "react";
import "./DescriptionComp";
import axios from "axios";
import { Reserve } from "./Reserve";
import { menu } from "../../assets/assetsIndex";
import { useSelector } from "react-redux";

const BarNav = ({ description }) => {
  const [options, setOptions] = useState(0);
  const authToken = useSelector((state) => state.user.token);
  /* const params = useParams(); */
  const params = description._id;
  let component = null;
  const email = "lele@lele.com";
  const password = 123456;
  const reserva = async () => {
    await axios
      .put(`https://reserbar-api.herokuapp.com/api/bares/${params}/reserve`, {
        email,
        password,
      })
      .then((res) => {
        setTokenUsuario(res.data.token);
        console.log(tokenUsuario);
      })
      .catch((err) => console.log(err));
  };
  if (options == 1 && authToken) {
    component = (
      <section className="containerCard">
         <Reserve props={description}/>
    
      </section>
    );
  } else {
    component = (
      <section className="containerCard" style={{ textAlign: "center" }}>
        <h3>Debes estar registrado para generar una reserva</h3>
      </section>
    );
  }

  if (options == 0) {
    component = (
      <article className="containerCard">
        <p>{description.description}</p>

        <div className="cardLocal">
          <p>
            {description.location}
            {",  "}
            {description.city}
            <br />
            {description.country}
            {",  "}
            {description.state}
          </p>
        </div>
      </article>
    );
  }

  if (options == 2) {
    component = (
      <section className="containerCard">
        <img className="menuImg" src={menu} alt="menu" />
      </section>
    );
  }

  return (
    <>
      <div>
        <ul className="BarOptions">
          <li>
            <button onClick={(e) => setOptions(0)}>Descripción</button>
          </li>
          <li>
            <button onClick={(e) => setOptions(1)}>Reservas</button>
          </li>

          <li>
            <button onClick={(e) => setOptions(2)}>Menu</button>
          </li>
        </ul>
      </div>

      <section className="BarInfo">{component}</section>
    </>
  );
};

export default BarNav;
