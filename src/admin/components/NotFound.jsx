import React from "react";

const AdminNotFound = () => {
  return (
    <div className="notfound-page-admin">
      <div className="container-fluid notfound-page">
        {/* 404 Error Text */}
        <div className="text-center">
          <div className="error mx-auto" data-text={404}>
            404
          </div>
          <p className="lead text-gray-800 mb-5">Trang không tồn tại</p>
          <p className="text-gray-500 mb-0">
            Có vẻ như bạn đã nhập sai đường dẫn, hoặc URL đã bị quản trị viên vô
            hiệu hóa ....
          </p>
          <a href="/admin">← Trở về trang chủ Admin</a>
        </div>
      </div>
    </div>
  );
};

export default AdminNotFound;
