import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Reservar from "./pages/Reservar";
import About from "./pages/About";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout/Layout";
import ViewBar from "./pages/ViewBar";
import Registro from "./components/Registro/Registro";
import BarRegister from "./components/BarRegister/BarRegister";
import User from "./pages/User";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/reservar" element={<Reservar />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/:id" element={<ViewBar />} />
            <Route path="/barRegistro" element={<BarRegister />} />
            <Route path="/User" element={<User></User>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
