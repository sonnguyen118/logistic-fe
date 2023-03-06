import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const handleBurgerBtnClick = () => {
    var mobile = document.getElementById("mobile");
    mobile.classList.toggle("navigation");
  };
  const [imageUrl, setImageUrl] = useState(
    "https://lephuonglogistics.com/site/images/logo-lephuong-1.png"
  );
  const [menu, setMenu] = useState([
    { title: "Biểu phí", link: "/" },
    { title: "Các sản phẩm", link: "/products" },
    { title: "Giới thiệu", link: "/" },
    { title: "Chính sách", link: "/" },
    { title: "Hướng dẫn", link: "/" },
    { title: "Thông báo", link: "/" },
  ]);
  return (
    <>
      <div className="container navbar-mobile">
        <div className="phone">
          <div className="content">
            <nav role="navigation" className="navbar-mobile-nav">
              <div id="menuToggle">
                <input type="checkbox" />
                <span />
                <span />
                <span />
                <ul id="menu">
                  {menu != undefined ? (
                    <>
                      {menu.map((data, index) => (
                        <>
                          <li>
                            <Link to={data.link}>{data.title}</Link>
                          </li>
                        </>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
