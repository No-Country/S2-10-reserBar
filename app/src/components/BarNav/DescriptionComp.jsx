import "./BarNav.css"
/* import {useState,useParams} from "react"; */
const DescriptionComp = ({description}) => {
    
      



    return (
    
  <article className="containerCard">
        {description.description}
      <div className="cardLocal">
        <p> {description.location }  </p>
        <p> {description.city } </p>
        <p>  {description.country } </p>
        <p> {description.state } </p>
      </div>
  </article>
          
      
     
    )
  };
  
export default DescriptionComp;

