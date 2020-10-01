import {
  Card,
  Col,
  Layout,
  Row,
  Space,
  Typography,
  Form,
  Input,
  DatePicker,
  Select,
  Table,
  Button,
} from "antd";
import Column from "antd/lib/table/Column";
import React from "react";
import "../css/style.css";
import Contentpracticeone from "./ContentPracticeOne";
import Contentpracticetwo from "./ContentPracticeTwo";

function Infytrip() {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title, Paragraph, Text } = Typography;

  const [form] = Form.useForm();

  return (
    <div>
      <Layout>
        <Header className="header">
          <div>Header</div>
        </Header>
        <Layout>
          <Sider width={300} breakpoint="lg" collapsedWidth="0">
            Sider
          </Sider>
          <Layout>
            <Content>
              {/* <Contentpracticeone /> */}
              <Contentpracticetwo />
            </Content>
          </Layout>
        </Layout>
        <Layout>
          <Footer style={{ backgroundColor: "yellow" }}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Infytrip;
