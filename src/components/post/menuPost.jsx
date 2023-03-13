import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { handleLogOut } from "../../utils/formLogin";
import { getNavbar } from "../../service/navbarService";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { notifiError } from "../../utils/notify";

const MenuPost = () => {
  const [menu, setMenu] = useState([]);
  const [data, setData] = useState(null);
  useEffect(() => {
    // lấy dữ liệu menu
    const fetchData = async () => {
      const navbarData = await getNavbar();
      if (navbarData.success) {
        setData(navbarData.data);
      } else {
        notifiError("Lấy dữ liệu thất bại");
      }
    };
    fetchData();
  }, []);
  console.log(data, "đây là data");
  useEffect(() => {
    if (data) {
      setMenu(data.filter((item) => item.name !== "MORE_INFORMATION"));
    }
  }, [data]);
  console.log(menu, "đây là m,enu");
  const [posts, setPosts] = useState([
    {
      title:
        "Công an điều tra sai phạm ở Công ty F88, người vay có được 'xóa nợ'?",
      image:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/333557646_3468957550052897_7945621082590131837_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2d2wx6fzr0wAX8QhjQK&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAjLJKfJwJBwNpWspVGnam47atwaKB7ikMk5bt4zP_PwA&oe=640D41EE",
      decreption:
        "Nhiều khách hàng thắc mắc khi công an đang điều tra sai phạm tại Công ty F88 thì các khoản vay với lãi suất cao họ có phải trả?",
      link: "/",
    },
    {
      title:
        "Công an điều tra sai phạm ở Công ty F88, người vay có được 'xóa nợ'?",
      image:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/333557646_3468957550052897_7945621082590131837_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2d2wx6fzr0wAX8QhjQK&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAjLJKfJwJBwNpWspVGnam47atwaKB7ikMk5bt4zP_PwA&oe=640D41EE",
      decreption:
        "Nhiều khách hàng thắc mắc khi công an đang điều tra sai phạm tại Công ty F88 thì các khoản vay với lãi suất cao họ có phải trả?",
      link: "/",
    },
    {
      title:
        "Công an điều tra sai phạm ở Công ty F88, người vay có được 'xóa nợ'?",
      image:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/333557646_3468957550052897_7945621082590131837_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2d2wx6fzr0wAX8QhjQK&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAjLJKfJwJBwNpWspVGnam47atwaKB7ikMk5bt4zP_PwA&oe=640D41EE",
      decreption:
        "Nhiều khách hàng thắc mắc khi công an đang điều tra sai phạm tại Công ty F88 thì các khoản vay với lãi suất cao họ có phải trả?",
      link: "/",
    },
    {
      title:
        "Công an điều tra sai phạm ở Công ty F88, người vay có được 'xóa nợ'?",
      image:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/333557646_3468957550052897_7945621082590131837_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2d2wx6fzr0wAX8QhjQK&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAjLJKfJwJBwNpWspVGnam47atwaKB7ikMk5bt4zP_PwA&oe=640D41EE",
      decreption:
        "Nhiều khách hàng thắc mắc khi công an đang điều tra sai phạm tại Công ty F88 thì các khoản vay với lãi suất cao họ có phải trả?",
      link: "/",
    },
    {
      title:
        "Công an điều tra sai phạm ở Công ty F88, người vay có được 'xóa nợ'?",
      image:
        "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/333557646_3468957550052897_7945621082590131837_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2d2wx6fzr0wAX8QhjQK&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAjLJKfJwJBwNpWspVGnam47atwaKB7ikMk5bt4zP_PwA&oe=640D41EE",
      decreption:
        "Nhiều khách hàng thắc mắc khi công an đang điều tra sai phạm tại Công ty F88 thì các khoản vay với lãi suất cao họ có phải trả?",
      link: "/",
    },
  ]);
  return (
    <>
      <div className="menu-post">
        <div className="menu-post-search">
          <input
            type="text"
            className="menu-post-search-input"
            placeholder="Tìm kiếm"
          />
          <i className="menu-post-search-icon fa-solid fa-magnifying-glass" />
        </div>
        <div className="menu-post-menu">
          {/* <div className="menu-post-menu-header">Điều hướng</div> */}
          <div className="menu-post-menu-wrap">
            {menu !== undefined ? (
              <>
                {menu.map((data, i) => (
                  <Link to={menu.link}>
                    <div className="menu-post-menu-wrap-item ">
                      <i className="menu-post-menu-wrap-item-icon fa-sharp fa-solid fa-play"></i>
                      <span className="menu-post-menu-wrap-item-title">
                        {data.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="menu-post-list">
          <div className="menu-post-list-header">Các bài đăng nổi bật</div>
          <div className="menu-post-list-wrap">
            {posts !== undefined ? (
              <>
                {posts.map((data, i) => (
                  <Link to={data.link}>
                    <div className="menu-post-list-wrap-item">
                      <div className="menu-post-list-wrap-item-image">
                        <img
                          src={data.image}
                          alt=""
                          className="menu-post-list-wrap-item-image-src"
                        />
                      </div>
                      <div className="menu-post-list-wrap-item-content">
                        <div className="menu-post-list-wrap-item-content-title">
                          {data.title}
                        </div>
                        <div className="menu-post-list-wrap-item-content-decreption">
                          {data.decreption}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPost;
