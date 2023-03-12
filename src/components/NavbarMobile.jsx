import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { handleLogOut } from "../utils/formLogin";
import { getNavbar } from "../service/navbarService";

const NavbarMobile = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://lephuonglogistics.com/site/images/logo-lephuong-1.png"
  );
  const [menu, setMenu] = useState([
    // { title: "Trang chủ", link: "/" },
    // { title: "Biểu phí", link: "/tariffs" },
    // { title: "Các sản phẩm", link: "/products" },
    // { title: "Giới thiệu", link: "/about" },
    // { title: "Chính sách", link: "/policys" },
    // { title: "Hướng dẫn", link: "/instructs" },
    // { title: "Thông báo", link: "/notification" },
  ]);
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [openmenu, setOpenMenu] = useState(false);
  useEffect(() => {
    // lấy dữ liệu menu
    const fetchData = async () => {
      const navbarData = await getNavbar();
      if (navbarData.success) {
        setData(navbarData.data);
      } else {
      }
    };
    fetchData();
    // kiểm tra user login ?
    const email = localStorage.getItem("email");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");

    if (email && firstName && lastName) {
      setIsLoggedIn(true);
      setFirstName(firstName);
      setLastName(lastName);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  useEffect(() => {
    if (data) {
      setMenu(data.filter((item) => item.name !== "MORE_INFORMATION"));
    }
  }, [data]);
  const handleCloseMenu = () => {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("overlay");
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    var span3 = document.getElementById("span3");

    if (openmenu) {
      setOpenMenu(false);
      menu.classList.add("highlighted");
      overlay.classList.add("highlighted");
      span1.classList.remove("rotate");
      span2.classList.remove("rotate", "span2");
      span3.classList.remove("rotate", "span3");
    } else {
      setOpenMenu(true);
      menu.classList.remove("highlighted");
      overlay.classList.remove("highlighted");
      span1.classList.add("rotate");
      span2.classList.add("rotate", "span2");
      span3.classList.add("rotate", "span3");
    }
  };
  return (
    <>
      <div className="container navbar-mobile">
        <div className="phone">
          <div className="content">
            <nav role="navigation" className="navbar-mobile-nav">
              <div id="menuToggle" onClick={handleCloseMenu}>
                <input type="checkbox" />
                <span className="navbar-mobile-sapn-1" id="span1" />
                <span className="navbar-mobile-sapn-2" id="span2" />
                <span className="navbar-mobile-sapn-3" id="span3" />
                <div
                  id="overlay"
                  className="navbar-mobile-overlay highlighted"
                  onClick={handleCloseMenu}
                ></div>
                <ul id="menu" className="menu highlighted">
                  {menu != undefined ? (
                    <>
                      {menu.map((data, index) => (
                        <>
                          <li>
                            <Link to={data.link}>{data.name}</Link>
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
