"use client";

import React, { useState } from "react";
import {
  Menu,
  Button,
  Avatar,
  Space,
  Layout,
  Affix,
  Flex,
  Dropdown,
  Typography,
  Grid,
} from "antd";
import {
  GlobalOutlined,
  UserOutlined,
  MenuOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
const menuItems = [
  { label: "HOME", key: "/" },
  { label: "ABOUT US", key: "/about" },
  { label: "OUR TEAMS", key: "/teams" },
  {
    label: "MARKETPLACE",
    key: "/marketplace",
  },
  { label: "ROADMAP", key: "/roadmap" },
  { label: "WHITEPAPER", key: "/whitepaper" },
];

const Navbar = () => {
  const pathname = usePathname();
  const screens = Grid.useBreakpoint();

  const isMobile = !screens.md;
  return (
    <Layout.Header
      style={{
        width: "100%",
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Affix offsetTop={0} style={{ width: "100%", zIndex: 1000 }}>
        <Flex
          align="center"
          justify="space-between"
          style={{
            background: "#17161ACC",
            padding: "10px 40px",
            width: "100%",
          }}
        >
          {isMobile ? (
            <Dropdown
              menu={{
                items: menuItems,
              }}
              placement="bottom"
            >
              <MenuOutlined style={{ fontSize: 22, color: "#fff" }} />
            </Dropdown>
          ) : (
            <Menu
              className="navbar-desktop-menu"
              mode="horizontal"
              items={menuItems}
              activeKey={pathname}
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                minWidth: 0,
                background: "transparent",
                border: "none",
              }}
            />
          )}
          <Flex align="center" justify="flex-end" gap={20}>
            <Button variant="filled" color="primary" size="large">
              Connect Wallet
            </Button>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "vn",
                    label: <Typography.Text>Tiếng Việt</Typography.Text>,
                  },
                  {
                    key: "en",
                    label: <Typography.Text>English</Typography.Text>,
                  },
                  {
                    key: "cn",
                    label: <Typography.Text>中文</Typography.Text>,
                  },
                ],
              }}
              placement="bottom"
            >
              <GlobalOutlined style={{ fontSize: 22, color: "#fff" }} />
            </Dropdown>
            <Dropdown
              menu={{
                items: [
                  {
                    key: "profile",
                    label: <Typography.Text>Profile</Typography.Text>,
                  },
                  {
                    key: "logout",
                    label: <Typography.Text>Logout</Typography.Text>,
                  },
                ],
              }}
              placement="bottom"
            >
              <Avatar
                style={{ background: "#a259ff" }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </Flex>
        </Flex>
      </Affix>
    </Layout.Header>
  );
};

export default Navbar;
