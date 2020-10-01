import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import UpdateProductForm from "./UpdateProductForm";

function UpdateProductModal(value) {
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
        Update
      </Button>
      <Modal
        title="Update Product"
        visible={show}
        onCancel={handleCancel}
        footer={null}
        width={500}
      >
        <UpdateProductForm
          handleCancel={handleCancel}
          setShow={setShow}
          value={value}
        />
      </Modal>
    </>
  );
}

export default UpdateProductModal;
