import { useState, useEffect } from "react";
import * as API from "../../services/bares.js";
import "./ImageSlider.css";

const ImageSlider = () => {
    const [bares, setBares] = useState([]);
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const promiseBar = API.getAllBares();
        promiseBar.then((res, rej) => {
            setBares(res);
        });
    }, []);

    const lengthBares = bares.length;
    const nextSlide = () => {
        setCurrent(current === lengthBares - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? lengthBares - 1 : current - 1);
    };

    console.log(current);
    if (!Array.isArray(bares) || bares.lengthBares <= 0) {
        return null;
    }
    console.log(bares);
    return (
        <section className="slider">
            {/* <button className="left-arrow" onClick={prevSlide}>
                {" "}
                letf{" "}
            </button> */}

            {bares.map((bar, index) => (
                <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                >
                    <button className="left-arrow" onClick={prevSlide}>
                        {" "}
                        letf{" "}
                    </button>
                    <div className="img-container">
                        {index === current && (
                            <img
                                src={bar.photos[0]}
                                alt="bar image"
                                className="image"
                            />
                        )}
                    </div>
                    <button className="right-arrow" onClick={nextSlide}>
                        {" "}
                        right{" "}
                    </button>
                </div>
            ))}
            {/* <button className="right-arrow" onClick={nextSlide}>
                {" "}
                right{" "}
            </button> */}
        </section>
    );
};

export default ImageSlider;
