import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";

function ImageUploadButtons() {
  const [state, setState] = useState({
    fileList: [],
    uploading: false,
  });

  const handleUpload = () => {
    const { fileList } = state;
    const formData = new FormData();
    fileList.map((file) => {
      formData.append("files[]", file);
    });
    setState({ ...state, uploading: true });

    axios
      .post("https://www.mocky.io/v2/5cc8019d300000980a055e76", formData)
      .then((res) => {
        console.log(state.fileList);
        setState({ fileList: [], uploading: false });
        message.success(`upload successfully.`);
      })
      .catch((err) => {
        setState({ ...state, uploading: false });
        message.error("upload failed.");
      });
  };

  const { fileList, uploading } = state;
  const props = {
    onRemove: (file) => {
      setState((state) => {
        const index = state.fileList.indexOf(file);
        const newFileList = state.fileList.slice();
        newFileList.splice(index, 1);
        return {
          fileList: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      setState((state) => ({
        fileList: [...state.fileList, file],
      }));
      return false;
    },
    fileList,
  };

  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={state.fileList.length === 0}
        loading={state.uploading}
        style={{ marginTop: 16 }}
      >
        {state.ploading ? "Uploading" : "Start Upload"}
      </Button>
    </>
  );
}

export default ImageUploadButtons;
