import React, { useState, useEffect } from "react";
import { logOut } from "../store/actions/usersActions";
import DashBar from "../components/DashBoard/DashBar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Chart from "../components/DashBoard/Chart";
import { Navigate } from "react-router-dom";
const DashBoardBar = () => {
  const [infoBar, setInfoBar] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const authToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const { id } = useParams();

  const desloguearse = () => {
    dispatch(logOut());
  };

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    fetch(`https://reserbar-api.herokuapp.com/api/bares/${id}`, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        setInfoBar(response.bares);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);

  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Cargando...</h2>;
  }
  return (
    <>
      {authToken ? (
        <>
          <Chart info={infoBar}></Chart>
          <DashBar info={infoBar} />
          <div className="cerrarSesión">
            <button
              className="cerrarSesiónButton"
              onClick={() => desloguearse()}
            >
              Cerrar sesión
            </button>
          </div>
        </>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default DashBoardBar;
