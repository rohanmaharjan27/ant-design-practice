import { Layout } from "antd";
import React from "react";
import HomeFooter from "./HomeFooter";
import Profile from "./Profile";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";

function IndexHome() {
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
            <Content>
              <Profile />
            </Content>
          </Layout>
        </Layout>
        <Layout>
          <Footer>
            <HomeFooter />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
export default IndexHome;
