import {
  Alert,
  Button,
  Form,
  Image,
  Input,
  message,
  Row,
  Space,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { InboxOutlined } from "@ant-design/icons";

function UpdateProductForm(props) {
  const [form] = Form.useForm();
  const { handleCancel, value } = props;

  const { Dragger } = Upload;

  const id = value.value;

  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productDescription: "",
    productManufacturer: "",
    productImageName: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((res) => {
        console.log({ ...product, ...res.data });
        setProduct({ ...product, ...res.data });
        form.setFieldsValue({
          productName: res.data.productName,
          productPrice: res.data.productPrice,
          productCategory: res.data.productCategory,
          productDescription: res.data.productDescription,
          productManufacturer: res.data.productManufacturer,
          productImageName: res.data.productImageName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/products/updateproduct/${id}`, product)
      .then((res) => {
        console.log(res.data.product);
        setProduct({ ...product, ...res.data.product });
        console.log("Product Updated");
        message.success(res.data.message_success);
      })
      .catch((err) => {
        message.error(err);
      });
  };

  console.log(product.productName, product.productImageName);

  const uploadImage = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

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
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <Form
        form={form}
        type="PUT"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        >
          <Image
            width={250}
            height={150}
            src={`http://localhost:8000/images/${product.productImageName}`}
          />
        </Form.Item>
        <Form.Item
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Dragger
            name="file"
            multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={onChange}
            beforeUpload={beforeUpload}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </Form.Item>
        <Form.Item
          name="productName"
          label="Product Name"
          rules={[{ required: true, message: "Please input product name" }]}
        >
          <Input
            placeholder="Product Name"
            onChange={(e) =>
              setProduct({ ...product, productName: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          name="productPrice"
          label="Product Price"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Product Price"
            onChange={(e) =>
              setProduct({ ...product, productPrice: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          name="productCategory"
          label="Product Category"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Product Category"
            onChange={(e) =>
              setProduct({ ...product, productCategory: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          name="productDescription"
          label="Product Description"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Product Description"
            onChange={(e) =>
              setProduct({ ...product, productDescription: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          name="productImageName"
          label="Product Image Name"
          placeholder="Product Image Name"
          rules={[{ required: true }]}
        >
          <Input
            disabled
            onChange={(e) =>
              setProduct({ ...product, productImageName: e.target.value })
            }
          />
        </Form.Item>
        <Row style={{ justifyContent: "flex-end" }}>
          <Space>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="primary" onClick={updateProduct}>
              Update
            </Button>
          </Space>
        </Row>
      </Form>
    </div>
  );
}

export default UpdateProductForm;
