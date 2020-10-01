import Dragger from "antd/lib/upload/Dragger";
import React, { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";

function Imageuploadpractice() {
  const [state, setState] = useState({
    imageUrl: "",
    loading: false,
  });

  const uploadButton = (
    <div>
      {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
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

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setState({ imageUrl: "", loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        setState({
          imageUrl: imageUrl,
          loading: false,
        })
      );
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {state.imageUrl ? (
          <img src={state.imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
}

export default Imageuploadpractice;
