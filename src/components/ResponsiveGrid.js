import { Col, Row } from "antd";
import React from "react";

function ResponsiveGrid() {
  return (
    <>
      <Row>
        <Col
          style={{ backgroundColor: "red" }}
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={10}
        >
          Col
        </Col>
        <Col
          xs={20}
          sm={16}
          md={12}
          lg={8}
          xl={4}
          style={{ backgroundColor: "blue" }}
        >
          Col
        </Col>
        <Col
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={10}
          style={{ backgroundColor: "green" }}
        >
          Col
        </Col>
      </Row>

      <Row>
        <Col
          xs={{ span: 5, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
          style={{ backgroundColor: "red" }}
        >
          Col
        </Col>
        <Col
          xs={{ span: 11, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
          style={{ backgroundColor: "blue" }}
        >
          Col
        </Col>
        <Col
          xs={{ span: 5, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
          style={{ backgroundColor: "green" }}
        >
          Col
        </Col>
      </Row>
    </>
  );
}

export default ResponsiveGrid;
