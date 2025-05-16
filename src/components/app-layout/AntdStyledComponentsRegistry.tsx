"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import '@ant-design/v5-patch-for-react-19';

type AntdStyledComponentsRegistryProps = {
  children: React.ReactNode;
};

const AntdStyledComponentsRegistry: React.FC<
  AntdStyledComponentsRegistryProps
> = ({ children }) => {
  const [cache] = React.useState(() => createCache());

  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    ></style>
  ));

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdStyledComponentsRegistry;
