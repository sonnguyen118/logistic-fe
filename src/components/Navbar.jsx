import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { handleLogOut } from "../utils/formLogin";
import { getNavbar } from "../service/navbarService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { notifiError } from "../utils/notify";

const Navbar = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://lephuonglogistics.com/site/images/logo-lephuong-1.png"
  );
  const [menu, setMenu] = useState([]);
  const [layout, setLayout] = useState([]);
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    // lấy dữ liệu menu
    const fetchData = async () => {
      const navbarData = await getNavbar();
      if (navbarData.success) {
        setData(navbarData.data);
      } else {
        notifiError("Lấy dữ liệu thất bại");
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
      let layout_voter = data.filter(
        (item) => item.name === "MORE_INFORMATION"
      );
      setLayout(JSON.parse(layout_voter[0].description));
    }
  }, [data]);

  return (
    <nav className="navbar-pc">
      <div className="navbar-pc-top">
        <div className="navbar-pc-top-left">
          {layout !== undefined ? (
            <>
              <a
                href="mailto:webmaster@example.com"
                className="navbar-pc-top-left-item"
              >
                <i className="navbar-pc-top-left-item-icon fa-solid fa-envelope"></i>
                <span className="navbar-pc-top-left-item-title">Email:</span>
                <span className="navbar-pc-top-left-item-content">
                  {layout.email}
                </span>
              </a>
              <a href="tel:+6494461709" className="navbar-pc-top-left-item">
                <i className="navbar-pc-top-left-item-icon fa-solid fa-phone"></i>
                <span className="navbar-pc-top-left-item-title">Hotline:</span>
                <span className="navbar-pc-top-left-item-content">
                  {layout.phone}
                </span>
              </a>
              <div className="navbar-pc-top-left-item">
                <i className="navbar-pc-top-left-item-icon fa-solid fa-clock"></i>
                <span className="navbar-pc-top-left-item-title">
                  Giờ làm việc:
                </span>
                <span className="navbar-pc-top-left-item-content">
                  {layout.timework}
                </span>
              </div>

              <div className="navbar-pc-top-left-item">
                <i className="navbar-pc-top-left-item-icon fa-sharp fa-solid fa-dollar-sign"></i>
                <span className="navbar-pc-top-left-item-title">Tỷ giá:</span>
                <span className="navbar-pc-top-left-item-content">
                  {layout.exchange_rate} VNĐ/NDT
                </span>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="navbar-pc-top-right">
          {isLoggedIn ? (
            <div className="navbar-pc-top-right-hello">
              <Link
                to={`/information/account`}
                className="navbar-pc-top-right-hello-text"
              >
                Xin chào{" "}
                <strong>
                  {lastName} {firstName}
                </strong>
                !
              </Link>
              <div className="navbar-pc-top-right-hello-hover">
                <Link
                  to={`/information/account`}
                  className="navbar-pc-top-right-hello-hover-item dropdown-item"
                  type="button"
                >
                  Tài khoản của tôi
                </Link>
                <Link
                  to={`/information/order-status?all=1`}
                  className="navbar-pc-top-right-hello-hover-item dropdown-item"
                  type="button"
                >
                  Tình trạng đơn hàng
                </Link>
                <div className="navbar-pc-top-right-hello-hover-item-divider"></div>
                <button
                  className="navbar-pc-top-right-hello-hover-item dropdown-item"
                  type="button"
                  onClick={handleLogOut}
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          ) : (
            <>
              <i className="navbar-pc-top-right-icon fa-solid fa-user"></i>
              <Link to={`/login?lable=1`}>
                <span className="navbar-pc-top-right-create">Đăng nhập</span>
              </Link>
              <Link to={`/login?lable=2`}>
                <span className="navbar-pc-top-right-login">Đăng ký</span>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="navbar-pc-menu">
        {layout !== undefined ? (
          <>
            <Link to={`/`}>
              <img
                src={layout.link_logo}
                alt="example"
                className="navbar-pc-menu-image"
              />
            </Link>
          </>
        ) : (
          <></>
        )}
        <div className="navbar-pc-menu-group">
          {menu != undefined ? (
            <>
              {menu.map((data, i) => (
                <>
                  <Link
                    to={data.link}
                    className="navbar-pc-menu-group-item"
                    key={i}
                  >
                    <h2 className="navbar-pc-menu-group-item-title">
                      {data.name}
                    </h2>
                  </Link>
                </>
              ))}
            </>
          ) : (
            <></>
          )}
          {/* <Link to={`/`} className="navbar-pc-menu-group-btn">
            <h2 className="navbar-pc-menu-group-btn-title">Công cụ đặt hàng</h2>
          </Link> */}
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
