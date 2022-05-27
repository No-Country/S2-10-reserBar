import React from "react";
import "./HomeContainer.css";
import BannerSlider from "../BannerSlider/BannerSlider"
import { CardShowContainer } from "../CardShowContainer/CardShowContainer";

const HomeContainer = () => {
  return (
    <div className="home">
    
      <BannerSlider/>
    </div>
  );
};

export default HomeContainer;
