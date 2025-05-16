import Image from "next/image";
import React from "react";

export default function MainBanner() {
  return (
    <Image
      className="bannerImage"
      src="/assets/images/new-arrival.png"
      alt="Hero Banner"
      width={500}
      height={133}
      style={{
        width: "50%",
        height: "auto",
      }}
    />
  );
}
