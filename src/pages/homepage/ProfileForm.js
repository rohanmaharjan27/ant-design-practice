import { Button, Input, Row, Space, Form, Typography } from "antd";

import React from "react";
function ProfileForm() {
  const [form] = Form.useForm();
  const { Text } = Typography;
  return (
    <>
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
              <Input placeholder="ex. Doe" style={{ width: 330, height: 40 }} />
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
    </>
  );
}

export default ProfileForm;
