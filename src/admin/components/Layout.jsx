import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const AdminLayout = ({ children }) => {
  const [isShown, setIsShown] = useState(true);
  const toggleBlock = () => {
    setIsShown(!isShown);
  };
  return (
    <>
      <Helmet>
        <title>
          Trang quản trị | SinoViet Logistics - VẬN CHUYỂN VÀ ĐẶT HÀNG TRUNG -
          VIỆT
        </title>
        <link
          rel="icon"
          href="/admins/admin_logo.png"
          type="image/x-icon"
        ></link>
        <link href="/css/sb-admin-2.min.css" rel="stylesheet"></link>
        <link
          href="/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Helmet>
      <body id="page-top">
        <div>
          <div id="wrapper" className="admin">
            {/* Sidebar */}
            <div
              className={`admin__sliderbar ${
                isShown ? "" : "admin__sliderbar-hidden"
              }`}
            >
              <ul
                className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                id="accordionSidebar"
              >
                {/* Sidebar - Brand */}
                <a
                  className="sidebar-brand d-flex align-items-center justify-content-center"
                  href="index.html"
                >
                  <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fa-solid fa-user-ninja"></i>
                  </div>
                  <div className="sidebar-brand-text mx-3">SinoViet Admin</div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                  <a className="nav-link" href="/" target="_blank">
                    <i className="fas fa-home" />
                    <span>Về trang chủ</span>
                  </a>
                </li>

                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Nhập liệu</div>
                <li className="nav-item">
                  <a className="nav-link" href="/admin/upload-orders">
                    <i className="fa-solid fa-upload" />
                    <span className="ml-2">Tải file hàng</span>
                  </a>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Chỉnh sửa giao diện</div>
                <li className="nav-item">
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <i className="fas fa-fw fa-cog" />
                    <span className="ml-2">Thanh Navbar</span>
                  </a>
                  <div
                    id="collapse1"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                  >
                    <div className="bg-white py-2 collapse-inner rounded">
                      <a className="collapse-item" href="/admin/navbar/infor">
                        Thông tin chung
                      </a>
                      <a className="collapse-item" href="/admin/navbar/menu">
                        Menu
                      </a>
                    </div>
                  </div>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Bài đăng</div>
                <li className="nav-item">
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    <i className="fas fa-fw fa-cog" />
                    <span className="ml-2">Các trang hệ thống</span>
                  </a>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                  >
                    <div className="bg-white py-2 collapse-inner rounded">
                      <a className="collapse-item" href="/admin/system/home">
                        Trang chủ
                      </a>
                      <a
                        className="collapse-item"
                        href="/admin/system/posts/tariffs"
                      >
                        Biểu phí
                      </a>
                      <a
                        className="collapse-item"
                        href="/admin/system/products"
                      >
                        Các sản phẩm
                      </a>
                      <a
                        className="collapse-item"
                        href="/admin/system/posts/tariffs"
                      >
                        Giới thiệu
                      </a>
                      <a
                        className="collapse-item"
                        href="/admin/system/posts/policys"
                      >
                        Chính sách
                      </a>
                      <a
                        className="collapse-item"
                        href="/admin/system/posts/instructs"
                      >
                        Hướng dẫn
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse3"
                  >
                    <i className="fas fa-fw fa-cog" />
                    <span className="ml-2">Bài đăng thông báo</span>
                  </a>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                  >
                    <div className="bg-white py-2 collapse-inner rounded">
                      <a className="collapse-item" href="/admin/notify/add">
                        Thêm thông báo mới
                      </a>
                      <a className="collapse-item" href="/admin/notify/list/1">
                        Danh sách thông báo
                      </a>
                      <a className="collapse-item" href="/admin/notify/trash/1">
                        Thông báo đã xóa
                      </a>
                    </div>
                  </div>
                </li>

                <hr className="sidebar-divider" />
                <div className="sidebar-heading">Quản lý người dùng</div>

                <li className="nav-item">
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapsePages"
                    aria-expanded="true"
                    aria-controls="collapsePages"
                  >
                    <i className="fas fa-user fa-folder" />
                    <span className="ml-2">Tài khoản khách</span>
                  </a>
                  <div
                    id="collapsePages"
                    className="collapse"
                    aria-labelledby="headingPages"
                    data-parent="#accordionSidebar"
                  >
                    <div className="bg-white py-2 collapse-inner rounded">
                      <a
                        className="collapse-item"
                        href="/admin/users/unconfirm-list/1"
                      >
                        Chờ xác thực
                      </a>
                      <a
                        className="collapse-item"
                        href="/admin/admin/users/list/1"
                      >
                        Danh sách tài khoản
                      </a>
                      <a className="collapse-item" href="/admin/users/add">
                        Thêm tài khoản
                      </a>
                      <a className="collapse-item" href="/admin/users/trash/1">
                        Các tài khoản bị xóa
                      </a>
                    </div>
                  </div>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div
                  className="text-center d-none d-md-inline"
                  onClick={toggleBlock}
                >
                  <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                  />
                </div>
                <hr className="sidebar-divider d-none d-md-block" />
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa-solid fa-power-off"></i>
                    <span className="ml-2">Đăng xuất</span>
                  </a>
                </li>
                {/* Sidebar Message */}
              </ul>
            </div>
            <div
              className={`admin__content ${
                isShown ? "" : "admin__content-open"
              }`}
            >
              <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                  {/* Topbar */}
                  <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    {/* Sidebar Toggle (Topbar) */}
                    <button onClick={toggleBlock} className="ml-2">
                      <i className="fa-solid fa-bars"></i>
                    </button>
                    {/* Topbar Search */}
                    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm" />
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Topbar Navbar */}
                    <ul className="navbar-nav ml-auto">
                      {/* Nav Item - Search Dropdown (Visible Only XS) */}
                      <li className="nav-item dropdown no-arrow d-sm-none">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="searchDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-search fa-fw" />
                        </a>
                        {/* Dropdown - Messages */}
                        <div
                          className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                          aria-labelledby="searchDropdown"
                        >
                          <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control bg-light border-0 small"
                                placeholder="Search for..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                >
                                  <i className="fas fa-search fa-sm" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </li>
                      {/* Nav Item - Alerts */}
                      <li className="nav-item dropdown no-arrow mx-1">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="alertsDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="fas fa-bell fa-fw" />
                          {/* Counter - Alerts */}
                          <span className="badge badge-danger badge-counter">
                            3+
                          </span>
                        </a>
                        {/* Dropdown - Alerts */}
                        <div
                          className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                          aria-labelledby="alertsDropdown"
                        >
                          <h6 className="dropdown-header">Alerts Center</h6>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <div className="mr-3">
                              <div className="icon-circle bg-primary">
                                <i className="fas fa-file-alt text-white" />
                              </div>
                            </div>
                            <div>
                              <div className="small text-gray-500">
                                December 12, 2019
                              </div>
                              <span className="font-weight-bold">
                                A new monthly report is ready to download!
                              </span>
                            </div>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <div className="mr-3">
                              <div className="icon-circle bg-success">
                                <i className="fas fa-donate text-white" />
                              </div>
                            </div>
                            <div>
                              <div className="small text-gray-500">
                                December 7, 2019
                              </div>
                              $290.29 has been deposited into your account!
                            </div>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <div className="mr-3">
                              <div className="icon-circle bg-warning">
                                <i className="fas fa-exclamation-triangle text-white" />
                              </div>
                            </div>
                            <div>
                              <div className="small text-gray-500">
                                December 2, 2019
                              </div>
                              Spending Alert: We've noticed unusually high
                              spending for your account.
                            </div>
                          </a>
                          <a
                            className="dropdown-item text-center small text-gray-500"
                            href="#"
                          >
                            Show All Alerts
                          </a>
                        </div>
                      </li>
                      <div className="topbar-divider d-none d-sm-block" />
                      {/* Nav Item - User Information */}
                      <li className="nav-item dropdown no-arrow">
                        <btn
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="userDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                            Xin chào, Trịnh Cảnh
                          </span>
                          {/* <img
                            className="img-profile rounded-circle"
                            src="/admins/avatar_admin.jpg"
                            alt="SinoViet Logistics"
                          /> */}
                        </btn>
                        {/* Dropdown - User Information */}
                        <div
                          className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                          aria-labelledby="userDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                            Profile
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                            Settings
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                            Activity Log
                          </a>
                          <div className="dropdown-divider" />
                          <a
                            className="dropdown-item"
                            href="#"
                            data-toggle="modal"
                            data-target="#logoutModal"
                          >
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                            Logout
                          </a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                  {/* End of Topbar */}
                  {/* Begin Page Content */}
                  {children}
                  {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
                {/* Footer */}
                {/* <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright © Your Website 2021</span>
                    </div>
                  </div>
                </footer> */}
                {/* End of Footer */}
              </div>
            </div>
            {/* End of Content Wrapper */}
          </div>
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>
        </div>
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default AdminLayout;
