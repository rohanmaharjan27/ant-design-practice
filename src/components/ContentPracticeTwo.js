import {
  AutoComplete,
  Button,
  Card,
  Col,
  Input,
  Row,
  Space,
  Form,
  Typography,
} from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Meta from "antd/lib/card/Meta";
import React from "react";
import "../css/style.css";

function Contentpracticetwo() {
  const [form] = Form.useForm();
  const { Paragraph, Text, Title } = Typography;
  return (
    <>
      <Row>
        <Col span={8}>
          <Card
            bordered={false}
            style={{
              width: 300,
              height: 350,
              margin: "12%",
            }}
          >
            <Avatar
              src="data:image/jpeg;base64,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"
              style={{
                width: "50%",
                height: "30%",
                margin: "auto",
              }}
            />
            <Title level={4} style={{ marginTop: "15px", marginBottom: "0" }}>
              Arya Stark
            </Title>
            <Paragraph style={{ marginBottom: "20px" }}>
              <Text>Liverpool, London</Text>
            </Paragraph>
            <Row style={{ width: "100%" }}>
              <Button
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  backgroundColor: "#834bff",
                  color: "white",
                  border: "#b37feb",
                  justifyContent: "center",
                }}
                type="primary"
              >
                Change Image
              </Button>
            </Row>
          </Card>
        </Col>
        <Col span={16}>
          <Card
            title="Profile"
            bordered={false}
            style={{
              marginTop: "6%",
              marginLeft: "2%",
              marginRight: "2%",
              marginBottom: "6%",
            }}
          >
            <Form form={form} layout="inline">
              <Row style={{ width: "100%" }}>
                <Form.Item>
                  <Space direction="vertical">
                    <Text strong>First Name</Text>
                    <Input
                      placeholder="ex. John"
                      style={{ width: 330, height: 40 }}
                    />
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginLeft: "30px" }}>
                  <Space direction="vertical">
                    <Text strong>Last Name</Text>
                    <Input
                      placeholder="ex. Doe"
                      style={{ width: 330, height: 40 }}
                    />
                  </Space>
                </Form.Item>
              </Row>
              <Row style={{ width: "100%" }}>
                <Form.Item>
                  <Space direction="vertical" style={{ marginTop: "15px" }}>
                    <Text strong>Phone Number</Text>

                    <Input
                      placeholder="9851244444"
                      style={{
                        width: 330,
                        height: 40,
                        color: "#b37feb",
                        borderColor: "#b37feb",
                      }}
                    />
                  </Space>
                </Form.Item>

                <Form.Item style={{ marginLeft: "30px", marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>Email Address</Text>

                    <Input
                      placeholder="test@gmail.com"
                      style={{
                        width: 330,
                        height: 40,
                        color: "#52c41a",
                        borderColor: "#52c41a",
                      }}
                    />
                  </Space>
                </Form.Item>
              </Row>
              <Row style={{ width: "100%" }}>
                <Form.Item style={{ marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>Address</Text>
                    <Input
                      placeholder="ex. 123, High Street, Phoenix Avenue"
                      style={{ width: 705, height: 40 }}
                    />
                  </Space>
                </Form.Item>
              </Row>
              <Row style={{ width: "100%" }}>
                <Form.Item style={{ marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>City</Text>
                    <Input
                      placeholder="ex. New York"
                      style={{ width: 200, height: 40 }}
                    />
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginLeft: "36px", marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>Country</Text>
                    <Input
                      placeholder="ex. United States"
                      style={{ width: 200, height: 40 }}
                    />
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginLeft: "36px", marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>Postal Code</Text>
                    <Input
                      placeholder="123456"
                      style={{
                        width: 200,
                        height: 40,
                        color: "#f5222d",
                        borderColor: "#f5222d",
                      }}
                    />
                  </Space>
                </Form.Item>
              </Row>
              <Row style={{ width: "100%", justifyContent: "flex-end" }}>
                <Form.Item
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <Button
                    type="primary"
                    style={{
                      width: 150,
                      height: 45,
                      backgroundColor: "#003a8c",
                      borderRadius: 5,
                    }}
                  >
                    Update
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Contentpracticetwo;
