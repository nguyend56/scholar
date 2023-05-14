/* eslint-disable */

import backgroundImg from "../pictures/WallpaperDog-10752030.jpg";
import PageContainer from "../components/PageContainer.component";
import boxPic from "../pictures/HomePagePic1.jpeg";
import computerVersionImage from "../pictures/IntroHomePagePic.jpeg";
import hightlightPic1 from "../pictures/HightlightPic1.webp";
import hightlightPic2 from "../pictures/highlightPic2.jpeg";
import hightlightPic3 from "../pictures/highlightPic3.jpeg";
import hightlightPic4 from "../pictures/highlightPic4.jpeg";
import React from "react";

const HomePage = () => {
  return (
    <PageContainer>
      <div
        className="h-full w-full relative py-10"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
        <div className="grid grid-cols-3 h-fit z-10 relative px-10 gap-x-6 mb-6 text-current">
          <div
            className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{ color: "white" }}>
            <p style={{ fontSize: "36px" }}>Introduction</p>
          </div>

          <div
            className="col-span-2 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{
              color: "white",
              backgroundImage: 'url("../pictures/IntroHomePagePic")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <img
              src={computerVersionImage}
              alt="computer version image"
              height="auto"
              width="800px"
              style={{ maxHeight: "300px" }}
            />
            <p style={{ fontSize: "18px" }}>
              <br />
              The history of computers dates back to the 19th century, when
              Charles Babbage designed the first mechanical computer. However,
              it wasn't until the mid-20th century that the first electronic
              computers were developed, starting with the Atanasoff-Berry
              computer in 1937 and the first programmable computer, the Z3, in
              1941. These early computers were massive machines that took up
              entire rooms and were primarily used for scientific and military
              purposes. As technology progressed, computers became smaller, more
              powerful, and more affordable, leading to their widespread
              adoption in the latter half of the 20th century. Today, computers
              are an integral part of modern life, with applications ranging
              from personal computing and entertainment to scientific research
              and space exploration.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 h-fit z-10 relative px-10 gap-x-6 mb-6">
          <div
            className="col-span-2 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{
              color: "white",
              backgroundImage: 'url("../pictures/IntroHomePagePic")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <img
              src={hightlightPic1}
              alt="computer version image"
              height="auto"
              width="600px"
              style={{ maxHeight: "300px" }}
            />
            <p style={{ fontSize: "18px" }}>
              <br />
              The Z1 is acknowledged as the earliest electro-mechanical binary
              programmable computer and was constructed by Konrad Zuse in his
              parents' living room from 1936 to 1938. It is widely considered to
              be the first functional computer.
            </p>
          </div>

          <div
            className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{ color: "white" }}>
            <p style={{ fontSize: "36px" }}>Highlights</p>
          </div>
        </div>

        <div className="grid grid-cols-3 h-fit z-10 relative px-10 gap-x-6 mb-6">
          <div className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg">
            <img
              src={hightlightPic2}
              alt="computer version image"
              height="auto"
              width="600px"
              style={{ maxHeight: "300px" }}
            />
            <p style={{ fontSize: "18px", color: "white" }}>
              <br />
              In April 1, 1976, Steve Jobs and Steve Wozniak, both of whom did
              not complete college, established Apple Computer, Inc. Their
              objective was to transform the public's perception of computers.
              They aspired to design computers that were compact enough for
              individuals to keep at their homes or workplaces.
            </p>
          </div>

          <div className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg">
            <img
              src={hightlightPic4}
              alt="computer version image"
              height="auto"
              width="600px"
              style={{ maxHeight: "300px" }}
            />
            <p style={{ fontSize: "18px", color: "white" }}>
              <br />
              The Williams tube, which emerged in 1947, was the first useful
              type of random-access memory. It used a cathode-ray tube to store
              data as electrically charged spots on its surface. Because the
              electron beam of the tube could access the stored information in
              any order, this type of memory provided true random access.
            </p>
          </div>

          <div className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg">
            <img
              src={hightlightPic3}
              alt="computer version image"
              height="auto"
              width="600px"
              style={{ maxHeight: "300px" }}
            />
            <p style={{ fontSize: "18px", color: "white" }}>
              <br />
              In 1994, a consortium of seven corporations, including Compaq,
              DEC, IBM, Intel, Microsoft, NEC, and Nortel, initiated the
              development of USB. Intel produced the first integrated circuits
              that supported USB in 1995.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
