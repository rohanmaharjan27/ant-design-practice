import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import React, { useState } from "react";

export function Imageuploadantd() {
  const { Dragger } = Upload;

  const onChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const beforeUpload = (file) => {
    //CHECK IF JPR OR PNG
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    //CHECK FILE SIZE
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    return isJpgOrPng && isLt2M;
  };

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <Dragger
        name="file"
        multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={onChange}
        beforeUpload={beforeUpload}
        style={{
          width: "50%",
          maxWidth: "400px",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
}
export default Imageuploadantd;
