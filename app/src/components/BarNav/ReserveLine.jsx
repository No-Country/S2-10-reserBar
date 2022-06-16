import "./ReserveLine.css";
import axios from "axios";
import { useSelector } from "react-redux";


export const ReserveLine = (props) => {
  const authToken = useSelector((state) => state.user.token);
  const today = new Date();
  const reserveDay = new Date(props.reserva.date);

  var resultado = today >= reserveDay;
  const eliminaReservar = () => {
    var config = {
      method: "put",
      url: `https://reserbar-api.herokuapp.com/api/bares/${props.id_bar}/unreserve`,
      headers: { Authorization: `Bearer ${authToken}` },
      data: {
        user: props.reserva.user_id,
        date: props.reserva.date,
        email: props.reserva.email,
      },
    };
    <input
      id="effective-date"
      type="date"
      name="effective-date"
      minlength="1"
      maxlength="64"
      placeholder=" "
      autocomplete="nope"
      required="required"
    ></input>;

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="reserveDetail">
        <p>
          Reserva del {props.reserva.date} para {props.reserva.visitors}{" "}
          personas{" "}
        </p>
        <p>
          {resultado ? (
            <span className="finishedReserve"> Finalizada</span>
          ) : (
            <span className="confirmReserve">
              {" "}
              Confirmada{" "}
              <a onClick={(e) => eliminaReservar()} className="deleteReserve">
                Eliminar
              </a>
            </span>
          )}
        </p>
      </div>
    </>
  );
};
