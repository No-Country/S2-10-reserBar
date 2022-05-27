import React from "react";
import { CardShowContainer } from "../components/CardShowContainer/CardShowContainer";
import HomeContainer from "../components/HomeContainer/HomeContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBares } from "../store/actions/baresActions";

const Home = () => {
<<<<<<< HEAD
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBares());
  }, []);

=======
>>>>>>> 2a8087f (Cards)
  return (
    <>
      <HomeContainer />
      <CardShowContainer />
    </>
  );
};

export default Home;
