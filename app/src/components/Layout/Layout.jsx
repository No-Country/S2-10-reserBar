import React from "react";
import { Outlet } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import NavBoots from "../NavBar/NavBoots";

const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

      }}
    >
      {/* <NavBar /> */}
      <NavBoots />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
