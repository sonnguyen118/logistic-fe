import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../thunk/authThunks";
import { registerThunk } from "../thunk/authThunks";
import { userReceived } from "../actions/authActions";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [resister, setRegister] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userReceived());
  }, [dispatch]);
  const products = useSelector((state) => state.authen.user);
  console.log(products, "products");
  const [lable, setLable] = useState(null);
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      /* Lấy dữ liệu từ form */
      email: "chidan@gmail.com",
      password: "123456",
    };
    dispatch(loginThunk(userData));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      /* Lấy dữ liệu từ form */
      username: "12",
      name: "54",
    };
    dispatch(registerThunk(userData));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lableValue = searchParams.get("lable");
    setLable(lableValue);
  }, [location.search]);

  useEffect(() => {
    console.log(`Lable changed to ${lable}`);
    if (Number(lable) === 2) {
      setRegister(true);
      setLogin(false);
      console.log("TH1");
    } else if (Number(lable) === 1) {
      setLogin(true);
      setRegister(false);
      console.log("TH2");
    }
  }, [lable]);
  const [imageUrl, setImageUrl] = useState("/chiphilogistics-1.jpeg");
  return (
    <>
      <Helmet>
        <title>
          Đăng Nhập | LÊ PHƯƠNG - VẬN CHUYỂN VÀ ĐẶT HÀNG TRUNG - VIỆT
        </title>
      </Helmet>
      <Layout>
        <div
          className="login-wrap"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div className="list-navigation-special mt-5">
            <Link to={`/`}>
              <div className="list-navigation-item">
                <i className="fa-solid fa-house list-navigation-home"></i>
                <span className="list-navigation-text">Trang Chủ</span>
              </div>
            </Link>
            <i className="fa-solid fa-angles-right list-navigation-icon"></i>
            <span className="list-navigation-text-no">Đăng ký / Đăng nhập</span>
          </div>
          <div className="login text-center">
            <div className="card backfround-transparent">
              <div className="card-header p-2">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a
                      className={login ? `nav-link active` : `nav-link`}
                      href="#activity"
                      data-toggle="tab"
                    >
                      Đăng Nhập
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={resister ? `nav-link active` : `nav-link`}
                      href="#timeline"
                      data-toggle="tab"
                    >
                      Đăng Ký
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="tab-content">
                  <div
                    className={login ? "tab-pane active" : "tab-pane"}
                    id={login ? "activity" : "timeline"}
                  >
                    <form>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div className="form-check mt-2 mb-2 login-remember">
                        <input
                          className="form-check-input login-remember-checkbox"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <div
                          className="login-remember-text mt-2"
                          for="flexCheckDefault"
                        >
                          Nhớ mật khẩu
                        </div>
                      </div>
                      <button
                        className="w-100 btn btn-lg btn-primary"
                        type="submit"
                        onClick={(e) => handleLogin(e)}
                      >
                        Đăng nhập
                      </button>
                      <div className="d-flex mt-3 justify-content-between align-items-center">
                        <Link to={`/forgot-password`}>
                          <span className="login-forgotpass">
                            Quên mật khẩu ?
                          </span>
                        </Link>

                        <a
                          href="#timeline"
                          data-toggle="tab"
                          className="login-question"
                          onClick={() => {
                            setLogin(false);
                            setRegister(true);
                          }}
                        >
                          Bạn chưa có tài khoản ? Hãy Tạo một tài khoản mới
                        </a>
                      </div>
                    </form>
                  </div>
                  {/* /.tab-pane */}
                  <div
                    className={resister ? "tab-pane active" : "tab-pane"}
                    id={resister ? "activity" : "timeline"}
                  >
                    {/* The timeline */}
                    <form className="needs-validation" novalidate>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          required
                        />
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword1"
                          placeholder="Password"
                          required
                          name="up1"
                        />
                        <label htmlFor="floatingPassword password1">
                          Password
                        </label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword2"
                          placeholder="RePassword"
                          name="up2"
                        />
                        <label htmlFor="floatingPassword2">RePassword</label>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-floating w-50 login-input-l">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="Họ"
                            required
                          />
                          <label
                            htmlFor="validationCustom01"
                            className="form-label"
                          >
                            Họ
                          </label>
                        </div>
                        <div className="form-floating w-50 login-input-r">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="Tên"
                            required
                          />
                          <label
                            htmlFor="validationCustom01"
                            className="form-label"
                          >
                            Tên
                          </label>
                        </div>
                      </div>

                      <button
                        className="w-100 btn btn-lg btn-primary"
                        type="submit"
                        onClick={(e) => handleRegister(e)}
                      >
                        Đăng ký
                      </button>
                      <div className="d-flex mt-3 justify-content-between align-items-center">
                        <a
                          href="#activity"
                          data-toggle="tab"
                          className="login-question"
                          onClick={() => {
                            setLogin(true);
                            setRegister(false);
                          }}
                        >
                          Bạn đã có tài khoản ? Hãy đăng nhập
                        </a>
                      </div>
                    </form>
                  </div>
                  {/* /.tab-pane */}
                </div>
                {/* /.tab-content */}
              </div>
              {/* /.card-body */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
