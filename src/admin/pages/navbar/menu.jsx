import React from "react";

const NavbarMenu = () => {
  return (
    <>
      <div className="card ml-5 mr-5">
        <div className="card-header">
          <h3 className="card-title">Danh sách menu</h3>
        </div>
        {/* /.card-header */}
        <div className="card-body table-responsive p-0">
          <table className="table table-hover text-nowrap">
            <thead>
              <tr>
                <th>Thứ tự hiển thị</th>
                <th>Tiêu đề</th>
                <th>Link</th>
                <th>Quyền hạn</th>
                <th>Thao tác</th>
                <th>Ẩn menu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input className="" value={"Trang chủ"}></input>
                </td>
                <td>/</td>
                <td>Tất cả người dùng</td>
                <td>
                  <i className="fa-solid fa-circle-arrow-up mr-2"></i>
                  Xếp lên đầu
                </td>
                <td>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch1"
                    ></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">
            Cập nhật thông tin
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
