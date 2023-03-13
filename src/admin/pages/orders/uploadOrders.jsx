import React, { useState } from "react";

const UploadOrders = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("Chọn file");

  const handleInput = (e) => {
    if (e.target.files[0]) {
      if (e.target.files && e.target.files[0]) {
        if (
          e.target.files[0].type === "application/vnd.ms-excel" ||
          e.target.files[0].type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
          var myNewFile = new File(
            [e.target.files[0]],
            e.target.files[0].name.replace(/ /g, "_"),
            { type: e.target.files[0].type }
          );
          setTitle(myNewFile.name);
          setFile(myNewFile);
          // setLogoView(URL.createObjectURL(myNewFile));
        } else {
          alert(
            "Vui lòng chọn lại định dạng ảnh. Định dạng ảnh gồm jpg, jpeg, png và webp"
          );
        }
      }
    }
  };
  const handleClearFile = () => {
    setFile(null);
    setTitle("Chọn file");
  };
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h4 className="card-title">
                    Tải File Excel dữ liệu hàng hóa
                  </h4>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">File input</label>
                      <div className="input-group">
                        <div className="custom-file cursor-pointer">
                          <input
                            type="file"
                            className="custom-file-input cursor-pointer"
                            id="exampleInputFile"
                            onChange={(e) => handleInput(e)}
                          />
                          <label
                            className="custom-file-label cursor-pointer"
                            htmlFor="exampleInputFile"
                          >
                            {title}
                          </label>
                        </div>
                        {file ? (
                          <>
                            <btn
                              class="ml-3 btn btn-success active"
                              role="button"
                              aria-pressed="true"
                            >
                              Đọc File này
                            </btn>
                          </>
                        ) : (
                          <>
                            <btn
                              class="ml-3 btn btn-secondary disabled"
                              role="button"
                              aria-pressed="true"
                            >
                              Chưa có file
                            </btn>
                          </>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleClearFile}
                    >
                      <i className="fa-solid fa-trash mr-3"></i>
                      Xóa file
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Đọc File Thành Công !!</h3>
                </div>
                {/* /.card-header */}
                <div
                  className="card-body table-responsive p-0"
                  style={{ height: "400px" }}
                >
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Mã đơn hàng</th>
                        <th>Thời gian</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>JT3025918461104</td>
                        <td>03/04/2023 16:59</td>
                        <td>Đã nhập kho Trung Quốc</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadOrders;
