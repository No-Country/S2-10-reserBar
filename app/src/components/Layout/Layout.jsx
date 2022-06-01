import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
