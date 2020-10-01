import { Col, Divider, Row } from "antd";
import React from "react";

function BasicGrid() {
  const style = { background: "#0092ff", padding: "8px 0" };
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={24} style={{ backgroundColor: "grey" }}>
          col
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ backgroundColor: "black", color: "white" }}>
          col-12
        </Col>
        <Col span={12} style={{ backgroundColor: "grey" }}>
          col-12
        </Col>
      </Row>
      <Row>
        <Col span={8} style={{ backgroundColor: "grey" }}>
          col-8
        </Col>
        <Col span={8} style={{ backgroundColor: "black", color: "white" }}>
          col-8
        </Col>
        <Col span={8} style={{ backgroundColor: "grey" }}>
          col-8
        </Col>
      </Row>
      <Row>
        <Col span={6} style={{ backgroundColor: "black", color: "white" }}>
          col-6
        </Col>
        <Col span={6} style={{ backgroundColor: "grey" }}>
          col-6
        </Col>
        <Col span={6} style={{ backgroundColor: "black", color: "white" }}>
          col-6
        </Col>
        <Col span={6} style={{ backgroundColor: "grey" }}>
          col-6
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Vertical</Divider>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  );
}

export default BasicGrid;
