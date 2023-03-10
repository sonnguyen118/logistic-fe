import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 457,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 376,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 321,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const [datalist, setDataList] = useState([
    {
      link: "/",
      image: "https://shopdunk.com/images/thumbs/0000596_iphone-13.png",
      title: "Video games",
    },
    {
      link: "/",
      image: "https://shopdunk.com/images/thumbs/0000596_iphone-13.png",
      title: "Video games",
    },
    {
      link: "/",
      image: "https://shopdunk.com/images/thumbs/0000596_iphone-13.png",
      title: "Video games",
    },
    {
      link: "/",
      image: "https://shopdunk.com/images/thumbs/0000596_iphone-13.png",
      title: "Video games",
    },
    {
      link: "/",
      image: "https://shopdunk.com/images/thumbs/0000596_iphone-13.png",
      title: "Video games",
    },
    {
      link: "/",
      image: "https://shopdunk.com/images/thumbs/0000596_iphone-13.png",
      title: "Video games",
    },
    {
      link: "/",
      image: "https://shopdunk.com/images/thumbs/0000596_iphone-13.png",
      title: "Video games",
    },
    {
      link: "/",
      image: "https://shopdunk.com/images/thumbs/0000596_iphone-13.png",
      title: "Video games",
    },
  ]);
  return (
    <Layout>
      <div className="list-navigation">
        <Link to={`/`}>
          <div className="list-navigation-item">
            <i className="fa-solid fa-house list-navigation-home"></i>
            <span className="list-navigation-text">Trang Ch???</span>
          </div>
        </Link>
        <i className="fa-solid fa-angles-right list-navigation-icon"></i>
        <span className="list-navigation-text-no">C??c s???n ph???m</span>
      </div>
      <div className="products">
        <div className="products-header">
          <h1 className="products-header-title">
            C??C ????N H??NG CH??NG T??I ???? TH???C HI???N
          </h1>
          <h5 className="products-header-title-sub">
            Ch??ng t??i ???? v???n chuy???n l?????ng l???n c??c ????n h??ng sau
          </h5>
        </div>
        <div className="products-navigation">
          <Link to={`/`}>
            <div className="products-navigation-item">
              <i className="fa-solid fa-house products-navigation-item-icon"></i>
              <span className="products-navigation-item-text">
                Mi???n ph?? v???n chuy???n
              </span>
            </div>
          </Link>
          <Link to={`/`}>
            <div className="products-navigation-item">
              <i className="fa-solid fa-house products-navigation-item-icon"></i>
              <span className="products-navigation-item-text">
                Mi???n ph?? v???n chuy???n
              </span>
            </div>
          </Link>
          <Link to={`/`}>
            <div className="products-navigation-item">
              <i className="fa-solid fa-house products-navigation-item-icon"></i>
              <span className="products-navigation-item-text">
                Mi???n ph?? v???n chuy???n
              </span>
            </div>
          </Link>
          <Link to={`/`}>
            <div className="products-navigation-item">
              <i className="fa-solid fa-house products-navigation-item-icon"></i>
              <span className="products-navigation-item-text">
                Mi???n ph?? v???n chuy???n
              </span>
            </div>
          </Link>
        </div>
        <div className="products-list">
          <div className="products-list-btn1" onClick={previous}>
            <i className="fas fa-chevron-left products-list-btn1-icon"></i>
          </div>
          <div className="products-list-btn2" onClick={next}>
            <i className="fas fa-chevron-right products-list-btn2-icon"></i>
          </div>
          {datalist != undefined ? (
            <>
              {datalist.length >= 6 ? (
                <>
                  <Slider
                    {...settings}
                    ref={(c) => (slider.current = c)}
                    className="products-list-slider"
                  >
                    {datalist.map((data, index) => (
                      <div className="products-list-slider-wrap">
                        <Link to={data.link}>
                          <div className="products-list-slider-item">
                            <div
                              className="products-list-slider-item-image"
                              style={{
                                backgroundImage: `url(${data.image})`,
                              }}
                            ></div>
                            <div className="products-list-slider-item-title">
                              {data.title}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </Slider>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="products-group-btn">
          <div className="products-group-btn-item-1">
            <i class="fa-solid fa-magnifying-glass products-group-btn-item-1-icon"></i>
            <span className="products-group-btn-item-1-text">
              Tra c???u ????n h??ng
            </span>
          </div>
          <div className="products-group-btn-item-2">
            <i class="fa-solid fa-user products-group-btn-item-2-icon"></i>
            <span className="products-group-btn-item-2-text">
              ????ng nh???p ????? ki???m tra
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
