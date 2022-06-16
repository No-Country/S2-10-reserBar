import { useSelector } from "react-redux";
import "./DashUser.css"
import axios from "axios";
import {useState,useEffect} from "react";
import {useDispatch} from "react-redux";
import { traerUsuario } from "../../store/actions/usersActions";
const DashUser = () => {
  
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.user.token);
  const allBars = useSelector((state) => state.bars.bars);
  
  
  
  
  

  const eliminaReservar = (date,idBar) => {
    
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
        dispatch(traerUsuario(authToken,userData._id))
        alert(JSON.stringify(response.data))
        
        ;
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="tablaUserReservas">
      <table>
        <tbody>
          <tr>
            <th>Bar</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Visitantes</th>
            <th>Cancelar reserva </th>
          </tr>

          {userData ? (
            userData.my_reserve.map((reserva, index) => (
             
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
                  <button className="reservationButton-dashboard" onClick={(e)=>eliminaReservar(reserva.date,reserva.idBar)}>Cancelar reserva</button>{" "}
               
                </th>
              </tr>
            ))
          ) : (
            <>estoy </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashUser;
