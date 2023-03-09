import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Toc from "react-toc";
import MenuPost from "../components/post/menuPost";

const Instructs = () => {
  const [datas, setDatas] = useState(
    '<h1>HƯỚNG DẪN</h1> <p><strong>Hướng dẫn sử dụng website L&ecirc; Phương Logistics:</strong></p> <p>Xin ch&agrave;o qu&yacute; vị kh&aacute;ch h&agrave;ng, dưới đ&acirc;y l&agrave; k&ecirc;nh youtube official của L&ecirc; Phương Logistics, c&ocirc;ng ty lập ra nhằm hướng dẫn qu&yacute; kh&aacute;ch h&agrave;ng dễ d&agrave;ng v&agrave; t&iacute;ch kiệm thời gian hơn trong vấn đề sử dụng website. Hi vọng, với những cải tiến kh&ocirc;ng ngừng v&agrave; ho&agrave;n thiện li&ecirc;n tục L&ecirc; Phương Logistics c&oacute; thể gi&uacute;p bạn quản l&yacute; đơn h&agrave;ng 1 c&aacute;ch hiệu quả</p> <p>1 - Hướng dẫn lập t&agrave;i khoản website L&ecirc; Phương Logistics:</p> <p>👉<a data-mce-href="https://www.youtube.com/watch?v=xRK2AnoHsc4" href="https://www.youtube.com/watch?v=xRK2AnoHsc4">https://www.youtube.com/watch?v=xRK2AnoHsc4</a></p> <p>2 - Hướng dẫn c&aacute;ch tạo đơn mua h&agrave;ng hộ tại website L&ecirc; Phương Logistics<br /> 👉<a data-mce-href="https://www.youtube.com/watch?v=VpCHOrOM0kI" href="https://www.youtube.com/watch?v=VpCHOrOM0kI">https://www.youtube.com/watch?v=VpCHOrOM0kI</a></p> <p>3 - Hướng dẫn c&aacute;ch nạp tiền v&agrave;o v&iacute; tại&nbsp;tại website L&ecirc; Phương Logistics</p> <p>👉<a data-mce-href="https://www.youtube.com/watch?v=MgJpxYvyyCk" href="https://www.youtube.com/watch?v=MgJpxYvyyCk">https://www.youtube.com/watch?v=MgJpxYvyyCk</a></p> <p>Cảm ơn qu&yacute; kh&aacute;ch h&agrave;ng nhiều!</p>'
  );
  const [data, setData] = useState("xin chào");

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

          <span className="list-navigation-text-no">Hướng dẫn</span>
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

export default Instructs;
