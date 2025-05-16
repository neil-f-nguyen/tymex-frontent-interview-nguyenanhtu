"use client";
import { Layout } from "antd";
import React from "react";
import Navbar from "@tymex/components/app-layout/Navbar";
import Footer from "@tymex/components/app-layout/Footer";
import Image from "next/image";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        minHeight: "100vh",
        background: "transparent",
      }}
    >
      <Navbar />
      <Layout.Content style={{ background: "transparent" }}>
        {children}
      </Layout.Content>
      <Layout.Footer
        style={{
          marginTop: "20px",
          padding: 0,
          background: "transparent",
          color: "#fff",
        }}
      >
        <div
          style={{
            background: "url('/assets/images/footer-banner.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src="/assets/images/footer-banner.png"
            alt="footer-banner"
            width={1400}
            height={300}
          />
        </div>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};
export default MainLayout;
