"use client";

import React from "react";
import { Card, Tag, Avatar, Typography, Flex, message, Space } from "antd";
import { HeartFilled } from "@ant-design/icons";
import Image from "next/image";
import { IProduct } from "@tymex/services/product/types";
import { useMutation } from "@tanstack/react-query";
import updateProduct from "@tymex/services/product/update-product";

interface ProductCardProps {
  product: IProduct;
  onUpdate?: () => void;
}


const categoryBg = {
  Epic: "linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)",
  Mythic: "linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)",
  Legendary: "linear-gradient(90.13deg, #FFB800 0%, #FF5CA3 100%)",
  Rare: "linear-gradient(90.13deg, #FF5CA3 0%, #FF5CA3 100%)",
  "Upper Body": "linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)",
  "Lower Body": "linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)",
  Hat: "linear-gradient(90.13deg,rgb(90, 112, 254) 0%,rgb(99, 196, 241) 100%)",
  Shoes: "linear-gradient(90.13deg,rgb(133, 133, 133) 0%,rgb(255, 213, 246) 100%)",
  Accessory: "linear-gradient(90.13deg,rgb(8, 239, 11) 0%,rgba(255, 140, 230, 0.85) 100%)",
  Deluxe: "linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)",
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onUpdate }) => {
  const {
    id,
    title,
    category,
    price,
    isFavorite,
    createdAt,
    theme,
    tier,
    imageId,
    author,
  } = product;

  const { mutate: updateFavorite, isPending: isUpdating } = useMutation({
    mutationFn: async () => {
      await updateProduct(id, { ...product, isFavorite: !isFavorite });
    },
    onSuccess: () => {
      onUpdate?.();
    },
    onError: () => {
      message.error("Failed to update favorite");
    },
  });

  return (
    <Card
      variant="borderless"
      style={{
        height: "100%",
        background: "#3A384199",
        padding: "16px",
      }}
      styles={{ body: { padding: 0 }, cover: { padding: 0 } }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Flex
          vertical
          justify="space-between"
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "1/1",
            background: categoryBg[category],
            borderRadius: "12px",
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            style={{
              position: "absolute",
              top: 0,
              width: "100%",
              padding: "12px",
              zIndex: 2,
            }}
          >
            <Tag
              bordered={false}
              style={{
                backgroundColor: "#313B4580",
                color: "#fff",
                borderRadius: "4px",
                padding: "4px 12px",
              }}
            >
              {category}
            </Tag>
            <HeartFilled
              onClick={async () => {
                await updateFavorite();
              }}
              style={{
                color: isFavorite ? "#FF5CA3" : "#fff",
                fontSize: 22,
                opacity: 0.7,
              }}
            />
          </Flex>
          <Image
            src="/nft-1.png"
            alt={title ?? ""}
            fill
            objectFit="contain"
            style={{
              borderRadius: "4px",
              width: "100%",
              aspectRatio: "1/1",
            }}
          />
        </Flex>
        <Flex justify="space-between" wrap="wrap">
          <Typography.Text style={{ color: "#FFFFFF", fontSize: 16 }}>
            {title}
          </Typography.Text>
          <Typography.Text
            style={{ color: "#FFFFFF", fontSize: 16, marginLeft: "auto" }}
          >
            <Image
              src="/assets/logos_ethereum.png"
              alt="logos_ethereum"
              width={8}
              height={13}
            />{" "}
            {price?.toLocaleString("en-US", { maximumFractionDigits: 2 })} ETH
          </Typography.Text>
        </Flex>
        <Flex align="center">
          <Avatar
            src={author?.avatar}
            size={32}
            style={{ marginRight: 10, backgroundColor: "#FFFFFF" }}
          />
          <Typography.Text style={{ color: "#FFFFFF", fontSize: 12 }}>
            {author?.firstName} {author?.lastName}
          </Typography.Text>
        </Flex>
      </Space>
    </Card>
  );
};

export default ProductCard;
