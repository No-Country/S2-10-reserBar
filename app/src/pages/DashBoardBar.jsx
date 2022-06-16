import React,{useState,useEffect} from "react";


import  DashBar  from "../components/DashBoard/DashBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Chart  from "../components/DashBoard/Chart";
const DashBoardBar = () => {
  const [infoBar,setInfoBar] = useState({}) ; 
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector((state)=> state.user.data)
  
  /* console.log(infoBar);  */
  const {id} = useParams();
   
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  useEffect  (  () => {
       fetch(`https://reserbar-api.herokuapp.com/api/bares/${id}`, requestOptions)
      .then(response => response.json() )
      .then(response => {setInfoBar(response.bares);
        setIsLoading(false); }
         )
      .catch(error => console.log('error', error)); 
      
  }, [])
  
  if(isLoading){
    return(
      <h2 style={{textAlign:"center"}}>Cargando...</h2>
    )
  }
  return (<>
  
  <Chart info={infoBar}></Chart>
  <DashBar info={infoBar}/>
  
    </>);
};

export default DashBoardBar;
