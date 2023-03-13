import React from "react";
import Layout from "./Layout";

const NotFound = () => {
  return (
    <Layout>
      <div>
        <div className="container-fluid notfound-page">
          {/* 404 Error Text */}
          <div className="text-center">
            <div className="error mx-auto" data-text={404}>
              404
            </div>
            <p className="lead text-gray-800 mb-5">Trang không tồn tại</p>
            <p className="text-gray-500 mb-0">
              Có vẻ như bạn đã nhập sai đường dẫn, hoặc URL đã bị quản trị viên
              vô hiệu hóa ....
            </p>
            <a href="/">← Trở về trang chủ</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
