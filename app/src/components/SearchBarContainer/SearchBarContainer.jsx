import { useEffect, useState } from "react";
import { BarCard } from "../BarCard/BarCard";

import * as API from "../../services/bares.js";
import "./SearchBarContainer.css";

export const SearchBarContainer = () => {
  const [bares, setBares] = useState([]);
  const [quantity, setQuantity] = useState(3);


  useEffect(() => {
    const promiseBar = API.getXBares(quantity);
    promiseBar.then((res, rej) => {
      setBares(res);
      console.log(bares)
    });
  }, [quantity]);

  return (
    <>
      <div className="searchResult">
        {bares.length ? (bares.map((bar) => <BarCard bar={bar} key={bar._id} />)) : <></>}
        {bares.length ? (bares.map((bar) => <BarCard bar={bar} key={bar._id} />)) : <></>}
        {bares.length ? (bares.map((bar) => <BarCard bar={bar} key={bar._id} />)) : <></>}
      </div>
    </>
  );
};
