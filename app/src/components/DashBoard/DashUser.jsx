import { useSelector } from "react-redux";
import "./DashUser.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { traerUsuario } from "../../store/actions/usersActions";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const DashUser = () => {
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.user.token);
  const allBars = useSelector((state) => state.bars.bars);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const eliminaReservar = (date, idBar) => {
    var config = {
      method: "put",
      url: `https://reserbar-api.herokuapp.com/api/bares/${idBar}/unreserve`,
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
    <div className="tablaUserReservas">
      {userData.my_reserve == 0 ? (
        <> </>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Bar</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Visitantes</th>
              <th>Cancelar reserva </th>
            </tr>

            {userData.my_reserve.map((reserva, index) => (
              <tr key={index}>
                <td>
                  {reserva.idBar
                    ? allBars.find((bar) => bar._id == reserva.idBar).name
                    : "No esta disponible"}
                </td>
                <td>{reserva.date ? reserva.date : "No esta disponible"}</td>
                <td>{reserva.time ? reserva.time : "No esta disponible"}</td>
                <td>{reserva.visitors}</td>
                <th>
                  {" "}
                  <button
                    className="reservationButton-dashboard"
                    onClick={(e) =>
                      eliminaReservar(reserva.date, reserva.idBar)
                    }
                  >
                    Cancelar reserva
                  </button>{" "}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DashUser;
