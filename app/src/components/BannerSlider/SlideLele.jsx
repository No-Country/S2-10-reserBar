import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./BannerSlider.css";

const SlideLele = ({ images, nombreBar }) => {
    const zoomInProperties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 1.4,
    };
   
        return (
            <div className="image">
          {nombreBar ? <h2 className="BarTitle">{nombreBar}</h2> : null}
            
                <Zoom {...zoomInProperties}>
                    {images.map((each, index) => (
                        <div key={index} className="sliderLele">
                            <img
                                className="imgLele"
                                style={{ objectFit: "cover", width: "100%" }}
                                src={each}
                            />
                        </div>
                    ))}
                </Zoom>
            </div>
        );
   
};
export default SlideLele;