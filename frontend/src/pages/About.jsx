import React from "react";
import aboutPic from "../pictures/aboutBGpic.png";

function About() {
  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${aboutPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <div className="absolute top-0 left-0 h-full w-full" />
      <div className="relative z-10 bg-white w-11/12 sm:w-3/4 md:w-1/2 lg:w-7/10 xl:w-7/10 2xl:w-7/10 p-4 border border-gray-200 rounded-md shadow-lg">
        <p className="text-lg">
          This website is a Scholar Sophomore Project implemented by Dung Viet Nguyen (class 2025) and
          supervised by Prof. Nicholas Webb. The purpose of the website is to
          store database about different computer version throughout the
          history, and also the website is the foundation for Prof. Webb for
          future uses.
        </p>
      </div>
    </div>
  );
}

export default About;
