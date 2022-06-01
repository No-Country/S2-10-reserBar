import "./ReservasContainer.css";
import { BarCard } from "../BarCard/BarCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const ReservasContainer = () => {
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
console.log(vegan)
    vegan
      ? 
        baresArray.map((data) => {
            if (data.vegan === vegan) {
              filter = [...filter, data];
              console.log(filter);
              setBaresFiltrados(filter)

            }
          })
        
        
      :  setBaresFiltrados(baresArray);

    // vegan ? setBaresFiltrados(filter)
  };

  const changeVegan = ()=>{

    filtroVegan ? setFiltroVegan(false) : setFiltroVegan(true)
  }

  // useEffect(() => {
  //   if (
  //     filtroVegan !== false
  //     // || filtroProvincia !== " " ||
  //     // filtroCiudad !== " " ||
  //     // barraBusqueda !== " "
  //   ) {
  //     funcionFiltro(
  //       bars,
  //       // barraBusqueda,
  //       // filtroProvincia,
  //       // filtroCiudad,
  //       filtroVegan
  //     );
  //   } else {
  //     setBaresFiltrados(bars);
  //   }
  //   console.log("cambio del filtro");
  // }),
  //   [filtroVegan];

  useEffect(()=>{
    setBaresFiltrados(bars)
  },[])

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
          <label>Busqueda por nombre</label>
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
                  changeVegan()
                  funcionFiltro(bars, filtroVegan)
                }}
              />
              <label>Quiero opciones veganas</label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
