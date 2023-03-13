import React, { useState, useEffect } from "react";
import { CKEditor } from "ckeditor4-react";
const config = require("../../../config/variable");

const SystemPostPage = () => {
  const [data, setData] = useState("");
  const onEditorChange = (event) => {
    let data = event.editor.getData();
    setData(data);
  };
  return (
    <>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Chỉnh sửa bài đăng hệ thống</h3>
        </div>
        <>
          <CKEditor
            initData={data}
            editorUrl={`${config.website}/ckeditor/ckeditor.js`}
            config={config.ckeditor4}
            onChange={(e) => onEditorChange(e)}
          />
        </>
        <div className="card-footer">
          <button type="submit" className="btn btn-primary">
            Cập nhật thông tin
          </button>
        </div>
      </div>
    </>
  );
};

export default SystemPostPage;
