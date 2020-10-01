import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Divider,
  Popconfirm,
  Row,
  Space,
  DatePicker,
  Checkbox,
  Radio,
  TreeSelect,
  AutoComplete,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

function BlogForm() {
  const [form] = Form.useForm();
  const [gender, setGender] = useState("Male");
  const [occupation, setOccupation] = useState("Developer");

  const cities = [
    { value: "Kathmandu" },
    { value: "Lalitpur" },
    { value: "Bhaktapur" },
  ];

  const onReset = () => {
    form.resetFields();
  };

  const radioGender = (e) => {
    console.log("Gender is ", gender);
    setGender(e.target.value);
  };

  console.log("Gender is ", gender);

  const selectOccupation = (value) => {
    console.log("Occupation is ", occupation);
    console.log(value);
    setOccupation(value);
  };
  console.log("Occupation is ", occupation);
  return (
    <div>
      <h1>Add Blog Post</h1>
      <Row justify="center">
        <Form form={form}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item>
            Password:{" "}
            <Input.Password
              placeholder="Enter password"
              style={{ width: 250 }}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item label="Gender">
            <Radio.Group onChange={radioGender} value={gender}>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="occupation"
            label="Occupation"
            rules={[{ required: true }]}
          >
            <Select
              onChange={selectOccupation}
              value={occupation}
              placeholder={occupation}
            >
              <Select.Option value="Developer">Developer</Select.Option>
              <Select.Option value="Designer">Designer</Select.Option>
              <Select.Option value="Tester">Tester</Select.Option>
              <Select.Option value="Project Manager">
                Project Manager
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Gender TreeSelect">
            <TreeSelect
              placeholder="Select your gender"
              treeData={[
                {
                  title: "Male",
                  value: "Male",
                },
                {
                  title: "Female",
                  value: "Female",
                },
                {
                  title: "Other",
                  value: "other",
                  children: [
                    { title: "Transgender", value: "transgender" },
                    { title: "Non-Binary", value: "Non-Binary" },
                    { title: "Gender Neutral", value: "Gender Neutral" },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item>
            City:{" "}
            <AutoComplete
              style={{ width: 200 }}
              options={cities}
              placeholder="Search your city"
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </Form.Item>
          <Form.Item label="Date">
            <DatePicker />
          </Form.Item>
          <Divider plain>Blog Post</Divider>
          <Form.Item
            name="blogTitle"
            label="Blog Title"
            rules={[{ required: true }]}
          >
            <Input placeholder="Blog Title" />
          </Form.Item>
          <Form.Item name="blogMain" rules={[{ required: true }]}>
            <TextArea rows={6} placeholder="Type your blog post" />
          </Form.Item>
          <Form.Item>
            <Checkbox>I agree to the terms and conditions.</Checkbox>
          </Form.Item>
          <Form.Item>
            <Space>
              <Popconfirm
                title="Are you sure you want to submit this blog post?"
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" size="large">
                  Submit
                </Button>
              </Popconfirm>
              <Button type="default" size="large" onClick={onReset}>
                Reset
              </Button>
              <Button type="default" size="large">
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
}

export default BlogForm;
