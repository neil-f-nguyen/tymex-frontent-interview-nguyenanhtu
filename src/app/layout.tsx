import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@tymex/styles/globals.css";
import { ConfigProvider, theme, ThemeConfig } from "antd";
import {
  AntdStyledComponentsRegistry,
  MainLayout,
} from "@tymex/components/app-layout";
import { QueryProvider } from "@tymex/providers/query-provider";
import { PropsWithChildren } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#00b96b",
  },
  components: {
    Typography: {
      colorText: "#FFFFFF",
    },
    Select: {
      colorBgContainer: "transparent",
      colorText: "#FFFFFF",
      colorTextPlaceholder: "#FFFFFF",
      colorTextDisabled: "#FFFFFF",
      colorTextBase: "#FFFFFF",
      colorTextSecondary: "#FFFFFF",
      colorTextTertiary: "#FFFFFF",
      optionSelectedBg: "#DA458F",
      optionActiveBg: "#ffa0cf",
      hoverBorderColor: "#ffa0cf",
      activeBorderColor: "#ffa0cf",
      colorBorder: "#3A3841",
      colorBgElevated: "#3A3841",
    },
    Button: {
      colorPrimaryBg: "linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)",
      colorPrimary: "#fff",
      colorPrimaryText: "#fff",
      colorPrimaryBgHover:
        "linear-gradient(91.47deg,#eb62a7 -6%, #e14fff 113.05%)",
    },
    Slider: {
      handleColor: "#ffffff",
      colorPrimary: "#fff",
      colorPrimaryText: "#fff",
      handleActiveOutlineColor: "transparent",
      handleLineWidthHover: 1,
      handleSize: 8,
      handleSizeHover: 10,
      handleActiveColor: "#ffffff",
      handleLineWidth: 1,
      trackBg: "linear-gradient(90deg, #e14fff 0%, #ff6bcb 100%)",
    },
    Menu: {
      itemBg: "transparent",
      colorPrimary: "#fff",
      colorPrimaryText: "#fff",
      itemColor: "#fff",
      itemHoverColor: "#a259ff",
      motionUnit: 200,
      activeBarHeight: 0,
    },
    Dropdown: {
      colorText: "#fff",
      colorBgBase: "transparent",
      colorBgContainer: "transparent",
      colorBgElevated: "#3A3841",
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="mdl-js">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryProvider>
          <ConfigProvider theme={themeConfig}>
            <AntdStyledComponentsRegistry>
              <MainLayout>{children}</MainLayout>
            </AntdStyledComponentsRegistry>
          </ConfigProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
