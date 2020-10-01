import React from "react";
import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";
function TopMenu() {
  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <SettingOutlined />
        </Menu.Item>
        <Menu.Item key="2">Dashboard</Menu.Item>
        <Menu.Item key="3">Account</Menu.Item>
        <Menu.Item key="4">Logout</Menu.Item>
      </Menu>
    </>
  );
}

export default TopMenu;
