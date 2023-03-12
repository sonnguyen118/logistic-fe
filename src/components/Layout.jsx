import React from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarMobile />
      <Navbar />
      {children}
      <Footer />
      <a href="tel:0339551909">
        <div className="container-phone-call">
          <i className="icon bgc-blue c-white circle p-3 osc-rotation">
            <i className="fa-solid fa-phone"></i>
          </i>
        </div>
      </a>
    </>
  );
};

export default Layout;
