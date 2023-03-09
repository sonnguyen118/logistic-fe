import { Link } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://lephuonglogistics.com/site/images/logo-lephuong-1.png"
  );
  const [menu, setMenu] = useState([
    { title: "Trang chủ", link: "/" },
    { title: "Biểu phí", link: "/tariffs" },
    { title: "Các sản phẩm", link: "/products" },
    { title: "Giới thiệu", link: "/about" },
    { title: "Chính sách", link: "/policys" },
    { title: "Hướng dẫn", link: "/instructs" },
    { title: "Thông báo", link: "/notification" },
  ]);
  return (
    <nav className="navbar-pc">
      <div className="navbar-pc-top">
        <div className="navbar-pc-top-left">
          <a
            href="mailto:webmaster@example.com"
            className="navbar-pc-top-left-item"
          >
            <i className="navbar-pc-top-left-item-icon fa-solid fa-envelope"></i>
            <span className="navbar-pc-top-left-item-title">Email:</span>
            <span className="navbar-pc-top-left-item-content">
              vanchuyenlephuong2019@gmail.com
            </span>
          </a>
          <a href="tel:+6494461709" className="navbar-pc-top-left-item">
            <i className="navbar-pc-top-left-item-icon fa-solid fa-phone"></i>
            <span className="navbar-pc-top-left-item-title">Hotline:</span>
            <span className="navbar-pc-top-left-item-content">0934577111</span>
          </a>
          <div className="navbar-pc-top-left-item">
            <i className="navbar-pc-top-left-item-icon fa-solid fa-clock"></i>
            <span className="navbar-pc-top-left-item-title">Giờ làm việc:</span>
            <span className="navbar-pc-top-left-item-content">
              08:00 - 17:30
            </span>
          </div>
        </div>
        <div className="navbar-pc-top-right">
          <i className="navbar-pc-top-right-icon fa-solid fa-user"></i>
          <Link to={`/login?lable=1`}>
            <span className="navbar-pc-top-right-create">Đăng nhập</span>
          </Link>
          <Link to={`/login?lable=2`}>
            <span className="navbar-pc-top-right-login">Đăng ký</span>
          </Link>
        </div>
      </div>
      <div className="navbar-pc-menu">
        <Link to={`/`}>
          <img src={imageUrl} alt="example" className="navbar-pc-menu-image" />
        </Link>
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
                      {data.title}
                    </h2>
                  </Link>
                </>
              ))}
            </>
          ) : (
            <></>
          )}
          <Link to={`/`} className="navbar-pc-menu-group-btn">
            <h2 className="navbar-pc-menu-group-btn-title">Công cụ đặt hàng</h2>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
