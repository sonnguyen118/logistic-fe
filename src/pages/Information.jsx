import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Account from "../components/information/account";
import Notify from "../components/information/notify";
import ListOrder from "../components/information/listorder";

const Information = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState(
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/82519360_1512110088942550_4769502543019507712_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MWupJpDpu9MAX-Tu9NK&_nc_ht=scontent-hkt1-2.xx&oh=00_AfDWHS1ouBIkZerv9MlWdJiQAPDWeFLKj3nk7--_7j3QvQ&oe=642C28AE"
  );
  const [menuStatus, setMenuStatus] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [navigation, setNavigation] = useState([false, true, false]);
  const [type, setType] = useState("type0");
  const [page, setPage] = useState(1);
  // hàm click menu
  const toggleMenu = (index) => {
    // if (!menuStatus[index]) {
    //   setMenuStatus((prevStatus) => {
    //     const newStatus = [];
    //     for (let i = 0; i < prevStatus.length; i++) {
    //       newStatus[i] = i === index ? !prevStatus[i] : false;
    //     }
    //     return newStatus;
    //   });
    // }
    navigate(
      {
        pathname: "/information/order-status",
        search: `?type${index}=1`,
      },
      { replace: true }
    );
  };
  // hàm thay đổi khi url thay đổi
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get("type0")) {
      setMenuStatus([true, false, false, false, false]);
      setType("type0");
      setPage(searchParams.get("type0"));
    } else if (searchParams.get("type1")) {
      setMenuStatus([false, true, false, false, false]);
      setType("type1");
      setPage(searchParams.get("type1"));
    } else if (searchParams.get("type2")) {
      setMenuStatus([false, false, true, false, false]);
      setType("type2");
      setPage(searchParams.get("type2"));
    } else if (searchParams.get("type3")) {
      setMenuStatus([false, false, false, true, false]);
      setType("type3");
      setPage(searchParams.get("type3"));
    } else if (searchParams.get("type4")) {
      setMenuStatus([false, false, false, false, true]);
      setType("type4");
      setPage(searchParams.get("type4"));
    }
    const pathname = location.pathname;
    const orderStatus = pathname.split("/").pop();
    switch (orderStatus) {
      case "account":
        setNavigation([true, false, false]);
        break;
      case "order-status":
        setNavigation([false, true, false]);
        break;
      case "notify":
        setNavigation([false, false, true]);
        break;
      default:
        setNavigation([false, true, false]);
    }
  }, [location.search, location]);

  const renderContent = () => {
    const pathname = location.pathname;
    const orderStatus = pathname.split("/").pop();
    switch (orderStatus) {
      case "order-status":
        return (
          <>
            <div className="information-right-menu">
              <div
                className={
                  menuStatus[0]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(0)}
              >
                Tất cả
              </div>
              <div
                className={
                  menuStatus[1]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(1)}
              >
                Đã nhập kho Trung
              </div>
              <div
                className={
                  menuStatus[2]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(2)}
              >
                Đang vận chuyển đến kho Việt
              </div>
              <div
                className={
                  menuStatus[3]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(3)}
              >
                Đã nhập kho Việt
              </div>
              <div
                className={
                  menuStatus[4]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(4)}
              >
                Đã giao
              </div>
            </div>
            <div className="information-right-search">
              <input
                className="information-right-search-input"
                placeholder={`Bạn có thể tìm kiếm theo mã vận đơn ...`}
              ></input>
              <i class="fa-solid fa-magnifying-glass information-right-search-icon"></i>
            </div>
            <div className="information-right-component">
              <ListOrder type={type} page={page} />
            </div>
          </>
        );
      case "account":
        return <Account />;
      case "notify":
        return <Notify />;
      default:
        return (
          <>
            <div className="information-right-menu">
              <div
                className={
                  menuStatus[0]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(0)}
              >
                Tất cả
              </div>
              <div
                className={
                  menuStatus[1]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(1)}
              >
                Đã nhập kho Trung
              </div>
              <div
                className={
                  menuStatus[2]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(2)}
              >
                Đang vận chuyển đến kho Việt
              </div>
              <div
                className={
                  menuStatus[3]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(3)}
              >
                Đã nhập kho Việt
              </div>
              <div
                className={
                  menuStatus[4]
                    ? "information-right-menu-item information-right-menu-item-activate"
                    : "information-right-menu-item"
                }
                onClick={() => toggleMenu(4)}
              >
                Đã giao
              </div>
            </div>
            <div className="information-right-search">
              <input
                className="information-right-search-input"
                placeholder={`Bạn có thể tìm kiếm theo mã vận đơn ...`}
              ></input>
              <i class="fa-solid fa-magnifying-glass information-right-search-icon"></i>
            </div>
            <div className="information-right-component">
              <ListOrder type={type} page={page} />
            </div>
          </>
        );
    }
  };

  return (
    <>
      <Helmet></Helmet>
      <Layout>
        <div className="information">
          <div className="information-left">
            <div className="information-left-user">
              <div
                className="information-left-user-avatar"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
              ></div>
              <div className="information-left-user-infor">
                <div className="information-left-user-infor-title">
                  Nguyễn Như Quỳnh
                </div>
                <div className="information-left-user-infor-edit">
                  <i class="fa-solid fa-pen-to-square information-left-user-infor-edit-icon"></i>
                  <span className="information-left-user-infor-edit-text">
                    Sửa thông tin
                  </span>
                </div>
              </div>
            </div>
            <div className="information-left-list">
              <Link
                to={`/information/account`}
                className={
                  navigation[0]
                    ? "information-left-item information-left-item-activate"
                    : "information-left-item"
                }
              >
                <i className="information-left-item-icon fa-solid fa-user"></i>
                <span className="information-left-item-text">
                  Tài Khoản Của Tôi
                </span>
              </Link>
              <Link
                to={`/information/order-status?type0=1`}
                className={
                  navigation[1]
                    ? "information-left-item information-left-item-activate"
                    : "information-left-item"
                }
              >
                <i className="fa-solid fa-truck-fast information-left-item-icon"></i>
                <span className="information-left-item-text">
                  Tình Trạng Hàng
                </span>
              </Link>
              <Link
                to={`/information/notify`}
                className={
                  navigation[2]
                    ? "information-left-item information-left-item-activate"
                    : "information-left-item"
                }
              >
                <i className="information-left-item-icon fa-solid fa-bell"></i>
                <span className="information-left-item-text">Thông Báo</span>
              </Link>
              <div className="information-left-item">
                <i className="information-left-item-icon fa-solid fa-right-from-bracket"></i>
                <span className="information-left-item-text">Đăng Xuất</span>
              </div>
            </div>
          </div>
          <div className="information-right">{renderContent()}</div>
        </div>
      </Layout>
    </>
  );
};

export default Information;
