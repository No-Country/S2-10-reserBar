import React from "react";
import { useLocation } from "react-router-dom";
import ImageSlider from "../components/ImageSlider/ImageSlider"
import BarNav from "../components/BarNav/BarNav"

const ViewBar = () => {
  let infoBar = useLocation(); 
  console.log(infoBar)

  return (
      <>
    
        <ImageSlider ImageProps={infoBar.state.bar.photos} namePro={infoBar.state.bar.name}  />
    
        <BarNav description={[infoBar.state.bar]}

        />
        
    </> 
  )
};

export default ViewBar;