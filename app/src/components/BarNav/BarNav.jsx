import "./BarNav.css"
const BarNav = ({description}) => {
    console.log(description);
    
    return (
      <>

      <div>
        <ul className="BarOptions"  >
          <li>
            <button> 
                Descripción
            </button>
          </li>
          <li>
            <button> 
               Reservas  
            </button>
          </li>
        
          <li>
            <button> 
                Menu 
            </button>
              
          
          </li>
          <li>
                <button> 
                    Reseñas 
                </button>                  
          </li>
        </ul>
      </div> 
      
    
        <section className="BarInfo" >
            
            <article className="containerCard">
              {description.description}
              <div className="cardLocal">
                <p> {description.location }  </p>
                <p> {description.city } </p>
                <p>  {description.country } </p>
                <p> {description.state } </p>
              </div>
            </article>
            
        </section>
        
          
      
      </>
    )
  };
  
export default BarNav;
