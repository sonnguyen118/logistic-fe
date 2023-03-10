import React, { useState, useRef, useEffect } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";
import {
  formatDatePikertoSQL,
  formatSQLtoDatePicker,
} from "../../utils/formatDate";
import { getUser, updateUser } from "../../service/userService";
import {
  notifiError,
  swweetSucceeded,
  notifiWarning,
} from "../../utils/notify";
import Loading from "../Loading";

const Account = () => {
  registerLocale("es", vi);
  const [image_view, setImageView] = useState(
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/82519360_1512110088942550_4769502543019507712_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MWupJpDpu9MAX-Tu9NK&_nc_ht=scontent-hkt1-2.xx&oh=00_AfDWHS1ouBIkZerv9MlWdJiQAPDWeFLKj3nk7--_7j3QvQ&oe=642C28AE"
  );
  const [image, setImage] = useState(
    "82519360_1512110088942550_4769502543019507712_n.jpg"
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [user_email, setUserEmail] = useState("");
  const [user_name, setUserName] = useState("");
  const [user_name2, setUserName2] = useState("");
  const [user_phone, setUserPhone] = useState("");
  const [user_other, setUserOther] = useState(null);
  const [user_general, setUserGeneral] = useState("");
  const [user_day, setUserDay] = useState(null);
  const [user_month, setUserMonth] = useState(null);
  const [user_year, setUserYear] = useState(null);
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [active_account, setActiveAccount] = useState(0);
  // console.log(data);

  useEffect(() => {
    const local_token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    setUserEmail(email);
    if (local_token) {
      // dispatch(getDataUser(local_token, id));
      const fetchData = async () => {
        const navbarData = await getUser(local_token, id);
        if (navbarData.success) {
          setData(navbarData.data);
          setActiveAccount(1);
        } else if (navbarData.message === "T??i kho???n ch??a ???????c k??ch ho???t") {
          notifiWarning("T??i kho???n ch??a ???????c k??ch ho???t");
          setActiveAccount(2);
        } else {
          notifiError("L???y d??? li???u th???t b???i");
          // window.location.replace("/");
        }
      };
      fetchData();
    } else if (local_token == null) {
    }
  }, []);

  useEffect(() => {
    // console.log(data, "????y l?? data");
    if (data) {
      setUserName(data.first_name);
      setUserName2(data.last_name);
      setUserOther(data.otherName);
      setUserPhone(data.phone);
      setUserGeneral(data.gender);
      setSelectedDate(data.birthday);
      if (data.birthday !== null) {
        const dateObj = new Date(data.birthday);
        setUserYear(dateObj.getFullYear());
        setUserMonth(dateObj.getMonth() + 1);
        setUserDay(dateObj.getDate());
      }
    }
  }, [data]);

  const fileInput = useRef(null);
  const handleUploadClick = () => {
    fileInput.current.click();
  };
  const Input = (e) => {
    if (e.target.files[0]) {
      var myNewFile = new File(
        [e.target.files[0]],
        new Date().getTime() + "_" + e.target.files[0].name.replace(/ /g, "_"),
        { type: e.target.files[0].type }
      );
      setImage(myNewFile.name);
      if (e.target.files && e.target.files[0]) {
        if (
          e.target.files[0].type == "image/jpg" ||
          e.target.files[0].type == "image/jpeg" ||
          e.target.files[0].type == "image/webp" ||
          e.target.files[0].type == "image/png"
        ) {
          setFile(myNewFile);
          setImageView(URL.createObjectURL(myNewFile));
        } else {
          alert(
            "Vui l??ng ch???n l???i ?????nh d???ng ???nh. ?????nh d???ng ???nh g???m jpg, jpeg, png v?? webp"
          );
        }
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const local_token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    var isoString = "";
    console.log(user_day, user_month, user_year);
    if (Number(user_day) > 0 && Number(user_month) > 0 && Number(user_year)) {
      // const dateObj = new Date(Date.UTC(user_year, user_month - 1, user_day));
      // isoString = dateObj.toISOString();
      isoString = user_year + "-" + user_month + "-" + user_day;
    }
    let body = {
      id: id,
      firstName: user_name,
      lastName: user_name2,
      gender: user_general,
      phone: user_phone,
      birthday: isoString,
      avatar: image,
      otherName: user_other,
    };
    const checkphone = /^0\d{8,11}$/;
    const checkname = /\d/;
    if (user_phone !== null && !checkphone.test(user_phone)) {
      notifiWarning("S??? ??i???n tho???i kh??ng ????ng ?????nh d???ng");
    } else if (user_name !== null && checkname.test(user_name)) {
      notifiWarning("T??n kh??ng ???????c ch???a k?? t??? s???");
    } else {
      if (local_token) {
        const fetchData = async () => {
          const navbarData = await updateUser(local_token, body);
          if (navbarData.success) {
            swweetSucceeded(
              "Th??nh c??ng",
              "B???n ???? th??nh c??ng c???p nh???t d??? li???u c?? nh??n !!!",
              "success",
              false,
              800,
              "/information/account"
            );
          } else {
            notifiError("L???y d??? li???u th???t b???i");
          }
        };
        fetchData();
      } else if (local_token == null) {
      }
    }
  };
  // test

  return (
    <>
      <div className="information-account">
        <div className="information-account-header">
          <div className="information-account-header-title">H??? S?? C???a T??i</div>
          <div className="information-account-header-sub">
            Qu???n l?? th??ng tin h??? s?? ????? b???o m???t t??i kho???n
          </div>
        </div>
        {active_account !== undefined && active_account !== 0 ? (
          <>
            {active_account !== 2 ? (
              <>
                <>
                  <div className="information-account-main">
                    <div className="information-account-main-infor">
                      <div className="information-account-main-infor-left">
                        <div className="information-account-main-infor-left-item">
                          T??n ????ng nh???p
                        </div>
                        <div className="information-account-main-infor-left-item">
                          H???
                        </div>
                        <div className="information-account-main-infor-left-item">
                          T??n
                        </div>
                        <div className="information-account-main-infor-left-item">
                          B?? danh
                        </div>
                        <div className="information-account-main-infor-left-item">
                          Email
                        </div>
                        <div className="information-account-main-infor-left-item">
                          S??? ??i???n tho???i
                        </div>
                        <div className="information-account-main-infor-left-item">
                          Gi???i t??nh
                        </div>
                        <div className="information-account-main-infor-left-item">
                          Ng??y sinh
                        </div>
                      </div>
                      {user_email !== undefined &&
                      user_name !== undefined &&
                      user_phone !== undefined &&
                      user_general !== undefined &&
                      user_day !== undefined &&
                      user_month !== undefined &&
                      user_year !== undefined ? (
                        <div className="information-account-main-infor-right">
                          <div className="information-account-main-infor-right-text">
                            {user_email}
                          </div>
                          <input
                            className="information-account-main-infor-right-input"
                            value={user_name2}
                            onChange={(e) => setUserName2(e.target.value)}
                          ></input>
                          <input
                            className="information-account-main-infor-right-input"
                            value={user_name}
                            onChange={(e) => setUserName(e.target.value)}
                          ></input>
                          <div className="information-account-main-infor-right-email">
                            {user_other ? (
                              <>{user_other}</>
                            ) : (
                              <>Ch??a c?? b?? danh</>
                            )}
                            <span className="information-account-main-infor-right-change">
                              Thay ?????i
                            </span>
                          </div>
                          <div className="information-account-main-infor-right-email">
                            {user_email}
                            <span className="information-account-main-infor-right-change">
                              Thay ?????i
                            </span>
                          </div>
                          <div className="information-account-main-infor-right-email">
                            <input
                              className="information-account-main-infor-right-input"
                              value={user_phone}
                              onChange={(e) => setUserPhone(e.target.value)}
                            ></input>
                          </div>
                          <div className="information-account-main-infor-right-sec">
                            <label className="information-account-main-infor-right-sec-item">
                              <input
                                type="radio"
                                name="gender"
                                value={1}
                                className="information-account-main-infor-right-sec-item-radio"
                                checked={user_general === 1 ? true : false}
                                onChange={(e) => setUserGeneral(1)}
                              />
                              <span className="information-account-main-infor-right-sec-item-text">
                                Nam
                              </span>
                            </label>
                            <label className="information-account-main-infor-right-sec-item">
                              <input
                                className="information-account-main-infor-right-sec-item-radio"
                                type="radio"
                                name="gender"
                                value={0}
                                checked={user_general === 0 ? true : false}
                                onChange={(e) => setUserGeneral(0)}
                              />
                              <span className="information-account-main-infor-right-sec-item-text">
                                N???
                              </span>
                            </label>
                          </div>
                          <div className="information-account-main-infor-right-date">
                            <input
                              type={"number"}
                              className="information-account-main-infor-right-date-item"
                              placeholder="Ng??y"
                              value={user_day}
                              min={1}
                              max={31}
                              onChange={(e) => setUserDay(e.target.value)}
                            />
                            <input
                              type={"number"}
                              className="information-account-main-infor-right-date-item"
                              placeholder="Th??ng"
                              value={user_month}
                              min={1}
                              max={12}
                              onChange={(e) => setUserMonth(e.target.value)}
                            />
                            <input
                              type={"number"}
                              className="information-account-main-infor-right-date-item"
                              placeholder="N??m"
                              min={1920}
                              max={2020}
                              value={user_year}
                              onChange={(e) => setUserYear(e.target.value)}
                            />
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="information-account-main-image">
                      <div
                        className="information-account-main-image-avtar"
                        style={{
                          backgroundImage: `url(${image_view})`,
                        }}
                      ></div>
                      {image !== undefined ? (
                        <>
                          <div className="information-account-main-image-name">
                            {image}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      <div
                        className="information-account-main-image-btn"
                        onClick={handleUploadClick}
                      >
                        Ch???n ???nh
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        ref={fileInput}
                        style={{ display: "none" }}
                        onChange={Input}
                      />
                      <div className="information-account-main-image-text">
                        D???ng l?????ng file t???i ??a 1 MB ?????nh d???ng:.JPEG, .PNG
                      </div>
                    </div>
                  </div>
                  <div
                    className="information-account-btn"
                    onClick={handleSubmit}
                  >
                    C???p nh???t
                  </div>
                </>
              </>
            ) : (
              <>
                <div className="information-account-warnning">
                  <i className="information-account-warnning-icon fa-sharp fa-solid fa-circle-exclamation"></i>
                  <div className="information-account-warnning-text">
                    T??i kho???n c???a qu?? kh??ch ch??a ???????c k??ch ho???t !!<br></br>
                    H??y ch??? ?????i ho???c li??n h??? ngay v???i{" "}
                    <strong>qu???n tr??? vi??n</strong> ????? s??? d???ng nh???ng t??nh n??ng
                    !!!
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="list-order-none">
              <div className="list-order-none-loading">
                <Loading />
              </div>
              <div className="list-order-none-text">??ang t???i d??? li???u</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Account;
