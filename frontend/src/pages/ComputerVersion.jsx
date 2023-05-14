import React from 'react';
import compVer from "../pictures/computerVersion.jpeg";

function ComputerVersion() {
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
      <h1>hello</h1>
      <p>This is the abc page.</p>
      <div
        className="h-full w-full absolute top-0 left-0"
        style={{
          backgroundImage: `url(${compVer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}></div>
    </div>
  );
}


export default ComputerVersion;