import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { handleLoginChange, handleRegisterChange } from "../utils/formLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkEmail, checkPassword, checkName } from "../utils/validateValue";
import {
  notifiSucceeded,
  notifiError,
  notifiWarning,
  swweetSucceeded,
} from "../utils/notify";

import { loginUser, registerUser } from "../service/userService";

const Login = () => {
  const navigation = useNavigate();
  const [login, setLogin] = useState(true);
  const [resister, setRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    rePassword: "",
    firstName: "",
    lastName: "",
  });
  const [saveInfor, setSaveInfor] = useState(false);
  const [validate, setValidate] = useState([false, false, false, false, false]);
  const [imageUrl, setImageUrl] = useState("/chiphilogistics-1.jpeg");

  const [lable, setLable] = useState(null);
  const location = useLocation();
  const handleChangeRegister = (e, type) => {
    handleRegisterChange(
      e,
      type,
      registerData,
      setRegisterData,
      setValidate,
      validate
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const res = await loginUser(loginData);
      if (res.success) {
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("firstName", res.data.firstName);
        localStorage.setItem("lastName", res.data.lastName);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        swweetSucceeded(
          "Th??nh c??ng",
          "????ng nh???p th??nh c??ng",
          "success",
          false,
          1000,
          "/"
        );
      } else {
        notifiError(res.message);
      }
    };
    fetchData();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (checkEmail(registerData.email)) {
      notifiError("H??y nh???p ????ng ?????nh d???ng Email");
    } else if (checkPassword(registerData.password)) {
      notifiError("M???t kh???u kh??ng ???????c ??t h??n 6 k?? t???");
    } else if (
      checkName(registerData.firstName) ||
      checkName(registerData.lastName)
    ) {
      notifiError("T??n kh??ng ???????c bao g???m ch??? s???");
    } else {
      const fetchData = async () => {
        const res = await registerUser(registerData);
        if (res.success) {
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("firstName", res.data.firstName);
          localStorage.setItem("lastName", res.data.lastName);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          console.log(res.data);
          swweetSucceeded(
            "Th??nh c??ng",
            "H??y ch??? qu???n tr??? vi??n ph?? duy???t t??i kho???n, ??i???u n??y c?? th??? m???t ch??t th???i gian !!",
            "success",
            false,
            2000,
            "/"
          );
        } else {
          notifiError(res.message);
        }
      };
      fetchData();
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lableValue = searchParams.get("lable");
    setLable(lableValue);
  }, [location.search]);

  useEffect(() => {
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

  // c??c h???m notify !
  const notifiSucceeded = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <Helmet>
        <title>
          ????ng Nh???p | L?? PH????NG - V???N CHUY???N V?? ?????T H??NG TRUNG - VI???T
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
                <span className="list-navigation-text">Trang Ch???</span>
              </div>
            </Link>
            <i className="fa-solid fa-angles-right list-navigation-icon"></i>
            <span className="list-navigation-text-no">????ng k?? / ????ng nh???p</span>
          </div>
          <div className="login text-center">
            <div className="card backfround-transparent">
              <div className="card-header p-2">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <Link
                      to={"/login?lable=1"}
                      className={login ? `nav-link active` : `nav-link`}
                      href="#activity"
                      data-toggle="tab"
                    >
                      ????ng Nh???p
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/login?lable=2"}
                      className={resister ? `nav-link active` : `nav-link`}
                      href="#timeline"
                      data-toggle="tab"
                    >
                      ????ng K??
                    </Link>
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
                          name="email"
                          autoComplete={saveInfor ? "username" : "off"}
                          onChange={(event) =>
                            setLoginData(handleLoginChange(event, loginData))
                          }
                        />
                        <label htmlFor="floatingInput">?????a ch??? Email</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          name="password"
                          autoComplete={saveInfor ? "current-password" : "off"}
                          onChange={(event) =>
                            setLoginData(handleLoginChange(event, loginData))
                          }
                        />
                        <label htmlFor="floatingPassword">M???t kh???u</label>
                        {showPassword ? (
                          <i
                            className="login-eye-slash fa-solid fa-eye-slash"
                            onClick={() => setShowPassword(!showPassword)}
                          ></i>
                        ) : (
                          <i
                            className="login-eye fa-solid fa-eye"
                            onClick={() => setShowPassword(!showPassword)}
                          ></i>
                        )}
                      </div>

                      <div className="form-check mt-2 mb-2 login-remember">
                        <input
                          className="form-check-input login-remember-checkbox"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          checked={saveInfor} // set checked status based on saveInfor state
                          onChange={() => setSaveInfor(!saveInfor)}
                        />
                        <div
                          className="login-remember-text mt-2"
                          for="flexCheckDefault"
                        >
                          Nh??? m???t kh???u
                        </div>
                      </div>
                      <button
                        className="w-100 btn btn-lg btn-primary"
                        type="submit"
                        onClick={(e) => handleLogin(e)}
                      >
                        ????ng nh???p
                      </button>
                      <div className="d-flex mt-3 justify-content-between align-items-center">
                        <Link to={`/forgot-password`}>
                          <span className="login-forgotpass">
                            Qu??n m???t kh???u ?
                          </span>
                        </Link>

                        <Link
                          to={"/login?lable=2"}
                          data-toggle="tab"
                          className="login-question"
                        >
                          B???n ch??a c?? t??i kho???n ? H??y T???o m???t t??i kho???n m???i
                        </Link>
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
                          name="email"
                          onChange={(e) => handleChangeRegister(e, "email")}
                        />
                        <label htmlFor="floatingInput">?????a ch??? Email</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type={showPassword1 ? "text" : "password"}
                          className="form-control"
                          id="floatingPassword1"
                          placeholder="Password"
                          required
                          name="password"
                          onChange={(e) => handleChangeRegister(e, "password")}
                        />
                        <label htmlFor="floatingPassword password1">
                          M???t kh???u
                        </label>
                        {showPassword1 ? (
                          <i
                            className="login-eye-slash fa-solid fa-eye-slash"
                            onClick={() => setShowPassword1(!showPassword1)}
                          ></i>
                        ) : (
                          <i
                            className="login-eye fa-solid fa-eye"
                            onClick={() => setShowPassword1(!showPassword1)}
                          ></i>
                        )}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type={showPassword1 ? "text" : "password"}
                          className="form-control"
                          id="floatingPassword2"
                          placeholder="RePassword"
                          name="rePassword"
                          onChange={(e) =>
                            handleChangeRegister(e, "rePassword")
                          }
                        />
                        <label htmlFor="floatingPassword2">
                          Nh???p l???i m???t kh???u
                        </label>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-floating w-50 login-input-l">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="H???"
                            name="lastName"
                            onChange={(e) =>
                              handleChangeRegister(e, "lastName")
                            }
                          />
                          <label
                            htmlFor="validationCustom01"
                            className="form-label"
                          >
                            H???
                          </label>
                        </div>
                        <div className="form-floating w-50 login-input-r">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="T??n"
                            name="firstName"
                            onChange={(e) =>
                              handleChangeRegister(e, "firstName")
                            }
                          />
                          <label
                            htmlFor="validationCustom01"
                            className="form-label"
                          >
                            T??n
                          </label>
                        </div>
                      </div>

                      <button
                        className="w-100 btn btn-lg btn-primary"
                        type="submit"
                        onClick={(e) => handleRegister(e)}
                      >
                        ????ng k??
                      </button>
                      <div className="d-flex mt-3 justify-content-between align-items-center">
                        <Link
                          to={"/login?lable=1"}
                          data-toggle="tab"
                          className="login-question"
                        >
                          B???n ???? c?? t??i kho???n ? H??y ????ng nh???p
                        </Link>
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
        <>
          <ToastContainer />
        </>
      </Layout>
    </>
  );
};

export default Login;
