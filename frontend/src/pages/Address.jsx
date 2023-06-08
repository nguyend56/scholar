import React from "react";
import addressBgPic from "../pictures/addressBgPic4.jpeg";

function Address() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${addressBgPic})`,
      }}
    >
      <div
        className="w-full md:w-1/2 lg:w-1/3 p-8 bg-maroon bg-opacity-1 text-center rounded-md"
      >
        <p className="text-xl md:text-2xl lg:text-3xl text-white">
          807 UNION STREET,
          SCHENECTADY,
          NY 12308
        </p>
      </div>
    </div>
  );
}

export default Address;
