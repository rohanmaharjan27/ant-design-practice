import { Layout } from "antd";
import React from "react";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";

function CommonLayout(props) {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout>
        <Header className="header">
          <TopMenu />
        </Header>
        <Layout>
          <Sider width={300} breakpoint="lg" collapsedWidth="0">
            <SideMenu />
          </Sider>
          <Layout>
            <Content>{props.children}</Content>
          </Layout>
        </Layout>
        <Layout></Layout>
      </Layout>
    </>
  );
}
export default CommonLayout;
