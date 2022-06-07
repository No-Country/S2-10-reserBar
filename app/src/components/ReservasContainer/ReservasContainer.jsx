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
  const [filtroPais, setFiltroPais] = useState(" ");
  const [filtroProvincia, setFiltroProvincia] = useState(" ");
  const [filtroCiudad, setFiltroCiudad] = useState(" ");
  const [filtroVegan, setFiltroVegan] = useState(false);

  useEffect(() => {
    dispatch(getBares());
  }, []);

  useEffect(() => {
    setBaresFiltrados(bars);
    listLocations(bars);
  }, [bars]);

  const listLocations = async (array) => {
    try {
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
    } catch (e) {}
  };

  const filterList = (array) => {
    for (let index = 0; index < array.length; index++) {
      const barElement = array[index];
      states.push(barElement.state);
      cities.push(barElement.city);
    }

    const newArrStates = states.filter(
      (item, index) => states.indexOf(item) === index
    );
    const newArrCity = cities.filter(
      (item, index) => cities.indexOf(item) === index
    );

    setStates(newArrStates);
    setCities(newArrCity);
  };

  const funcionFiltro = async (
    baresArray,
    barraBusqueda,
    pais,
    provincia,
    ciudad,
    vegan
  ) => {
    let filter = baresArray;
    let filters = {
      barra: barraBusqueda,
      pais: pais,
      provincia: provincia,
      ciudad: ciudad,
      vegan: vegan,
    };

    if (
      barraBusqueda == "" &&
      pais == " " &&
      provincia == " " &&
      ciudad == " " &&
      vegan == false
    ) {
      setBaresFiltrados(baresArray);
    } else {
      barraBusqueda != " "
        ? (filter = filter.filter(
            (bar) =>
              bar.name.toLowerCase() == barraBusqueda ||
              bar.name.toLowerCase().includes(barraBusqueda)
          ))
        : setBaresFiltrados(filter);
      pais != " "
        ? (filter = filter.filter((bar) => bar.country == pais))
        : setBaresFiltrados(filter);
      provincia != " "
        ? (filter = filter.filter((bar) => bar.state == provincia))
        : setBaresFiltrados(filter);
      ciudad != " "
        ? (filter = filter.filter((bar) => bar.city == ciudad))
        : setBaresFiltrados(filter);
      vegan
        ? (filter = filter.filter((bar) => bar.vegan == true))
        : setBaresFiltrados(filter);
      setBaresFiltrados(filter);
    }
  };

  const changeVegan = async (booleanValue) => {
    setFiltroVegan(booleanValue);
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
              placeholder="Nombre del bar"
              onChange={(e) => {
                let value = e.target.value;
                if (value && value.trim().length > 0) {
                  value = value.trim().toLowerCase();
                  setBarraBusqueda(value);
                }
                funcionFiltro(
                  bars,
                  value,
                  filtroPais,
                  filtroProvincia,
                  filtroCiudad,
                  filtroVegan
                );
              }}
            />

            <label>Pais</label>
            <select
              id="pais"
              name="pais"
              onChange={(e) => {
                setFiltroPais(e.target.value);
                funcionFiltro(
                  bars,
                  barraBusqueda,
                  e.target.value,
                  filtroProvincia,
                  filtroCiudad,
                  filtroVegan
                );
              }}
            >
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
            {filtroPais != " " ? (
              <select
                id="provincia"
                name="provincia"
                onChange={(e) => {
                  setFiltroProvincia(e.target.value);
                  funcionFiltro(
                    bars,
                    barraBusqueda,
                    filtroPais,
                    e.target.value,
                    filtroCiudad,
                    filtroVegan
                  );
                }}
              >
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
            ) : (
              <select id="provinciaDisabled" name="ciudad" disabled>
                <option>Seleccione pais</option>
              </select>
            )}

            <label>Ciudad</label>
            {/* Display en base a listado de ciudades disponibles */}
            {filtroProvincia != " " && filtroPais != " "? (
              <select
                id="ciudad"
                name="ciudad"
                onChange={(e) => {
                  setFiltroCiudad(e.target.value);
                  funcionFiltro(
                    bars,
                    barraBusqueda,
                    filtroPais,
                    filtroProvincia,
                    e.target.value,
                    filtroVegan
                  );
                }}
              >
                {cities.length ? (
                  cities.map((data) => (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  ))
                ) : (
                  <></>
                )}
              </select>
            ) : (
              <select id="ciudadDisabled" name="ciudad" disabled>
                <option>Seleccione provincia o estado</option>
              </select>
            )}
            <div className="veganBox">
              {/* Display en base a si el bar tiene opcion vegana en el menu */}
              <input
                type="checkbox"
                id="vegan"
                name="vegan"
                value="vegan"
                onClick={(e) => {
                  // changeVegan(e.target.checked).then(
                  funcionFiltro(
                    bars,
                    barraBusqueda,
                    filtroPais,
                    filtroProvincia,
                    filtroCiudad,
                    e.target.checked
                  );
                  // )
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
