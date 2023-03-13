import React from "react";

const LayoutHomePage = () => {
  return (
    <>
      <div className="card card-primary ml-5 mr-5">
        <div className="card-header">
          <h3 className="card-title">Giao diện trang chủ - Home Pages</h3>
        </div>
        {/* /.card-header */}
        {/* form start */}
        <form>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên công ty:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="SinoVIet Logistics"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Sologan công ty:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="CHUYÊN CUNG CẤP DỊCH VỤ ORDER - VẬN CHUYỂN TRUNG - VIỆT"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">Tải video nền trang chủ</label>
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
                    Tải lên file video mp4 ...
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFile">Tải ảnh nền trang chủ</label>
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
                    Tải lên hình ảnh nền ...
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Cập nhật thông tin
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LayoutHomePage;
