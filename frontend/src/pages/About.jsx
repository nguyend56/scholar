import React from "react";
import aboutPic from "../pictures/aboutBGpic.png";

function About() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        className="h-full w-full absolute top-0 left-0"
        style={{
          backgroundImage: `url(${aboutPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}></div>
    </div>
  );
}

export default About;
