import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { formatDate } from "../utils/formatDate";

const OrderDetailPage = () => {
  const { id } = useParams();
  const [backgroundImage, setBackgroundImage] = useState("/background.jpg");
  const [detailOrder, setDetailOrder] = useState("");
  useEffect(() => {
    const local_token = localStorage.getItem("token");
    if (local_token) {
      // dispatch(getDataDetailOrder(local_token, id));
    } else if (local_token == null) {
    }
  }, [id]);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (data !== undefined) {
      setDetailOrder(data[0]);
    }
  }, [data]);
  console.log(detailOrder);
  return (
    <>
      <Helmet> </Helmet>
      <Layout>
        <div
          className="order-detail"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="list-navigation-special">
            <Link to={`/`}>
              <div className="list-navigation-item">
                <i className="fa-solid fa-house list-navigation-home"></i>
                <span className="list-navigation-text">Trang Chủ</span>
              </div>
            </Link>
            <i className="fa-solid fa-angles-right list-navigation-icon"></i>
            <Link to={`/information/order-status?type0=1`}>
              <span className="list-navigation-text">Tra Cứu</span>
            </Link>
            <i className="fa-solid fa-angles-right list-navigation-icon"></i>

            <span className="list-navigation-text-no">Chi tiết đơn hàng</span>
          </div>
          {detailOrder != undefined && detailOrder !== "" ? (
            <>
              <div className="order-detail-box">
                <div className="order-detail-box-header">
                  <div className="order-detail-box-header-item">
                    <i className="order-detail-box-header-item-icon fa-solid fa-cube"></i>
                    <div className="order-detail-box-header-item-text">
                      {detailOrder.order_code}
                    </div>
                  </div>
                  <div className="order-detail-box-header-item">
                    <i className="order-detail-box-header-item-icon fa-solid fa-user"></i>
                    <div className="order-detail-box-header-item-text">---</div>
                  </div>
                  <div className="order-detail-box-header-item">
                    <i className="order-detail-box-header-item-icon fa-solid fa-scale-unbalanced-flip"></i>
                    <div className="order-detail-box-header-item-text">---</div>
                  </div>
                </div>
                <div className="order-detail-box-main">
                  <div className="order-detail-box-main-header">
                    <div className="order-detail-box-main-header-1">
                      Thời gian
                    </div>
                    <div className="order-detail-box-main-header-2">
                      Trạng thái
                    </div>
                  </div>
                  <div className="order-detail-box-main-item">
                    <div className="order-detail-box-main-item-1">
                      {formatDate(detailOrder.created_date)}
                    </div>
                    <div className="order-detail-box-main-item-2">
                      {detailOrder.status}
                    </div>
                  </div>
                  {/* <div className="order-detail-box-main-item">
                    <div className="order-detail-box-main-item-1">
                      20:03 30-06-2021
                    </div>
                    <div className="order-detail-box-main-item-2">
                      ĐANG TRÊN ĐƯỜNG VỀ VIỆT NAM
                    </div>
                  </div>
                  <div className="order-detail-box-main-item">
                    <div className="order-detail-box-main-item-1">
                      15:59 02-07-2021
                    </div>
                    <div className="order-detail-box-main-item-2">
                      HÀNG VỀ KHO HÀ NỘI
                    </div>
                  </div>
                  <div className="order-detail-box-main-item">
                    <div className="order-detail-box-main-item-1">
                      16:12 02-07-2021
                    </div>
                    <div className="order-detail-box-main-item-2">
                      ĐÃ TRẢ KHÁCH
                    </div>
                  </div> */}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </Layout>
    </>
  );
};

export default OrderDetailPage;
