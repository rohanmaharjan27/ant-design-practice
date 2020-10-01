import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Space,
  Button,
  Image,
  PageHeader,
  Popconfirm,
  message,
} from "antd";
import "../css/style.css";
import Search from "antd/lib/input/Search";
import UpdateProductModal from "./UpdateProductModal";
import Column from "antd/lib/table/Column";
import BlogModal from "./BlogModal";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState({});

  const style = {
    overflowY: "scroll",
  };
  console.log(products, "asdf");

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        return product.productName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);

  const data =
    filteredProducts.length > 0 &&
    filteredProducts.map((product) => ({
      key: product._id,
      productId: product._id,
      productName: product.productName,
      productPrice: product.productPrice,
      productCategory: product.productCategory,
      productDescription: product.productDescription,
      productManufacturer: product.productManufacturer,
      productImage: product.productImageName,
    }));

  const DeleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/products/deleteproduct/${id}`)
      .then((res) => {
        message.success(res.data.message_success);
      })
      .catch((err) => {
        message.error(err);
      });
  };

  console.log(products);

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "productName",
  //     key: "productName",
  //     width: "15%",
  //   },
  //   {
  //     title: "Price",
  //     dataIndex: "productPrice",
  //     key: "productPrice",
  //     render: (value) => `$ ${value}`,
  //     width: "10%",
  //   },
  //   {
  //     title: "Category",
  //     dataIndex: "productCategory",
  //     key: "productCategory",
  //     width: "10%",
  //   },
  //   {
  //     title: "Description",
  //     dataIndex: "productDescription",
  //     key: "productDescription",
  //     width: "30%",
  //   },
  //   {
  //     title: "Manufacturer",
  //     dataIndex: "productManufacturer",
  //     key: "productManufacturer",
  //     width: "10%",
  //   },
  //   {
  //     title: "Image",
  //     dataIndex: "productImage",
  //     key: "productImage",
  //     render: (value) => (
  //       <Image
  //         width={125}
  //         height={100}
  //         src={`http://localhost:8000/images/${value}`}
  //       />
  //     ),
  //     width: "15%",
  //   },
  //   {
  //     title: "Action",
  //     dataIndex: "productId",
  //     key: "productId",

  //     render: (value) => (
  //       <Space size="middle">
  //         <Button type="primary" onClick={}>
  //           Update
  //         </Button>
  //         <Popconfirm
  //           title="Are you sure you want to delete this product?"
  //           okText="Yes"
  //           cancelText="No"
  //           onConfirm={() => DeleteProduct(value)}
  //         >
  //           <Button type="danger">Delete</Button>
  //         </Popconfirm>
  //       </Space>
  //     ),
  //     width: "10%",
  //   },
  // ];

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Products"
        subTitle="View Products"
      />
      <Space direction="vertical" size="middle">
        <Search
          placeholder="Search products"
          onChange={(e) => setSearch(e.target.value)}
          style={{ margin: "auto", width: "50%" }}
        />
        <Table dataSource={data} style={style}>
          <Column
            title="Name"
            dataIndex="productName"
            key="productName"
            width="15%"
          />
          <Column
            title="Price"
            dataIndex="productPrice"
            key="productPrice"
            render={(value) => `$ ${value}`}
            width="10%"
          />
          <Column
            title="Category"
            dataIndex="productCategory"
            key="productCategory"
            width="10%"
          />
          <Column
            title="Description"
            dataIndex="productDescription"
            key="productDescription"
            width="30%"
          />
          <Column
            title="Manufacturer"
            dataIndex="productManufacturer"
            key="productManufacturer"
            width="10%"
          />
          <Column
            title="Image"
            dataIndex="productImage"
            key="productImage"
            render={(value) => (
              <>
                <Image
                  width={125}
                  height={100}
                  src={`http://localhost:8000/images/${value}`}
                  alt="Product Image"
                />
              </>
            )}
            width="15%"
          />
          <Column
            title="Action"
            dataIndex="productId"
            key="action"
            render={(value) => (
              <Space size="middle">
                <UpdateProductModal value={value} />
                <Popconfirm
                  title="Are you sure you want to delete this product?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => DeleteProduct(value)}
                >
                  <Button type="danger">Delete</Button>
                </Popconfirm>
              </Space>
            )}
          />
        </Table>
      </Space>
    </>
  );
}

export default ProductTable;
