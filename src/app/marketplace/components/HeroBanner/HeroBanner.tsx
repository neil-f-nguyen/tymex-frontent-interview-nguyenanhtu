"use client";

import React from "react";
import { Row, Col, Flex, Grid, Carousel } from "antd";
import DjMan from "./DjMan";
import Thumbnails from "./Thumbnails";
import MainBanner from "./MainBanner";
import Image from "next/image";
const thumbnails = [
  { id: 1, name: "ASSASSIN", image: "/assets/images/assassin.png" },
  { id: 2, name: "NEON GUY", image: "/assets/images/neon-guy.png" },
  { id: 3, name: "MAFIA ENGLAND", image: "/assets/images/mafia-england.png" },
  {
    id: 4,
    name: "BASKETBALL GIRL",
    image: "/assets/images/basketball-girl.png",
  },
];

const HeroBanner = () => {
  const { md, lg } = Grid.useBreakpoint();
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/hero-bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-x",
        minHeight: 500,
      }}
    >
      <Flex
        style={{
          height: "60%",
          minHeight: 300,
        }}
        align="flex-end"
      >
        <Image
          className="bannerImage"
          src="/assets/images/new-arrival.png"
          alt="Hero Banner"
          width={500}
          height={133}
          style={{
            width: "40%",
            height: "auto",
            margin: "3rem 0 auto 3rem",
          }}
        />
        <DjMan hidden={lg} />
      </Flex>

      <Flex
        align="end"
        justify="center"
        wrap="wrap-reverse"
        style={{
          width: "100%",
          backgroundImage: "url('/assets/images/hero-bg-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}
      >
        <Row
          gutter={[24, 24]}
          justify="start"
          wrap
          style={{
            marginLeft: "auto",
            padding: "24px",
            height: "auto",
            top: "100%",
            zIndex: 2,
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: "auto",
            maxWidth: lg ? "80%" : "100%",
          }}
        >
          {md ? (
            <>
              {thumbnails.map((item) => (
                <Col xs={24} md={12} lg={6} key={item.id}>
                  <Thumbnails item={item} />
                </Col>
              ))}
            </>
          ) : (
            <Carousel
              autoplay={{
                dotDuration: true,
              }}
              arrows
              dots={false}
              style={{
                width: "100%",
                maxWidth: "100vw",
              }}
            >
              {thumbnails.map((item) => (
                <Thumbnails item={item} />
              ))}
            </Carousel>
          )}
        </Row>
        <DjMan hidden={!lg} />
      </Flex>
    </div>
  );
};

export default HeroBanner;
