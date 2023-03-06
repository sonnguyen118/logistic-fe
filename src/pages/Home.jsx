import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";

const Home = () => {
  const [videoUrl, setVideoUrl] = useState("/Logisticsfootage.mp4");
  const [imageUrl, setImageUrl] = useState("/chiphilogistics-1.jpeg");

  return (
    <>
      <Helmet>
        <title>
          Trang chủ | LÊ PHƯƠNG - VẬN CHUYỂN VÀ ĐẶT HÀNG TRUNG - VIỆT
        </title>
      </Helmet>
      <Layout>
        <div className="home">
          {videoUrl && imageUrl !== undefined ? (
            <>
              {videoUrl !== "" ? (
                <>
                  <video
                    className="home-video"
                    id="background-video"
                    autoPlay={true}
                    loop
                    muted
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                </>
              ) : (
                <>
                  <div
                    className="home-image"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                  ></div>
                </>
              )}
            </>
          ) : (
            <></>
          )}
          <div className="home-content">
            <div className="home-content-header">LE PHUONG LOGISTICS</div>
            <div className="home-content-main">
              CHUYÊN CUNG CẤP DỊCH VỤ ORDER - VẬN CHUYỂN TRUNG - VIỆT
            </div>
            <div className="home-content-group">
              <Link to={`/information/order-status?all=1`}>
                <div className="home-content-group-btn">
                  <i className="home-content-group-btn-icon fa-solid fa-magnifying-glass"></i>
                  <span className="home-content-group-btn-title">Tra cứu</span>
                </div>
              </Link>
              <Link to={`/login`}>
                <div className="home-content-group-btn">
                  <i className="home-content-group-btn-icon fa-solid fa-user"></i>
                  <span className="home-content-group-btn-title">
                    Đăng nhập
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
