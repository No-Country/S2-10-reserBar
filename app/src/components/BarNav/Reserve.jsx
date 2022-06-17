import { useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Reserve.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { traerUsuario } from "../../store/actions/usersActions";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Reserve = (props) => {
  const id_bar = useParams().id;
  const authToken = useSelector((state) => state.user.token);
  const userData = useSelector((state) => state.user.data);
  const [date, setDate] = useState(" ");
  const [time, setTime] = useState(" ");
  const [visitors, setVisitors] = useState(Number);
  const todayNum = new Date();

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  let today =
    todayNum.getFullYear() +
    "-" +
    (todayNum.getMonth() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    "-" +
    todayNum
      .getDate()
      .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const dispatch = useDispatch();

  const reservar = () => {
    var config = {
      method: "put",
      url: `https://reserbar-api.herokuapp.com/api/bares/${id_bar}/reserve`,
      headers: { Authorization: `Bearer ${authToken}` },
      data: {
        user: userData._id,
        date: date,
        visitors: visitors,
        time: time,
      },
    };

    axios(config)
      .then(function (response) {
        dispatch(traerUsuario(authToken, userData._id));
        setVisitors(" "),
          setDate(" "),
          setTime(" "),
          setMessage("Reserva registrada correctamente  ");
        setOpen(true);
        setSeverity("success");
        handleClick();
      })
      .catch(function (error) {
        console.log(error);
        setMessage("Error from catch");
        setOpen(true);
        setSeverity("error");
      });
  };

  const eliminaReserva = (date) => {
    var config = {
      method: "put",
      url: `https://reserbar-api.herokuapp.com/api/bares/${id_bar}/unreserve`,
      headers: { Authorization: `Bearer ${authToken}` },
      data: {
        user: userData._id,
        date: date,
        email: userData.email,
      },
    };

    axios(config)
      .then(function (response) {
        dispatch(traerUsuario(authToken, userData._id));
        setMessage(JSON.stringify(response.data));
        setOpen(true);
        setSeverity("success");
        handleClick();
      })
      .catch(function (error) {
        console.log(error);
        setMessage("Error from catch");
        setOpen(true);
        setSeverity("error");
      });
  };

  return (
    <div className="reserveBox">
      {date == " " ? (
        <>
          <h3>Cuando nos visitaran? </h3>
          <input
            type="date"
            min={today}
            className="reserveInput"
            onChange={(e) => setDate(e.target.value)}
          />
        </>
      ) : (
        <></>
      )}
      {time == " " && date != " " ? (
        <>
          <h3>Elige un horario </h3>
          <select
            className="reserveInput"
            name="time"
            onChange={(e) => setTime(e.target.value)}
          >
            <option value=" "></option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
            <option value="23:00">23:00</option>
          </select>
        </>
      ) : (
        <></>
      )}
      {time != " " ? (
        <>
          <h3>Cuantos nos visitan </h3>
          <input
            className="reserveInput"
            type="number"
            min="0"
            max="10"
            onChange={(e) => setVisitors(e.target.value)}
          />
        </>
      ) : (
        <></>
      )}
      {visitors != " " ? (
        <button onClick={(e) => reservar()}>Reservar</button>
      ) : (
        <button disabled>Reservar</button>
      )}
      {userData.my_reserve.filter((reserve) => reserve.idBar == id_bar)
        .length == 0 ? (
        <></>
      ) : (
        <table className="reserveList">
          <tbody>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Visitantes</th>
              <th>Estado</th>
            </tr>
            {userData.my_reserve
              .filter((reserve) => reserve.idBar == id_bar)
              .map((reserva, index) => (
                <tr key={index}>
                  <td>{reserva.date ? reserva.date : "No esta disponible"}</td>
                  <td>{reserva.time ? reserva.time : "No esta disponible"}</td>
                  <td>{reserva.visitors}</td>
                  <th className="reserveState">
                    {todayNum >= new Date(reserva.date) ? (
                      <>
                        <span className="finishedReserve"> Finalizada</span>
                      </>
                    ) : (
                      <>
                        <p className="confirmReserve">Confirmada</p>
                        <a
                          onClick={(e) => eliminaReserva(reserva.date)}
                          className="deleteReserve"
                        >
                          Eliminar
                        </a>
                      </>
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
