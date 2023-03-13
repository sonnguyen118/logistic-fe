import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Toc from "react-toc";
import MenuPost from "../components/post/menuPost";
import Notify from "../components/information/notify";
import { notifiError, swweetSucceeded, notifiWarning } from "../utils/notify";
import "react-datepicker/dist/react-datepicker.css";
import { getSystemPost } from "../service/systempostService";

const Notification = () => {
  const [datas, setDatas] = useState(
    '<p>QUY ĐỊNH &amp; CH&Iacute;NH S&Aacute;CH</p> <p>Quy Định &amp; Ch&iacute;nh S&aacute;ch Shopee</p> <p>Cơ bản</p> <p>9 Chuy&ecirc;n đề</p> <p>50 Ph&uacute;t</p> <p>T&igrave;m hiểu ngay</p> <p>Đ&aacute;nh dấu trang</p> <p><img alt="" crossorigin="anonymous" data-v-1641c79c="" src="https://cf.shopee.sg/file/ab61d033cf7221a683d273a79409b3a3" /></p> <p>C&ugrave;ng t&igrave;m hiểu c&aacute;c quy định v&agrave; ch&iacute;nh s&aacute;ch của Shopee về <strong>đăng b&aacute;n sản phẩm v&agrave; xử l&yacute; đơn h&agrave;ng.</strong></p> <ol> <li>Bắt đầu bằng những chuy&ecirc;n đề về giới hạn sản phẩm đăng b&aacute;n d&agrave;nh cho Người b&aacute;n mới v&agrave; quy định đăng b&aacute;n h&agrave;ng đặt trước.</li> <li>Sau đ&oacute; Người b&aacute;n cần lưu &yacute; những điều cần tr&aacute;nh trong c&aacute;c chuy&ecirc;n đề về vi phạm đăng b&aacute;n, sản phẩm cấm, sản phẩm giả/ nh&aacute;i, sản phẩm vi phạm quyền ph&acirc;n phối v&agrave; sản phẩm spam.</li> <li>Cuối c&ugrave;ng, h&atilde;y t&igrave;m hiểu th&ecirc;m về ch&iacute;nh s&aacute;ch xử l&yacute; đơn h&agrave;ng để tối ưu vận chuyển h&agrave;ng h&oacute;a.</li> </ol>'
  );
  const [data, setData] = useState("xin chào");
  const [isValidate, setIsValidate] = useState(0);
  useEffect(() => {
    const local_token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    if (local_token) {
      // lấy dữ liệu menu
      const fetchData = async () => {
        const navbarData = await getSystemPost();
        if (navbarData.success) {
          setData(navbarData.data);
        } else {
          notifiError("Lấy dữ liệu thất bại");
        }
      };
      fetchData();
    } else {
      window.location.replace("/login");
    }
  }, []);
  useEffect(() => {
    if (datas !== undefined) {
    }
  }, [datas]);
  return (
    // ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ
    <>
      <Helmet>
        <title>
          Trang chủ | LÊ PHƯƠNG - VẬN CHUYỂN VÀ ĐẶT HÀNG TRUNG - VIỆT
        </title>
      </Helmet>
      <Toc include={["h1", "h2", "h3", "h4", ".home-content"]} />
      <Layout>
        <div className="list-navigation">
          <Link to={`/`}>
            <div className="list-navigation-item">
              <i className="fa-solid fa-house list-navigation-home"></i>
              <span className="list-navigation-text">Trang Chủ</span>
            </div>
          </Link>
          <i className="fa-solid fa-angles-right list-navigation-icon"></i>

          <span className="list-navigation-text-no">Thông báo</span>
        </div>
        <div className="post-wrap">
          <div className="post-wrap-menu">
            <MenuPost />
          </div>
          <div className="post-wrap-content">
            <Notify />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Notification;
