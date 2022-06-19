import React from "react";
import "./HomeContainer.css";
// import BannerSlider from "../BannerSlider/BannerSlider"
import { CardShowContainer } from "../CardShowContainer/CardShowContainer";
import SlideLele from "../BannerSlider/SlideLele";
import imgData from "../BannerSlider/imgData";


const HomeContainer = () => {
  return (
    <div className="home">
    
      {/* <BannerSlider/> */}
      <SlideLele images={imgData}/>
    </div>
  );
};

export default HomeContainer;
