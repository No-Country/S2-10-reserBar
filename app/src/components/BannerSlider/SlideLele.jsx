import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./BannerSlider.css";

const SlideLele = ({ images }) => {
    const zoomInProperties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 1.4,
    };
    return (
        <div className="image">
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} className="sliderLele">
                        <img className="imgLele"
                            style={{ objectFit: "cover",  width: "100%", }}
                            src={each.path}
                        />
                    </div>
                ))}
            </Zoom>
        </div>
    );
};
export default SlideLele;
