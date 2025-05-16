import Image from "next/image";
import React from "react";

const DjMan = ({ hidden }: { hidden?: boolean }) => {
  return (
    <div
      hidden={hidden}
      style={{
        position: "relative",
        flex: 1,
        height: "10px",
        minWidth: 200,
        width: "50%",
      }}
    >
      <Image
        src="/assets/images/dj-man.png"
        alt="Hero DJ"
        width={360}
        height={500}
        style={{
          display: "block",
          position: "absolute",
          top: "100%",
          right: 0,
          transform: "translateY(-100%)",
          objectFit: "contain",
          width: "100%",
          height: "auto",
          maxHeight: 400,
          zIndex: 4,
        }}
      />
    </div>
  );
};

export default DjMan;
