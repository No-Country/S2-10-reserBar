import "./BarNav.css"
import {useState,useParams} from "react";
import "./DescriptionComp"
import axios from "axios";
import { Reserve } from "./Reserve";
import {menu} from "../../assets/assetsIndex"

const BarNav = ({description}) => {
    const [options,setOptions]= useState(0);
    /* const params = useParams(); */
    const params = description._id;
    let component = null;
    const email = "lele@lele.com";
    const password = 123456;
const reserva = async () => {
    
      await axios
     .put(`http://localhost:3005/api/bares/${params}/reserve`, {
       email,
       password,
     })
     .then((res) => {
       setTokenUsuario(res.data.token);
       console.log(tokenUsuario);
     })
     .catch((err)  => console.log(err));
   };

    if (options==0) {
      component = <article className="containerCard">
      {description.description}
    <div className="cardLocal">
      <p> {description.location }  </p>
      <p> {description.city } </p>
      <p>  {description.country } </p>
      <p> {description.state } </p>
    </div>
</article> ;
    } if(options==1) {
      component = 
      <section className="containerCard" >
        <Reserve/>
      {/* <div className="cardLocal">
      <p>{description.capacity}</p>
      <button onClick={reserva}>Reservar</button>
      <button>Cancelar reserva</button>
      </div> */}
    </section>  
    }if(options==2){
        component=<section className="containerCard">
          <img className="menuImg" src={menu} alt="menu"  />
        </section>
    }

    

    return (
      <>

      <div>
        <ul className="BarOptions"  >
          <li>
            <button onClick={e => setOptions(0)}  > 
                Descripción
            </button>
          </li>
          <li>
            <button onClick={e => setOptions(1)}> 
               Reservas  
            </button>
          </li>
        
          <li>
            <button onClick={e => setOptions(2)} > 
                Menu 
            </button>
              
          
          </li>
          
        </ul>
      </div> 
      
    
        <section className="BarInfo" >
            
            {component}
           
        </section>
        
          
      
      </>
    )
  };
  
export default BarNav;
