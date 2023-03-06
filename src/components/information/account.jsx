import React, { useState, useRef } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";

const Account = () => {
  registerLocale("es", vi);
  const [image_view, setImageView] = useState(
    "https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/82519360_1512110088942550_4769502543019507712_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MWupJpDpu9MAX-Tu9NK&_nc_ht=scontent-hkt1-2.xx&oh=00_AfDWHS1ouBIkZerv9MlWdJiQAPDWeFLKj3nk7--_7j3QvQ&oe=642C28AE"
  );
  const [image, setImage] = useState(
    "82519360_1512110088942550_4769502543019507712_n.jpg"
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [file, setFile] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
          e.target.files[0].type == "image/jpeg" ||
          e.target.files[0].type == "image/webp" ||
          e.target.files[0].type == "image/png"
        ) {
          setFile(myNewFile);
          setImageView(URL.createObjectURL(myNewFile));
        } else {
          alert(
            "Vui lòng chọn lại định dạng ảnh. Định dạng ảnh gồm jpg, jpeg, png và webp"
          );
        }
      }
    }
  };
  return (
    <>
      <div className="information-account">
        <div className="information-account-header">
          <div className="information-account-header-title">Hồ Sơ Của Tôi</div>
          <div className="information-account-header-sub">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </div>
        </div>
        <div className="information-account-main">
          <div className="information-account-main-infor">
            <div className="information-account-main-infor-left">
              <div className="information-account-main-infor-left-item">
                Tên đăng nhập
              </div>
              <div className="information-account-main-infor-left-item">
                Tên
              </div>
              <div className="information-account-main-infor-left-item">
                Email
              </div>
              <div className="information-account-main-infor-left-item">
                Số điện thoại
              </div>
              <div className="information-account-main-infor-left-item">
                Giới tính
              </div>
              <div className="information-account-main-infor-left-item">
                Ngày sinh
              </div>
            </div>
            <div className="information-account-main-infor-right">
              <div className="information-account-main-infor-right-text">
                miroku_1995
              </div>
              <input
                className="information-account-main-infor-right-input"
                value={`120`}
              ></input>
              <div className="information-account-main-infor-right-email">
                miroku_1995{" "}
                <span className="information-account-main-infor-right-change">
                  Thay đổi
                </span>
              </div>
              <div className="information-account-main-infor-right-email">
                miroku_1995{" "}
                <span className="information-account-main-infor-right-change">
                  Thay đổi
                </span>
              </div>
              <div className="information-account-main-infor-right-sec">
                <label className="information-account-main-infor-right-sec-item">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="information-account-main-infor-right-sec-item-radio"
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
                    value="female"
                  />
                  <span className="information-account-main-infor-right-sec-item-text">
                    Nữ
                  </span>
                </label>
                <label className="information-account-main-infor-right-sec-item">
                  <input
                    className="information-account-main-infor-right-sec-item-radio"
                    type="radio"
                    name="gender"
                    value="other"
                  />
                  <span className="information-account-main-infor-right-sec-item-text">
                    Khác
                  </span>
                </label>
              </div>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                locale={vi}
                placeholderText="Chọn ngày"
                className="information-account-main-infor-right-date"
              />
            </div>
          </div>
          <div className="information-account-main-image">
            <div
              className="information-account-main-image-avtar"
              style={{
                backgroundImage: `url(${image_view})`,
              }}
            ></div>
            <div className="information-account-main-image-name">{image}</div>
            <div
              className="information-account-main-image-btn"
              onClick={handleUploadClick}
            >
              Chọn Ảnh
            </div>
            <input
              id="file-upload"
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={Input}
            />
            <div className="information-account-main-image-text">
              Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
