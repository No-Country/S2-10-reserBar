import React,{useState,useEffect} from "react";
import  ApexChart  from "../components/DashBoard/ApexChart";
import DashUser from "../components/DashBoard/DashUser";
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
       fetch(`http://localhost:3005/api/bares/${id}`, requestOptions)
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
  {/* <ApexChart info={infoBar}/> */}
  <Chart></Chart>
  <DashBar info={infoBar}/>
  {/* <DashUser/> */}
    </>);
};

export default DashBoardBar;