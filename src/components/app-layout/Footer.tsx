"use client";

import React from "react";
import { Row, Col, Input, Button, Typography, Space } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Title, Text } = Typography;

const navLinks = [
  ["Home", "Whitepaper", "FAQs"],
  ["About us", "Marketplace", "News"],
  ["Our teams", "Roadmap", "Community"],
];

const Footer = () => {
  return (
    <div
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "32px",
      }}
    >
      <Row gutter={[48, 32]}>
        {/* Navigation */}
        <Col xs={24} md={10}>
          <Title
            level={5}
            style={{
              color: "#fff",
              letterSpacing: 2,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            NAVIGATION
          </Title>
          <Row gutter={16}>
            {navLinks.map((col, idx) => (
              <Col key={idx} span={8}>
                <Space direction="vertical" size={8}>
                  {col.map((item) => (
                    <a
                      key={item}
                      href="#"
                      style={{
                        color: "#fff",
                        fontWeight: 400,
                        fontSize: 16,
                        textDecoration: "none",
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </Space>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Contact us */}
        <Col xs={24} md={6}>
          <Title
            level={5}
            style={{
              color: "#fff",
              letterSpacing: 2,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            CONTACT US
          </Title>
          <Space direction="vertical" size={16}>
            <span
              style={{ display: "flex", alignItems: "center", color: "#fff" }}
            >
              <PhoneOutlined style={{ marginRight: 10, fontSize: 18 }} />
              01234568910
            </span>
            <span
              style={{ display: "flex", alignItems: "center", color: "#fff" }}
            >
              <MailOutlined style={{ marginRight: 10, fontSize: 18 }} />
              tymex-talent@tyme.com
            </span>
          </Space>
        </Col>

        {/* Subscribe */}
        <Col xs={24} md={8}>
          <Title
            level={5}
            style={{
              color: "#fff",
              letterSpacing: 2,
              fontWeight: 700,
              marginBottom: 24,
            }}
          >
            SUBCRIBE TO RECEIVE OUR LATEST UPDATE
          </Title>
          <Space.Compact style={{ width: "100%", maxWidth: 420 }}>
            <Input
              size="large"
              placeholder="Your email address"
              style={{
                background: "transparent",
                color: "#fff",
                borderColor: "#888",
              }}
            />
            <Button
              size="large"
              style={{
                background: "linear-gradient(90deg, #e14fff 0%, #ff6bcb 100%)",
                color: "#fff",
                fontWeight: 600,
                border: "none",
                borderRadius: 6,
                marginLeft: 8,
                minWidth: 120,
              }}
            >
              Subscribe
            </Button>
          </Space.Compact>
        </Col>
      </Row>

      {/* Line */}
      <div style={{ borderTop: "1px solid #333", margin: "40px 0 0 0" }} />

      {/* Bottom */}
      <Row
        style={{ padding: "24px 0 0 0", color: "#fff", fontSize: 15 }}
        align="middle"
      >
        <Col xs={24} md={12}>
          <Text style={{ color: "#fff", fontWeight: 400 }}>
            ©2023 Tyme - Edit. All Rights reserved.
          </Text>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "right" }}>
          <Space size={32}>
            <a
              href="#"
              style={{
                color: "#fff",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              Security
            </a>
            <a
              href="#"
              style={{
                color: "#fff",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              Legal
            </a>
            <a
              href="#"
              style={{
                color: "#fff",
                fontWeight: 400,
                textDecoration: "none",
              }}
            >
              Privacy
            </a>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
