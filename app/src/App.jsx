import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Reservar from "./pages/Reservar";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
   
  
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/svd" element={<Home />} />
          <Route path="/reservarvsvsd" element={<Reservar />} />

          <Route path="/logineger" element={<Login />} />


          <Route path></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
