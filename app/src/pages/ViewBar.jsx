import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import ImageSlider from "../components/ImageSlider/ImageSlider"
import BarNav from "../components/BarNav/BarNav"
import { useParams } from 
"react-router-dom";
import { ReserveForm } from "../components/ReserveForm/ReserveForm";

const ViewBar = () => {
   const [infoBar,setInfoBar] = useState({}) ; 
  /* console.log(infoBar);  */
  const {id} = useParams();
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect (() => {
    fetch(`https://reserbar-api.herokuapp.com/api/bares/${id}`, requestOptions)
      .then(response => response.json() )
      .then(response => setInfoBar(response.bares))
      .catch(error => console.log('error', error)); 
      
  }, [])
  /*  */
  
  
  

  return (
      <>
        
        <ImageSlider ImageProps={infoBar.photos} namePro={infoBar.name}  />
    
        <BarNav description={infoBar}/>

        
    </> 
  )
};

export default ViewBar;