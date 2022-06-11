import "./BarNav.css"
import {useState,useParams} from "react";
const Reserve = ({description}) => {
    /* const [options,setOptions]= useState(0);
    console.log(options);
    const params = useParams(); */


    const reserva = async () => {
    
         await axios
        .post(`http://localhost:3005/api/bares/${params}/reserve`, {
          email,
          password,
        })
        .then((res) => {
          setTokenUsuario(res.data.token);
          console.log(tokenUsuario);
        })
        .catch((err)  => console.log(err));
      };

    
    
    fetch(`http://localhost:3005/api/bares/${params}/reserve`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      fetch("http://localhost:3005/api/bares/:id/unreserve", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    return (
     
    <article >
        {description.capacity}
        <button>Reservar</button>
        <button>Cancelar reserva</button>
      </article>   
          
      
     
    )
  };
  
export default Reserve;