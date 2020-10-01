import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
function SideMenu() {
  const { SubMenu } = Menu;

  return (
    <>
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
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Visualization">
          <Menu.Item key="9">Profit Graphs</Menu.Item>
          <Menu.Item key="10">Website Usage</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
}

export default SideMenu;
