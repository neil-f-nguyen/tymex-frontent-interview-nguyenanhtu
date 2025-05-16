import Image from "next/image";
import React from "react";

type ThumbnailProps = {
  image: string;
  name: string;
};

const Thumbnails = ({ item }: { item: ThumbnailProps }) => {
  return (
    <div style={{ textAlign: "center", padding: "1rem 1rem" }}>
      <div
        className="card-hover-up"
        style={{
          borderRadius: 12,
          width: "100%",
          position: "relative",
          maxWidth: 200,
          margin: "0 auto 10%",
        }}
      >
        <Image
          className="character-image"
          src={item.image}
          alt={item.name}
          width={400}
          height={336}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 2,
            position: "relative",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "110%",
            transform: "translateY(-100%)",
            left: "-10%",
            width: "100%",
            height: "70%",
            background: "#17161A",
          }}
        />
        <Image
          src="/assets/images/hero-card-bg.png"
          alt="Hero Card BG"
          width={200}
          height={168}
          style={{
            position: "absolute",
            top: "100%",
            transform: "translateY(-100%)",
            left: 0,
            width: "100%",
            height: "70%",
            border: "1px solid #FBC625",
          }}
        />
      </div>
      <div style={{ color: "#1f1b2e", fontWeight: 600 }}>{item.name}</div>
    </div>
  );
};

export default Thumbnails;
