import React from "react";
import { CardShowContainer } from "../components/CardShowContainer/CardShowContainer";
import HomeContainer from "../components/HomeContainer/HomeContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBares } from "../store/actions/baresActions";

const Home = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9cc99a5 (Agrego redux y página de reservas)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBares());
  }, []);

<<<<<<< HEAD
=======
>>>>>>> 2a8087f (Cards)
=======
>>>>>>> 9cc99a5 (Agrego redux y página de reservas)
  return (
    <>
      <HomeContainer />
      <CardShowContainer />
    </>
  );
};

export default Home;
