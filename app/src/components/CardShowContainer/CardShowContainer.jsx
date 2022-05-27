import { useEffect, useState } from "react";
import * as API from "../../services/bares.js";
import "./CarShowContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { arrowToLeft, arrowToRight } from "../../assets/assetsIndex";

export const CardShowContainer = () => {
  const [bares, setBares] = useState([]);
  const [final, setFinal] = useState(3);
  const [initial, setInitial] = useState(0);

  const show = (init, end, array) => {
    let bar = [];
    for (let index = init; index < end; index++) {
      bar = [...bar, array[index]];
    }
    return bar;
  };

  useEffect(() => {
    const promiseBar = API.getXBares(final);
    promiseBar.then((res, rej) => {
      setBares(show(initial, final, res));
    });
  }, [final]);

  return (
    <section className="cardShowContainer">
      <h3>Los bares mas populares</h3>
      <div className="cardShow">
        <img src={arrowToLeft} alt="leftArrow" className="arrow" />
        {bares.length ? (
          bares.map((bar) => <BarCard bar={bar} key={bar._id} />)
        ) : (
          <></>
        )}

        <img src={arrowToRight} alt="rightArrow" className="arrow" />
      </div>
    </section>
  );
};
