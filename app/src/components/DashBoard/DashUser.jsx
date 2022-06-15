
import { useSelector } from "react-redux";
const DashUser= ()=> {
    const userData= useSelector ( (state)=>state.user.data)
     console.log(userData); 
    const allBars = useSelector ( (state)=>state.bars.bars)
    console.log(allBars);
    
    return ( 
        <table>
      <tbody>
      <tr>
          <th>Bar</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Visitantes</th>
          <th>Cancelar reserva </th>
      </tr>
      
        { userData?
          userData.my_reserve.map((reserva,index)=>
           <tr key={index}> 
            <td>{reserva.idBar?allBars.find(bar => bar._id==reserva.idBar).name :"me falta"}</td>
            <td>{reserva.date?reserva.date:"me falta"}</td>
            <td>{reserva.time?reserva.time:"me falta"}</td> 
           <td>{reserva.visitors}</td> 
           <th> <button>Cancelar reserva</button> </th> 
          </tr>        )    : <>estoy </>
        }
    
    </tbody>
  
    </table>
     );
}

export default DashUser ;

