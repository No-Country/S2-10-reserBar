import "./ReservasContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBares } from "../../store/actions/baresActions";

export const ReservasContainer = () => {
  const dispatch = useDispatch();
  const bars = useSelector((state) => state.bars.bars);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [baresFiltrados, setBaresFiltrados] = useState([]);
  const [barraBusqueda, setBarraBusqueda] = useState("");
  const [filtroPais, setFiltroPais] = useState("");
  const [filtroProvincia, setFiltroProvincia] = useState("");
  const [filtroCiudad, setFiltroCiudad] = useState("");
  const [filtroVegan, setFiltroVegan] = useState(false);

  useEffect(() => {
    dispatch(getBares());
  }, []);

  useEffect(() => {
    setBaresFiltrados(bars);
    listLocations(bars);
  }, [bars]);

  const listLocations = async (array) => {
    try{
    const countries = [" "];
    const states = [" "];
    const cities = [" "];
    for (let index = 0; index < array.length; index++) {
      const barElement = array[index];
      countries.push(barElement.country);
      states.push(barElement.state);
      cities.push(barElement.city);
    }

    const newArrCountry = countries.filter(
      (item, index) => countries.indexOf(item) === index
    );
    const newArrStates = states.filter(
      (item, index) => states.indexOf(item) === index
    );
    const newArrCity = cities.filter(
      (item, index) => cities.indexOf(item) === index
    );

    setCountries(newArrCountry);
    setStates(newArrStates);
    setCities(newArrCity);
    }catch(e){}
  };

  const funcionFiltro = (
    baresArray,
    // barraBusqueda,
    pais,
    provincia,
    ciudad,
    vegan
  ) => {
    let filter = [];

    console.log(pais, provincia, ciudad, vegan)
    console.log(baresArray)

    pais
      ? baresArray.map((data) => {
          if (data.country === pais) {
            filter = [...filter, data];
            console.log(filter)
            setBaresFiltrados(filter);
          }
        })
        : console.log("no se establecio filtro pais")

        provincia
        ? filter.map((data) => {
          if (data.state === provincia) {
            filter = [...filter, data];
            console.log(filter)
            setBaresFiltrados(filter);
          }
        })
        :console.log("no se establecio filtro provincia")

        ciudad
        ? filter.map((data) => {
          if (data.city === ciudad) {
            console.log(filter)
            filter = [...filter, data];
            setBaresFiltrados(filter);
          }
        })
      : console.log("no se establecio filtro ciudad")

  //   vegan
  //     ? baresArray.map((data) => {
  //         if (data.vegan === vegan) {
  //           filter = [...filter, data];

  //           setBaresFiltrados(filter);
  //         }
  //       })
  //     : setBaresFiltrados(baresArray);

  if(filtroPais && filtroProvincia && filtroCiudad === false) {setBaresFiltrados(baresArray)} 

  };

  const changeVegan = () => {
    filtroVegan ? setFiltroVegan(false) : setFiltroVegan(true);
  };


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

            <label>Pais</label>
            <select id="pais" name="pais" onChange={(e) => {setFiltroPais(e.target.value); funcionFiltro(bars,filtroPais,filtroProvincia,filtroCiudad,filtroVegan)}}>
              {countries.length ? (
                countries.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>

            <label>Provincia</label>
            <select id="provincia" name="provincia" onChange={(e) => {setFiltroProvincia(e.target.value); funcionFiltro(bars,filtroPais,filtroProvincia,filtroCiudad,filtroVegan)}}>
              {states.length ? (
                states.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))
              ) : (
                <></>
              )}
            </select>

            <label>Ciudad</label>
            <select id="ciudad" name="ciudad" onChange={(e) => {setFiltroCiudad(e.target.value); funcionFiltro(bars,filtroPais,filtroProvincia,filtroCiudad,filtroVegan)}}>
              {cities.length ? (
                cities.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))
              ) : (
                <></>
              )}
              {/* Display en base a listado de ciudades disponibles */}
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
                  funcionFiltro(bars,filtroPais,filtroProvincia,filtroCiudad,filtroVegan);
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
