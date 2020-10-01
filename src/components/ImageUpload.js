import React, { useState } from "react";
import axios from "axios";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  console.log(selectedFile);

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    axios
      .post("https://www.mocky.io/v2/5cc8019d300000980a055e76", fd)
      .then((info) => {
        const { status } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler} disabled={selectedFile === null}>
        Upload
      </button>
    </>
  );
}
export default ImageUpload;
