import React,{useState,useEffect} from "react";


import  DashBar  from "../components/DashBoard/DashBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Chart  from "../components/DashBoard/Chart";
const DashBoardBar = () => {
  const [infoBar,setInfoBar] = useState({}) ; 
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector((state)=> state.user.data)
  console.log(data);
  /* console.log(infoBar);  */
  const {id} = useParams();
  console.log(id); 
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
  console.log(infoBar==true)
  if(isLoading){
    return(
      <>estoy cargando</>
    )
  }
  return (<>
  
  <Chart info={infoBar}></Chart>
  <DashBar info={infoBar}/>
  
    </>);
};

export default DashBoardBar;
