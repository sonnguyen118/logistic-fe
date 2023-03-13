import React, { useState, useEffect } from "react";
import { getDataNavbar } from "../../service/navbarServide";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, swweetSucceededReload } from "react-toastify";
import { notifiError } from "../../../utils/notify";

const NavbarInformation = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    // kiểm tra user login ?
    const userId = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    if (userId && email && firstName && lastName) {
      // lấy dữ liệu menu
      const fetchData = async () => {
        const navbarData = await getDataNavbar(1, userId);
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
  return (
    <>
      <div className="card card-primary ml-5 mr-5">
        <div className="card-header">
          <h3 className="card-title">Chỉnh sửa thông tin Navbar</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Địa chỉ Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Nhập vào email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Hotline</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Nhập vào hotline"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Tỷ giá Việt Nam đồng / Nhân Dân tệ
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Nhập vào tỷ giá"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">Tải lên ảnh Logo</label>
              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="exampleInputFile"
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="exampleInputFile"
                  >
                    Choose file
                  </label>
                </div>
                <div className="input-group-append">
                  <span className="input-group-text">Upload</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Cập nhật thông tin
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default NavbarInformation;
