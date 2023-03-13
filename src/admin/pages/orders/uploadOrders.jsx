import React, { useEffect, useState } from "react";
import { uploadExcel } from "../../service/uploadExcels";
import { notifiError, notifiWarning } from "../../../utils/notify";
import { getListOrdersAll } from "../../../service/ordersService";

const UploadOrders = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("Chọn file");
  const [stateupload, setStateUpload] = useState(0);
  const [data, setData] = useState(null);

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

  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    if (file != null && token) {
      setStateUpload(1);
      const body = new FormData();
      body.append("file", file);
      // Đẩy dữ liệu lên
      const fetchData = async () => {
        const navbarData = await uploadExcel(token, body);
        if (navbarData.success) {
          setStateUpload(2);
        } else {
          alert("Lấy dữ liệu thất bại");
          setStateUpload(3);
        }
      };
      fetchData();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (stateupload === 2 && token) {
      const fetchData0 = async () => {
        const navbarData = await getListOrdersAll(token);
        if (navbarData.success) {
          setData(navbarData.data);
        } else {
          notifiError("Lấy dữ liệu thất bại");
          window.location.replace("/");
        }
      };
      fetchData0();
    }
  }, [stateupload]);

  console.log(data, data);
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
                              onClick={handleSubmit}
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
                  {stateupload !== undefined && stateupload !== 0 ? (
                    <>
                      {stateupload === 1 ? (
                        <>
                          <h4 className="card-title">
                            <div className="spinner-border mr-3" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                            Đang tải file lên hệ thống !!
                          </h4>
                        </>
                      ) : (
                        <>
                          {stateupload === 2 ? (
                            <>
                              <h4 className="card-title">
                                <div
                                  className="alert alert-success"
                                  role="alert"
                                >
                                  Đọc File thành công{" "}
                                  <a href="#" className="alert-link">
                                    Hãy Đừng vui mừng sớm quá
                                  </a>
                                  😒😒😒
                                </div>
                              </h4>
                            </>
                          ) : (
                            <>
                              <h4 className="card-title">
                                <div
                                  className="alert alert-danger"
                                  role="alert"
                                >
                                  Đọc File thất bại{" "}
                                  <a href="#" className="alert-link">
                                    Hãy Đừng quá buồn nhé
                                  </a>
                                  😆😜
                                </div>
                              </h4>
                            </>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
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
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    {data ? (
                      <>
                        {data.length > 0 ? (
                          <>
                            <tbody>
                              {data.map((order, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{order.order_code}</td>
                                  <td>{order.status_name}</td>
                                </tr>
                              ))}
                            </tbody>
                          </>
                        ) : (
                          <tbody>
                            <>Dữ liệu chưa cập nhật</>
                          </tbody>
                        )}
                      </>
                    ) : (
                      <tbody>
                        <>Dữ liệu chưa cập nhật</>
                      </tbody>
                    )}
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
