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

function Contentpracticeone(props) {
  const { Header, Footer, Sider, Content } = Layout;
  const { Title, Paragraph, Text } = Typography;
  const dataSource = [
    {
      key: "1",
      serialNumber: "1",
      fileName: "My passport",
      action: "",
    },
  ];

  const dataSourceRoom = [
    {
      key: "1",
      serialNumber: "1",
      room: "Premium King Room (Room No : 6)",
      roomQTY: "1",
      durationOfStay: "4",
      basePrice: "$120",
      totalAmount: "$2500",
    },
  ];
  const [form] = Form.useForm();
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Guest Information"
              bordered={false}
              style={{ margin: "2%" }}
            >
              <div className="left">
                <div className="label">
                  <Paragraph>
                    <Text>Full Name :</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>Email Address :</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>Gender :</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>Date of Birth :</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>Nationality :</Text>
                  </Paragraph>
                </div>

                <div className="data">
                  <Paragraph>
                    <Text strong>Mr. John Doe</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>test@gmail.com</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Male</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>10/02/2000</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Nepali</Text>
                  </Paragraph>
                </div>
              </div>
              <div className="right">
                <div className="label">
                  <Paragraph>
                    <Text>Address :</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>Country :</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>State :</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>City :</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>Zip Code:</Text>
                  </Paragraph>
                </div>

                <div className="data">
                  <Paragraph>
                    <Text strong>Address 1, address line</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>test@gmail.com</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Male</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>10/02/2000</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>445890</Text>
                  </Paragraph>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Check In Information"
              bordered={false}
              style={{
                marginLeft: "2%",
                marginRight: "2%",
                marginBottom: "2%",
              }}
            >
              <Form form={form} layout="inline">
                <Form.Item style={{ marginRight: "80px" }}>
                  <Space direction="vertical">
                    <Text strong>Check In Date</Text>
                    <Input placeholder="19/05/2020" />
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginRight: "80px" }}>
                  <Space direction="vertical">
                    <Text strong>Check Out Date</Text>
                    <DatePicker />
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Space direction="vertical">
                    <Text strong>Duration of Stay</Text>

                    <Input placeholder="4 Days" />
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginRight: "80px", marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>Room Type</Text>
                    <Select
                      placeholder="Single Room"
                      style={{
                        width: "300px",
                        height: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      <Select.Option value="Single Room">
                        Single Room
                      </Select.Option>
                      <Select.Option value="Designer">
                        Double Room
                      </Select.Option>
                    </Select>
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginRight: "80px", marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>Room Number</Text>
                    <Input placeholder="120" />
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>Price</Text>
                    <Input placeholder="$850" />
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginTop: "15px" }}>
                  <Space direction="vertical">
                    <Text strong>Number of Guests</Text>
                    <Input placeholder="02" />
                  </Space>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Check In Information"
              bordered={false}
              style={{
                marginLeft: "2%",
                marginRight: "2%",
                marginBottom: "2%",
              }}
            >
              <Form form={form} layout="inline">
                <Form.Item style={{ marginRight: "80px" }}>
                  <Space direction="vertical">
                    <Text strong>Type of ID</Text>
                    <Input placeholder="Passport" />
                  </Space>
                </Form.Item>
                <Form.Item style={{ marginRight: "80px" }}>
                  <Space direction="vertical">
                    <Text strong>ID No.</Text>
                    <Input placeholder="47895123658740" />
                  </Space>
                </Form.Item>
                <Form.Item>
                  <Space direction="vertical">
                    <Text strong>Issue Date</Text>

                    <Input placeholder="20/12/2019" />
                  </Space>
                </Form.Item>
              </Form>
              <Title level={5} style={{ textAlign: "left", marginTop: "30px" }}>
                Uploaded Files
              </Title>
              <Table dataSource={dataSource}>
                <Column
                  title="S.No."
                  dataIndex="serialNumber"
                  key="serialNumber"
                  width="10%"
                  align="center"
                />
                <Column
                  title="File Name"
                  dataIndex="fileName"
                  key="fileName"
                  width="20%"
                />
                <Column
                  title="Action"
                  dataIndex="action"
                  key="action"
                  render={(value) => (
                    <Space direction="horizontal" size="middle">
                      <Button type="primary">View</Button>
                      <Button type="primary" ghost>
                        Download
                      </Button>
                      <Button type="default" danger>
                        Delete
                      </Button>
                    </Space>
                  )}
                />
              </Table>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="site-card-border-less-wrapper">
            <Card
              title="Payment Information"
              bordered={false}
              style={{
                marginLeft: "2%",
                marginRight: "2%",
                marginBottom: "2%",
              }}
            >
              <Table dataSource={dataSourceRoom}>
                <Column
                  title="S.No."
                  dataIndex="serialNumber"
                  key="serialNumber"
                  width="10%"
                  align="center"
                />
                <Column title="Room" dataIndex="room" key="room" width="30%" />
                <Column
                  title="Room QTY"
                  dataIndex="roomQTY"
                  key="roomQTY"
                  width="15%"
                  align="center"
                />
                <Column
                  title="Duration of Stay"
                  dataIndex="durationOfStay"
                  key="durationOfStay"
                  width="15%"
                  align="center"
                />
                <Column
                  title="Base Price"
                  dataIndex="basePrice"
                  key="basePrice"
                  width="15%"
                  align="center"
                />
                <Column
                  title="Total Amount"
                  dataIndex="totalAmount"
                  key="totalAmount"
                  width="15%"
                  align="center"
                />
              </Table>
              <div className="total">
                <div className="price">
                  <Paragraph>
                    <Text>$ 4800.00</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>$ 226.80</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>$ 57.00</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>$ 50.00</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text>0 %</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>$5000</Text>
                  </Paragraph>
                </div>
                <div className="heading">
                  <Paragraph>
                    <Text strong>Subtotal</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>SGST (9%)</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>CGST (2%)</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Advance Amount</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Discount</Text>
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Total Amount</Text>
                  </Paragraph>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Contentpracticeone;
