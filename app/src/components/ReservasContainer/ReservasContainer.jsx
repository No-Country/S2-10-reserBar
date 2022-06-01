import "./ReservasContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBares } from "../../store/actions/baresActions";

export const ReservasContainer = () => {
  const dispatch = useDispatch();
  const bars = useSelector((state) => state.bars.bars);

  const [baresFiltrados, setBaresFiltrados] = useState([]);
  const [barraBusqueda, setBarraBusqueda] = useState(" ");
  const [filtroProvincia, setFiltroProvincia] = useState(" ");
  const [filtroCiudad, setFiltroCiudad] = useState(" ");
  const [filtroVegan, setFiltroVegan] = useState(true);

  const funcionFiltro = (
    baresArray,
    // barraBusqueda,
    // provincia,
    // ciudad,
    vegan
  ) => {
    let filter = [];

    vegan
      ? baresArray.map((data) => {
          if (data.vegan === vegan) {
            filter = [...filter, data];

            setBaresFiltrados(filter);
          }
        })
      : setBaresFiltrados(baresArray);
  };

  const changeVegan = () => {
    filtroVegan ? setFiltroVegan(false) : setFiltroVegan(true);
  };

  useEffect(() => {
    dispatch(getBares());
  }, []);
  useEffect(() => {
    setBaresFiltrados(bars);
  }, [bars]);

  return (
    <>
      <h3 className="Título">Reservar</h3>
      <section className="ReservasContainer">
        <div className="contenedorCards">
          {baresFiltrados ? (
            baresFiltrados.map((bar) => <BarCard bar={bar} key={bar._id} />)
          ) : (
            <></>
          )}
        </div>
        <div className="asideBusqueda">
          <label>Búsqueda por nombre</label>
          <form action="">
            <input
              type="text"
              id="searchBar"
              onChange={(value) => {
                var searchBar = document.getElementById("searchBar");
                setBarraBusqueda(searchBar.value);
              }}
            />
            <label>Provincia</label>

            <select id="provincia" name="provincias">
              <option value=""></option>
              {/* Display en base a listado de provincias disponibles */}
              <option value="caba">Buenos Aires</option>
            </select>

            <label>Ciudad</label>
            <select id="ciudad" name="ciudad">
              <option value=""></option>
              {/* Display en base a listado de ciudades disponibles */}
              <option value="caba">La Plata</option>
            </select>
            <div className="veganBox">
              {/* Display en base a si el bar tiene opcion vegana en el menu */}
              <input
                type="checkbox"
                id="vegan"
                name="vegan"
                value="vegan"
                onClick={(e) => {
                  changeVegan();
                  funcionFiltro(bars, filtroVegan);
                }}
              />
              <label>Opciones veganas</label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
