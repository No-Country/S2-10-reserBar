import { useState, useEffect } from "react";
import * as API from "../../services/bares.js";

const ImageSlider = () =>{
    const [bares, setBares] = useState([]);

  useEffect(() => {
   /*  API.getAllBares().then(setBares(res.data)).catch(console.log); */
   /* setBares(API.getAllBares() ) */
   /* console.log(API.getAllBares()) */
   const promiseBar= API.getAllBares()
    promiseBar.then( (res,rej)=>{ setBares(res) } )
     
  }, []);
    return(
        <>
        <div>prueba</div>
        {bares.map((bar)=>(
            <div> soy un bar {bar.name} </div> 
            
        )
        )}
        </>

    )

};

export default ImageSlider;