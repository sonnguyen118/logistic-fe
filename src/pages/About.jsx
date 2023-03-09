import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Toc from "react-toc";
import MenuPost from "../components/post/menuPost";

const About = () => {
  const [datas, setDatas] = useState(
    '<p><strong>GIỚI THIỆU C&Ocirc;NG TY TNHH VẬN CHUYỂN L&Ecirc; PHƯƠNG LOGISTICS</strong></p> <p><em>L&ecirc; Phương Logistics (LPL): Tận T&acirc;m - Tận Lực - Tận C&ugrave;ng</em></p> <p>L&ecirc; Phương Logistics (LPL) l&agrave; đơn vị cung cấp dịch vụ vận chuyển v&agrave; đặt h&agrave;ng Trung QuốC, ch&uacute;ng tối c&oacute; thể gi&uacute;p c&aacute;c bạn kết nối c&aacute;c nh&atilde;n h&agrave;ng, shop, xưởng sản xuất từ c&aacute;c website Thương Mại Điện Tử h&agrave;ng đầu Trung Quốc như Taobao, Tmail, 1688 v.v.v cho đến c&aacute;c nguồn h&agrave;ng xưởng, h&agrave;ng chợ Quảng Ch&acirc;u, Th&acirc;m Quyến, Nghĩa &Ocirc;, Phật Sơn..</p> <p><img alt="" src="https://accgroup.vn/wp-content/uploads/2022/09/cong-ty-logistic-la-gi.jpg" /></p> <p>Dịch vụ của ch&uacute;ng t&ocirc;i bao gồm:</p> <p>-&nbsp;<strong>Mua h&agrave;ng hộ</strong>:<br /> + Tư vấn, t&igrave;m kiếm nguồn h&agrave;ng xưởng, nguồn h&agrave;ng chợ tận gốc v&agrave; order tr&ecirc;n c&aacute;c website b&aacute;n bu&ocirc;n, b&aacute;n lẻ h&agrave;ng đầu Trung Quốc&nbsp;</p> <p>+ Mua h&agrave;ng v&agrave; kiểm tra h&agrave;ng h&oacute;a</p> <p>+ Đ&oacute;ng g&oacute;i v&agrave; vận chuyển h&agrave;ng h&oacute;a về Việt Nam</p> <p>+ Khiếu nại nh&agrave; cung cấp, hỗ trợ đổi trả h&agrave;ng h&oacute;a</p> <p>-&nbsp;<strong>Vận chuyển Quốc Tế</strong>:</p> <p>+ Cung cấp dịch vụ vận chuyển &amp; th&ocirc;ng quan đường Thương Mại Điện Tử</p> <p>+ Dịch vụ vận chuyển ch&iacute;nh ngạch v&agrave; xếp cont</p> <p>Ngo&agrave;i tuyến Trung Quốc - Việt Nam, hiện tại LPL đang trực tiếp th&ocirc;ng quan - xuất khẩu tuyến H&agrave;n Quốc, Nhật Bản, Th&aacute;i Lan</p> <p>Với ti&ecirc;u ch&iacute; đem đến trải nghiệm ho&agrave;n hảo v&agrave; lu&ocirc;n đặt kh&aacute;ch h&agrave;ng l&ecirc;n h&agrave;ng đầu, ch&uacute;ng t&ocirc;i tự tin c&oacute; thể đem đến dịch vụ tốt nhất tr&ecirc;n thị trường cho qu&yacute; kh&aacute;ch h&agrave;ng trong lĩnh vực đặt h&agrave;ng v&agrave; vận chuyển. Đến với LPL mọi &yacute; kiến đ&oacute;ng g&oacute;p của qu&yacute; kh&aacute;ch h&agrave;ng đều được ghi nhận, tr&acirc;n trọng v&agrave; t&iacute;ch cực sửa đổi, ch&uacute;ng t&ocirc;i lu&ocirc;n hướng đến sự ho&agrave;n hảo v&agrave; trải nghiệm ho&agrave;n hảo của kh&aacute;ch h&agrave;ng sẽ l&agrave; nhiệm vụ hằng đầu của c&ocirc;ng ty đặt ra</p> <p>Mọi &yacute; kiến đ&oacute;ng g&oacute;p qu&yacute; kh&aacute;ch h&agrave;ng vui l&ograve;ng li&ecirc;n hệ hotline:</p> <p>Ms Hải Yến: 0966283368</p> <p>Mr L&ecirc; Phương: 0934577111</p> <p><strong>Cảm ơn qu&yacute; kh&aacute;ch!</strong></p>'
  );
  const [data, setData] = useState("xin chào");

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1707983096240371",
        xfbml: true,
        version: "v12.0",
      });

      window.FB.XFBML.parse();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
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

          <span className="list-navigation-text-no">Giới thiệu</span>
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
        <div
          className="fb-comments"
          data-href="https://yourwebsite.com/page-to-comment"
          data-numposts="5"
          data-width="100%"
        ></div>
      </Layout>
    </>
  );
};

export default About;
