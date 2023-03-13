import React, { useState, useEffect } from "react";
import { CKEditor } from "ckeditor4-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getSystemPost, updateSystemPost } from "../../service/systemServide";
import "react-datepicker/dist/react-datepicker.css";
import {
  notifiError,
  swweetSucceeded,
  notifiWarning,
  swweetSucceededReload,
} from "../../../utils/notify";

const config = require("../../../config/variable");

const SystemPostPage = () => {
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [link, setLink] = useState(null);
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [decription, setDecription] = useState(null);
  const [userId, setUserId] = useState(null);
  const [tag, setTag] = useState(null);
  const onEditorChange = (event) => {
    let data = event.editor.getData();
    setContent(data);
  };

  useEffect(() => {
    const local_token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    setUserId(id);
    if (local_token && location.pathname) {
      // lấy dữ liệu menu
      const fetchData = async () => {
        let body = {
          userId: id,
        };
        const navbarData = await getSystemPost(
          local_token,
          location.pathname.slice(20),
          body
        );

        if (navbarData.success) {
          setData(navbarData.data);
        } else {
          notifiError("Lấy dữ liệu thất bại");
        }
      };
      fetchData();
    } else {
      window.location.replace("/login");
    }
  }, []);
  useEffect(() => {
    if (data) {
      setContent(data.content);
      setId(data.id);
      setTitle(data.title);
      setDecription(data.description);
      setLink(data.link);
      setTag(data.tag);
    }
  }, [data]);

  // upload
  const handleSubmit = () => {
    const local_token = localStorage.getItem("token");
    let body = {
      id: id,
      title: title,
      link: location.pathname.slice(19),
      menu_id: userId,
      content: content,
      description: decription,
      isEnabled: true,
      tag: tag,
    };

    console.log(body);
    // cập nhật dữ liệu
    const fetchData = async () => {
      const navbarData = await updateSystemPost(local_token, body);
      if (navbarData.success) {
        swweetSucceededReload(
          "Thành công",
          "Bạn đã thành công cập nhật thông tin bài viết Biểu Phí",
          "success",
          false,
          600
        );
      } else {
        notifiError("Cập nhật dữ liệu thất bại");
      }
    };
    fetchData();
  };
  return (
    <>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Chỉnh sửa bài đăng</h3>
        </div>
        <>
          {content || content === "" ? (
            <CKEditor
              initData={content}
              editorUrl={`${config.website}/ckeditor/ckeditor.js`}
              config={config.ckeditor4}
              onChange={(e) => onEditorChange(e)}
            />
          ) : (
            <></>
          )}
        </>
        <div className="card-footer">
          <div className="btn btn-primary" onClick={handleSubmit}>
            Cập nhật thông tin
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemPostPage;
