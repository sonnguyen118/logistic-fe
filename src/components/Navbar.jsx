
import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Navbar = () => {
  const [imageUrl, setImageUrl] = useState('https://lephuonglogistics.com/site/images/logo-lephuong-1.png');
  const [menu, setMenu] = useState([
    { title: "Biểu phí", link: "/" }, { title: "Giới thiệu", link: "/" }, { title: "Chính sách", link: "/" }, { title: "Hướng dẫn", link: "/" }, { title: "Thông báo", link: "/" },
  ])
  return (

    <nav className="navbar-pc">
      <div className="navbar-pc-top">
        <div className="navbar-pc-top-left">
          <div className="navbar-pc-top-left-item">
            <i className="navbar-pc-top-left-item-icon fa-solid fa-envelope"></i>
            <span className="navbar-pc-top-left-item-title">Email:</span>
            <span className="navbar-pc-top-left-item-content">
              vanchuyenlephuong2019@gmail.com
            </span>
          </div>
          <div className="navbar-pc-top-left-item">
            <i className="navbar-pc-top-left-item-icon fa-solid fa-phone"></i>
            <span className="navbar-pc-top-left-item-title">Hotline:</span>
            <span className="navbar-pc-top-left-item-content">
              0934577111
            </span>
          </div>
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
            <span className="navbar-pc-top-right-create">Đăng ký</span>
          </Link>
          <Link to={`/login?lable=2`}>
            <span className="navbar-pc-top-right-login">Đăng nhập</span>
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
                  <Link to={data.link} className="navbar-pc-menu-group-item" key={i}>
                    <h2 className="navbar-pc-menu-group-item-title">{data.title}</h2>
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