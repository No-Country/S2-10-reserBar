import { useParams } from "react-router";
import axios from "axios";
import "./Reserve.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { traerUsuario } from "../../store/actions/usersActions";

export const Reserve = () => {
  const id_bar = useParams().id;
  const authToken = useSelector((state) => state.user.token)
  const user_id = useSelector((state) => state.user.data._id)

  const [date, setDate] = useState(" ");
  const [time, setTime] = useState(" ");
  const [visitors, setVisitors] = useState(Number);
  const dispatch = useDispatch();
  

  const reservar = () => {
    var config = {
      method: "put",
      url: `https://reserbar-api.herokuapp.com/api/bares/${id_bar}/reserve`,
      headers: { Authorization: `Bearer ${authToken}` },
      data: {
        user: user_id,
        "date":date,
        "visitors":visitors,
        "time":time
      },
    };

    axios(config)
      .then(function (response) {
        
        dispatch(traerUsuario(authToken,user_id))
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const eliminaReservar = () => {
    var config = {
      method: "put",
      url: `https://reserbar-api.herokuapp.com/api/bares/${id_bar}/unreserve`,
      headers: { Authorization: `Bearer ${authToken}` },
      data: {
        user: user,
        date:"date",
        email:"andresrubio@reserbar.com",
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
    <div className="reserveBox">
      {date == " " ? (
        <>
          <label>Cuando nos visitaran? </label>
          <input type="date" onChange={(e) => setDate(e.target.value)} />
        </>
      ) : (
        <></>
      )}
      {time == " " && date != " " ? (
        <>
          <label>Elige un horario </label>
          <select name="time" onChange={(e) => setTime(e.target.value)}>
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
          <label>Cuantos nos visitan </label>
          <input
            type="number"
            min="0"
            max="10"
            onChange={(e) => setVisitors(e.target.value)}
          />
        </>
      ) : (
        <></>
      )}

      <button onClick={(e) => reservar()}>Reservar</button>
      <button onClick={(e) => eliminaReservar()}>Cancelar reserva</button>
    </div>
  );
};
