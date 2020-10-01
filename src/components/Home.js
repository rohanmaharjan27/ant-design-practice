import { Alert, Card, Carousel, Layout, Menu, Pagination, Space } from "antd";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ProductTable from "./ProductTable";
import Meta from "antd/lib/card/Meta";
import BlogModal from "./BlogModal";

function Home() {
  const { Header, Footer, Sider, Content } = Layout;

  const { SubMenu } = Menu;

  const modalContentStyle = {
    height: "200px",
    color: "#fff",
    lineHeight: "200px",
    textAlign: "center",
    background: "#0d59d4",
  };

  const title = () => {
    document.title = "AntDesign Practice";
  };

  return (
    <>
      <title>{title()}</title>
      <Layout>
        <Header className="header">
          <div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">
                <SettingOutlined />
              </Menu.Item>
              <Menu.Item key="2">Dashboard</Menu.Item>
              <Menu.Item key="3">Account</Menu.Item>
              <Menu.Item key="4">Logout</Menu.Item>
            </Menu>
          </div>
        </Header>
        <Layout>
          <Sider width={300} breakpoint="lg" collapsedWidth="0">
            <Menu defaultSelectedKeys={["1"]} mode="inline">
              <SubMenu key="sub1" icon={<MailOutlined />} title="Manage">
                <Menu.ItemGroup key="g1" title="Products">
                  <Menu.Item key="1">Add Products</Menu.Item>
                  <Menu.Item key="2">View Products</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g1" title="Users">
                  <Menu.Item key="3">View Users</Menu.Item>
                  <Menu.Item key="4">View User Details</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Orders">
                <Menu.Item key="5">View Current Orders</Menu.Item>
                <Menu.Item key="6">View Completed Orders</Menu.Item>
                <SubMenu key="sub3" title="Canceled Orders">
                  <Menu.Item key="7">Canceled</Menu.Item>
                  <Menu.Item key="8">Refunded</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                icon={<SettingOutlined />}
                title="Visualization"
              >
                <Menu.Item key="9">Profit Graphs</Menu.Item>
                <Menu.Item key="10">Website Usage</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <ProductTable />
            </Content>
          </Layout>
        </Layout>
        <Layout>
          <Footer style={{ backgroundColor: "yellow" }}>
            <Carousel style={{ width: 400, margin: "auto" }} autoplay>
              <div>
                <h3 style={modalContentStyle}>My</h3>
              </div>
              <div>
                <h3 style={modalContentStyle}>Name</h3>
              </div>
              <div>
                <h3 style={modalContentStyle}>Is</h3>
              </div>
              <div>
                <h3 style={modalContentStyle}>Rohan</h3>
              </div>
            </Carousel>
            <Space direction="vertical">
              <Card
                hoverable
                style={{ width: 240, margin: "auto" }}
                cover={
                  <img
                    alt="ProfileImage"
                    src="https://vignette.wikia.nocookie.net/war-of-east-hunter-x-hunter/images/2/2d/Gon_Freecss.png/revision/latest?cb=20190811191852"
                  />
                }
              >
                <Meta title="Gon Freecss" description="Hunter" />
              </Card>
              <BlogModal />

              <Alert
                style={{ width: 300, margin: "auto" }}
                message="Alert 1"
                type="success"
                showIcon
                closable
              />
              <Alert
                style={{ width: 300, margin: "auto" }}
                message="Alert 2"
                description="Practicing AntDesign"
                type="success"
                showIcon
              />
              <Pagination defaultCurrent={1} total={50} />
            </Space>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Home;
