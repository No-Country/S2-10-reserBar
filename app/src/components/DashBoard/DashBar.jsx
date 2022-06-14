import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "./DashBar.css"

const DashBar = (infoBar) => {
  console.log(infoBar.info)
  return (
    <table>
      <tbody>
      <tr>
          <th>Usuario</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Visitantes</th>
      </tr>
      
        { infoBar.info?
          infoBar.info.reserves.map((reserva,index)=>
           <tr key={index}> 
            <td>{reserva.name?reserva.name:"me falta"}</td>
            <td>{reserva.date?reserva.date:"me falta"}</td>
            <td>{reserva.time?reserva.time:"me falta"}</td> 
           <td>{reserva.visitors}</td>  
          </tr>        )    : <>estoy </>
        }
    
    </tbody>
  
    </table>
  );
};

export default DashBar;
