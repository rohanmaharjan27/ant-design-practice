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
import React from "react";
import "../homepage/style.css";
import ProfileForm from "./ProfileForm";

function Profile() {
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
              src="https://lh3.googleusercontent.com/proxy/DidCPKPWZoWZVNQaFtKCs1GB1UMbpjTN0BLLO-2yaHDFOUmJKtu0MNGy8YLXvp-V2YzNBqzCfPQKDwb1PZwCe7d6YeWHc28CeWbRuPiEoc_a4KXLQKopX6BKqwIKhS0"
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
            <ProfileForm />
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Profile;
