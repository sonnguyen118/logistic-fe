import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Toc from "react-toc";
import MenuPost from "../components/post/menuPost";
import { notifiError, swweetSucceeded, notifiWarning } from "../utils/notify";
import "react-datepicker/dist/react-datepicker.css";
import { getSystemPost } from "../service/systempostService";

const Tariffs = () => {
  const [datas, setDatas] = useState(
    '<p>CHI PH&Iacute; D&Agrave;NH CHO 1 ĐƠN H&Agrave;NG<br /> <strong>Ch&iacute; ph&iacute; 1 đơn h&agrave;ng = I + II + III + IV + V</strong></p> <p>Trong đ&oacute;</p> <table border="1"> <tbody> <tr> <td>Chi ph&iacute;</td> <td>Giải th&iacute;ch</td> <td>Ghi ch&uacute;</td> </tr> <tr> <td><strong>I. Tiền h&agrave;ng tr&ecirc;n web</strong></td> <td>Gi&aacute; trị của sản phẩm tr&ecirc;n website Trung Quốc</td> <td>&nbsp;</td> </tr> <tr> <td><strong>II. Ph&iacute; mua h&agrave;ng ( dịch vụ )</strong></td> <td> <p>Ph&iacute; kh&aacute;ch h&agrave;ng phải trả cho&nbsp;<em><strong>lephuonglogistics.vn</strong></em>&nbsp;để mua h&agrave;ng v&agrave; giao dịch</p> </td> <td>&nbsp;</td> </tr> <tr> <td><strong>III. Ph&iacute; ship nội địa</strong></td> <td> <p>Ph&iacute; ship từ nh&agrave; cung cấp sản phẩm tới kho Trung Quốc của&nbsp;<em><strong>lephuonglogistics.vn</strong></em></p> </td> <td>&nbsp;</td> </tr> <tr> <td><strong>IV. Ph&iacute; vận chuyển quốc tế</strong></td> <td> <p>Ph&iacute; vận chuyển từ Trung Quốc về tới kho Việt Nam của&nbsp;&nbsp;</p> <p>&nbsp;<em><strong>lephuonglogistics.vn</strong></em></p> </td> <td>&nbsp;</td> </tr> <tr> <td><strong>V. Ph&iacute; ph&aacute;t sinh</strong></td> <td>Ph&iacute; ph&aacute;t sinh như đ&oacute;ng gỗ, kiểm đếm, bảo hiểm, vv&hellip;</td> <td>(C&oacute; thể c&oacute;)</td> </tr> </tbody> </table> <p>&nbsp;</p> <p><strong>BẢNG PH&Iacute; DICH VỤ MUA H&Agrave;NG HỘ V&Agrave; VẬN CHUYỂN</strong></p> <p><img data-mce-src="/Uploads/NewsIMG/133215127465884392.png" src="https://lephuonglogistics.vn/Uploads/NewsIMG/133215127465884392.png" /></p> <p>&nbsp;</p> <p><strong>BẢNG PH&Iacute; VẬN CHUYỂN K&Yacute; GỬI</strong></p> <p><img data-mce-src="/Uploads/NewsIMG/133215127612674258.png" src="https://lephuonglogistics.vn/Uploads/NewsIMG/133215127612674258.png" /></p> <p><strong>&nbsp;</strong></p> <p><strong>BẢNG PH&Iacute; GIAO H&Agrave;NG NỘI TH&Agrave;NH H&Agrave; NỘI</strong></p> <p><strong><img data-mce-src="/Uploads/NewsIMG/133125270449884674.png" src="https://lephuonglogistics.vn/Uploads/NewsIMG/133125270449884674.png" /></strong></p>'
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
      window.location.replace("/");
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

          <span className="list-navigation-text-no">Biểu phí</span>
        </div>
        <div className="post-wrap">
          <div className="post-wrap-menu">
            <MenuPost />
          </div>
          <div className="post-wrap-content">
            {data ? (
              <div
                className="post-wrap-content-main"
                dangerouslySetInnerHTML={{
                  __html: datas,
                }}
              ></div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tariffs;
