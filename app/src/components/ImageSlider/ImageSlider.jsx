import { useState, useEffect } from "react";

import "./ImageSlider.css";
import { arrowToLeft, arrowToRight } from "../../assets/assetsIndex";

const ImageSlider = ({ImageProps,namePro}) => {
    const arrayPhotos = ImageProps;
    const [current, setCurrent] = useState(0);
    
    //validation: fix the render app without turn the server 
    let lengthPhotos="" 
    {arrayPhotos ? lengthPhotos = arrayPhotos.length : lengthPhotos=0 }
    const nextSlide = () => {
        setCurrent(current === lengthPhotos - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? lengthPhotos - 1 : current - 1);
    };

    
    if (!Array.isArray(arrayPhotos) || arrayPhotos.lengthPhotos <= 0) {
        return null;
    }
    
    return (
        <section className="slider">
           

            {arrayPhotos.map((photo, index) => (
                <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                >
                    <h2 className="BarTitle">{namePro}</h2>
                    <img
                        src={arrowToLeft}
                        alt="leftArrow"
                        className="left-arrow"
                         onClick={prevSlide}
                    />
                    <div className="img-container">
                        {index === current && (
                            <img
                                src={photo}
                                alt="bar image"
                                className="image"
                            />
                        )}
                    </div>
                    <img
                    src={arrowToRight}
                    alt="rightArrow"
                    className="right-arrow"
                    onClick={nextSlide}
          />
                </div>
            ))}
            
        </section>
    );
};

export default ImageSlider;
