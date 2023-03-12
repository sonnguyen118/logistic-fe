import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import { formatDate } from "../../utils/formatDate";
import {
  getListOrdersAll,
  getListOrdersForType,
  getListOrdersForSearch,
} from "../../service/ordersService";
import { notifiError, notifiWarning } from "../../utils/notify";
import Loading from "../Loading";

const ListOrder = ({ type, page }) => {
  console.log(type, "type", typeof type);
  const [backgroundImage, setBackgroundImage] = useState("/emptycart.png");
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [maxpage, setMaxPage] = useState(30);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [url_search, setUrlSearching] = useState("");
  const [page_search, setPageSearching] = useState(null);
  const [data_origin, setDataOrigin] = useState([]);

  const [active_account, setActiveAccount] = useState(0);

  useEffect(() => {
    const local_token = localStorage.getItem("token");
    const searchParams = new URLSearchParams(location.search);
    if (local_token && type !== undefined) {
      switch (type) {
        case "type0":
          console.log("type đang là 0");
          setUrlSearching("");
          const fetchData0 = async () => {
            const navbarData = await getListOrdersAll(local_token);
            if (navbarData.success) {
              setDataOrigin(navbarData.data);
              setActiveAccount(1);
            } else if (navbarData.message === "Tài khoản chưa được kích hoạt") {
              notifiWarning("Tài khoản chưa được kích hoạt");
              setActiveAccount(2);
            } else {
              notifiError("Lấy dữ liệu thất bại");
              window.location.replace("/");
            }
          };
          fetchData0();
          break;
        case "type1":
          console.log("type đang là 1");
          setUrlSearching("");
          const fetchData1 = async () => {
            const navbarData = await getListOrdersForType(local_token, 1);
            if (navbarData.success) {
              setDataOrigin(navbarData.data);
              setActiveAccount(1);
            } else if (navbarData.message === "Tài khoản chưa được kích hoạt") {
              notifiWarning("Tài khoản chưa được kích hoạt");
              setActiveAccount(2);
            } else {
              notifiError("Lấy dữ liệu thất bại");
              window.location.replace("/");
            }
          };
          fetchData1();
          break;
        case "type2":
          console.log("type đang là 2");
          setUrlSearching("");
          const fetchData2 = async () => {
            const navbarData = await getListOrdersForType(local_token, 2);
            if (navbarData.success) {
              setDataOrigin(navbarData.data);
              setActiveAccount(1);
            } else if (navbarData.message === "Tài khoản chưa được kích hoạt") {
              notifiWarning("Tài khoản chưa được kích hoạt");
              setActiveAccount(2);
            } else {
              notifiError("Lấy dữ liệu thất bại");
              window.location.replace("/");
            }
          };
          fetchData2();
          break;
        case "type3":
          console.log("type đang là 3");
          setUrlSearching("");
          const fetchData3 = async () => {
            const navbarData = await getListOrdersForType(local_token, 3);
            if (navbarData.success) {
              setDataOrigin(navbarData.data);
              setActiveAccount(1);
            } else if (navbarData.message === "Tài khoản chưa được kích hoạt") {
              notifiWarning("Tài khoản chưa được kích hoạt");
              setActiveAccount(2);
            } else {
              notifiError("Lấy dữ liệu thất bại");
              window.location.replace("/");
            }
          };
          fetchData3();
          break;
        case "type4":
          console.log("type đang là 4");
          setUrlSearching("");
          const fetchData4 = async () => {
            const navbarData = await getListOrdersForType(local_token, 4);
            if (navbarData.success) {
              setDataOrigin(navbarData.data);
              setActiveAccount(1);
            } else if (navbarData.message === "Tài khoản chưa được kích hoạt") {
              notifiWarning("Tài khoản chưa được kích hoạt");
              setActiveAccount(2);
            } else {
              notifiError("Lấy dữ liệu thất bại");
              window.location.replace("/");
            }
          };
          fetchData4();
          break;
        case "search":
          console.log("type đang là search");
          setUrlSearching(searchParams.get("search"));
          const fetchData5 = async () => {
            const navbarData = await getListOrdersForSearch(
              local_token,
              searchParams.get("search")
            );
            if (navbarData.success) {
              setDataOrigin(navbarData.data);
              setActiveAccount(1);
            } else if (navbarData.message === "Tài khoản chưa được kích hoạt") {
              notifiWarning("Tài khoản chưa được kích hoạt");
              setActiveAccount(2);
            } else {
              notifiError("Lấy dữ liệu thất bại");
              window.location.replace("/");
            }
          };
          fetchData5();
          break;
        default:
          break;
      }
    } else if (local_token == null) {
      window.location.replace("/");
    } else {
      window.location.replace("/");
    }
  }, [type, location.search]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (data_origin !== undefined && page !== undefined) {
      if (type !== "search") {
        setData(
          data_origin.slice(
            (Number(page) - 1) * Number(maxpage),
            Number(page) * Number(maxpage)
          )
        );
      } else {
        setPageSearching(searchParams.get("page"));
        setData(
          data_origin.slice(
            (Number(searchParams.get("page")) - 1) * Number(maxpage),
            Number(searchParams.get("page")) * Number(maxpage)
          )
        );
      }
    }
  }, [data_origin, maxpage, page, location.search, type]);

  function handleDoubleClick(id) {
    navigate(`/information/order-status/${id}`); // Chuyển sang trang mới
  }

  // thao tác search
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }
  function handleSubmit() {
    navigate(`/information/order-status?search=${url_search}&page=1`);
  }

  return (
    <>
      <div className="information-right-search">
        <input
          className="information-right-search-input"
          placeholder={`Bạn có thể tìm kiếm theo mã vận đơn ...`}
          onChange={(event) => setUrlSearching(event.target.value)}
          onKeyDown={handleKeyDown}
          value={url_search}
        />
        <i
          class="fa-solid fa-magnifying-glass information-right-search-icon"
          onClick={handleSubmit}
        ></i>
      </div>
      <div className="list-order">
        {active_account !== undefined && active_account !== 0 ? (
          <>
            {active_account !== 2 ? (
              <>
                {data !== undefined ? (
                  <>
                    {data.length > 0 ? (
                      <>
                        <table className="table table-striped list-order-table">
                          <thead>
                            <tr>
                              <th scope="col">STT</th>
                              <th scope="col">Mã đơn hàng</th>
                              <th scope="col">Thời gian</th>
                              <th scope="col">Trạng thái</th>
                            </tr>
                          </thead>
                        </table>
                        <div className="list-order-table-wrap">
                          <table className="table table-striped list-order-table">
                            <tbody>
                              {data.map((information, i) => (
                                <tr
                                  onDoubleClick={(e) =>
                                    handleDoubleClick(information.id)
                                  }
                                >
                                  {type !== "search" ? (
                                    <td scope="row">
                                      {Number(i) +
                                        Number(maxpage) * (Number(page) - 1) +
                                        1}
                                    </td>
                                  ) : (
                                    <td scope="row">
                                      {Number(i) +
                                        Number(maxpage) *
                                          (Number(page_search) - 1) +
                                        1}
                                    </td>
                                  )}

                                  <td>{information.order_code}</td>
                                  <td>
                                    {formatDate(information.created_date)}
                                  </td>
                                  <td>{information.status_name}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="list-order-pagination">
                          {type !== undefined && data_origin !== [] ? (
                            <>
                              {type !== "search" ? (
                                <>
                                  <Pagination
                                    originUrl={type}
                                    param={type}
                                    max={data_origin.length}
                                    maxpage={maxpage}
                                  />
                                </>
                              ) : (
                                <>
                                  <Pagination
                                    originUrl={`search=${url_search}&page`}
                                    param={"page"}
                                    max={data_origin.length}
                                    maxpage={maxpage}
                                  />
                                </>
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                          <div className="list-order-search">
                            <span className="list-order-search-title">
                              Số đơn hàng hiển thị:
                            </span>
                            <select
                              className="form-select form-select-sm list-order-search-input"
                              aria-label=".form-select-sm example"
                              value={maxpage}
                              onChange={(e) => setMaxPage(e.target.value)}
                            >
                              <option selected value={maxpage}>
                                {maxpage}
                              </option>
                              <option value={10}>10</option>
                              <option value={10}>20</option>
                              <option value={10}>30</option>
                              <option value={50}>50</option>
                              <option value={80}>80</option>
                              <option value={100}>100</option>
                              <option value={200}>200</option>
                              <option value={300}>300</option>
                              <option value={500}>500</option>
                            </select>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="list-order-none">
                          <div
                            className="list-order-none-image"
                            style={{
                              backgroundImage: `url(${backgroundImage})`,
                            }}
                          ></div>
                          <div className="list-order-none-text">
                            Hiện hệ thống chưa ghi nhận đơn hàng nào, xin vui
                            lòng quay lại sau ...
                          </div>
                        </div>
                        {/* <div className="list-order-none">
                          <div className="list-order-none-loading">
                            <Loading />
                          </div>
                          <div className="list-order-none-text">
                            Đang tải dữ liệu ...
                          </div>
                        </div> */}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="list-order-none">
                      <div className="list-order-none-loading">
                        <Loading />
                      </div>
                      <div className="list-order-none-text">
                        Đang tải dữ liệu 1
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="information-account-warnning">
                  <i className="information-account-warnning-icon fa-sharp fa-solid fa-circle-exclamation"></i>
                  <div className="information-account-warnning-text">
                    Tài khoản của quý khách chưa được kích hoạt !!<br></br>
                    Hãy chờ đợi hoặc liên hệ ngay với{" "}
                    <strong>quản trị viên</strong> để sữ dụng những tính năng
                    !!!
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="list-order-none">
            <div className="list-order-none-loading">
              <Loading />
            </div>
            <div className="list-order-none-text">Đang tải dữ liệu 2</div>
          </div>
        )}
      </div>
    </>
  );
};

export default ListOrder;
