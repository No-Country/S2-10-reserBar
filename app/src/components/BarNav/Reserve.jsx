import { useParams } from "react-router";
import axios from "axios";
import "./Reserve.css";
import { useEffect, useState } from "react";
import { ReserveLine } from "./ReserveLine";

export const Reserve = (props) => {
  const id_bar = useParams().id;
  const authToken = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id");

  const [date, setDate] = useState(" ");
  const [time, setTime] = useState(" ");
  const [visitors, setVisitors] = useState(Number);
  const [reserves, setReserves] = useState(props.props.reserves)
  const [userReserves, setUserReserves] = useState([])


  useEffect(()=>{
    const resUsr = reserves.filter(reserve => reserve.user_id == user_id)
    setUserReserves(resUsr)
    },[])






const actualDate = new Date()
let today = actualDate.getFullYear()+'-'+(actualDate.getMonth()+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+'-'+actualDate.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

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
        console.log(response.data);
        // alert("Reserva para " + visitors + " personas el dia: " + date + " a las " + time);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  
  // useEffect(() => {
  //   console.log(date);
  //   console.log(time);
  //   console.log(visitors);
  // }, [date, visitors, time]);

  return (
    <div className="reserveBox">
      

      {date == " " ? (
        <>
          <label>Cuando nos visitaran? </label>
          <input type="date" className="reserveInput" onChange={(e) => setDate(e.target.value)} />
        </>
      ) : (
        <></>
      )}
      {time == " " && date != " " ? (
        <>
          <label>Elige un horario </label>
          <select className="reserveInput" name="time" onChange={(e) => setTime(e.target.value)}>
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
      
        <button onClick={(e) => reservar()}>Reservar</button>

      {userReserves ? 
        (userReserves.map((reserve)=>
        // <div className="userReserves">
        <ReserveLine reserva={reserve} id_bar={id_bar}/>       
        // <div/>
        )) : (<></>)}
  
    </div>
  );
};
