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
    </>
  );
};

export default Layout;
