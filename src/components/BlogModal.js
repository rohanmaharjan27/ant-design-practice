import { Modal, Button, Alert } from "antd";
import React, { useState } from "react";
import BlogForm from "./BlogForm";

function BlogModal() {
  const [show, setShow] = useState(false);

  const handleCancel = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Button type="primary" onClick={handleShow}>
        Add Blog Post
      </Button>
      <Modal
        title="Add Blog Post"
        visible={show}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={<Alert>You are now logged in!</Alert>}
          >
            Submit
          </Button>,
        ]}
      >
        <BlogForm />
      </Modal>
    </>
  );
}

export default BlogModal;
