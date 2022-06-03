import "./BarNav.css"
const BarNav = (description) => {
    console.log(description)
    
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
              {description.description[0].description}
              <div className="cardLocal">
                <p> {description.description[0].location }  </p>
                <p> {description.description[0].city } </p>
                <p>  {description.description[0].country } </p>
                <p> {description.description[0].state } </p>
              </div>
            </article>
            
        </section>
        
          
      
      </>
    )
  };
  
export default BarNav;
