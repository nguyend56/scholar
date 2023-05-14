import React from "react";
import HistoryPic from "../pictures/HistoryPic.jpeg";
import HistoryDropdown from "../components/HistoryPageDropdown";

function History() {
  return (
    <div className="relative min-h-screen">
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
            backgroundImage: `url(${HistoryPic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}></div>
        <div className="relative z-10">
          <HistoryDropdown />
        </div>
      </div>
    </div>
  );
}

export default History;
