import React from "react";
import backgroundImg from "../pictures/TopManufacturersPic.jpeg";
import PageContainer from "../components/PageContainer.component";
import boxPic from "../pictures/HomePagePic1.jpeg";
import computerVersionImage from "../pictures/IntroHomePagePic.jpeg";
import applePic from "../pictures/applePic.jpeg";
import applePic2 from "../pictures/applePic2.jpeg";
import ibmPic1 from "../pictures/ibmPic1.jpeg";
import ibmPic2 from "../pictures/ibmPic2.jpeg";
import msP2 from "../pictures/microsoftP2.jpeg";
import msP3 from "../pictures/microsoftPic3.webp";
import intelP1 from "../pictures/intelPic1.webp";
import intelP2 from "../pictures/intelPic2.jpeg";
import ggP1 from "../pictures/ggPic1.jpeg";
import ggP2 from "../pictures/ggPic2.jpeg";
import hpP1 from "../pictures/hpPic1.jpeg";
import hpP2 from "../pictures/hpPic2.jpeg";

const TopManufacturers = () => {
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
            style={{
              color: "white",
              backgroundImage: 'url("../pictures/IntroHomePagePic")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <img
              src={applePic}
              alt="computer version image"
              height="auto"
              width="300px"
              style={{ maxHeight: "300px" }}
            />
            <a
              href="https://www.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline cursor-pointer text-3xl text-white">
              Apple Inc
            </a>
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
              src={applePic2}
              alt="computer version image"
              height="auto"
              width="800px"
              style={{ maxHeight: "500px" }}
            />
            <p style={{ fontSize: "18px" }}>
              <br />
              <div>
                Apple Inc. is a globally recognized technology company, famous
                for its innovative designs and significant contributions to the
                field of computing. Its establishment dates back to April 1,
                1976, by Steve Jobs, Steve Wozniak, and Ronald Wayne. The trio
                aimed to develop and sell personal computers, beginning with the
                Apple I, followed by the Apple II, which was launched in 1977.
                The Apple II was groundbreaking, as it was one of the first
                highly successful mass-produced microcomputers, marking Apple's
                decisive entry into the industry. Apple's is the biggest
                technology company by revenue, with the 2022 revenue
                approximately 400 billion USD.
              </div>
              <br></br>
              <div>
                Apple's contributions to computer development have been immense.
                In 1984, they introduced the Macintosh, the first mass-market
                personal computer featuring a graphical user interface and a
                mouse instead of the then-standard command-line interface. This
                revolutionized the way users interacted with computers.{" "}
              </div>
              <br></br>
              <div>
                The company continued its innovation spree with various versions
                of the Macintosh, each with improvements and unique features.
                Some notable models include the Macintosh Portable (1989), the
                Power Macintosh (1994), the iMac (1998), the MacBook Pro (2006),
                and the Mac Pro (2013). Each product has played a role in
                shaping the computing industry, with notable features such as
                sleek design, powerful processors, high-quality displays, and
                the introduction of the unibody design in laptops with the
                MacBook Pro.
              </div>
              <br></br>
              <div>
                In 2001, Apple stepped into the realm of portable computing with
                the introduction of the iPod, followed by the iPhone in 2007,
                which revolutionized the smartphone industry, and later the iPad
                in 2010, which created a new category of devices known as
                tablets.{" "}
              </div>
              <br></br>
              <div>
                Over the years, Apple has consistently pushed the boundaries of
                technology, blending hardware, software, and services to create
                a seamless user experience. As of now, it continues to play a
                significant role in the evolution of personal computing, mobile
                communications, and more.{" "}
              </div>
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
              src={ibmPic2}
              alt="computer version image"
              height="auto"
              width="800px"
              style={{ maxHeight: "500px" }}
            />
            <p style={{ fontSize: "18px" }}>
              <br />
              <div>
                IBM, or International Business Machines Corporation, is a
                multinational technology company with roots dating back to the
                late 19th century. IBM was officially incorporated on June 16,
                1911, in Endicott, New York, but it originally began as the
                Computing-Tabulating-Recording Company (CTR) before being
                renamed to IBM in 1924.
              </div>
              <br></br>
              <div>
                IBM's early contributions to computing included a series of
                electromechanical calculators and punch card machines, which
                were widely used in business and government. In the 1950s, IBM
                made a significant breakthrough with the introduction of the IBM
                701, its first large computer based on the vacuum tube.
              </div>
              <br></br>
              <div>
                Another milestone was the IBM System/360, introduced in 1964. It
                was a family of compatible mainframe computers that
                revolutionized the industry because customers could upgrade from
                lower-cost models to larger ones without having to rewrite their
                applications.
              </div>
              <br></br>
              <div>
                IBM's introduction of the IBM Personal Computer (IBM PC) in 1981
                was another major contribution. The IBM PC became the standard
                for personal computing, and its open architecture allowed other
                companies to clone its design, leading to the widespread
                proliferation of PC-compatible computers.
              </div>
              <br></br>
              <div>
                IBM's other notable computer models include the IBM System/370,
                the IBM AS/400, the IBM RS/6000, the IBM zSeries, and the IBM
                pSeries, among others. These systems have been used in a wide
                range of applications, from business and scientific computing to
                artificial intelligence and quantum computing.
              </div>
              <br></br>
              <div>
                IBM has also been a pioneer in software development, creating
                important operating systems like OS/360, VM, MVS, OS/400, AIX,
                and z/OS, as well as software tools, databases, and middleware.
              </div>
              <br></br>
              <div>
                Today, IBM continues to innovate in areas such as cloud
                computing, artificial intelligence, quantum computing, and
                blockchain technology. It has evolved from a hardware
                manufacturer into a leading provider of broad-based IT
                solutions, including services, software, and advanced
                technologies.
              </div>
            </p>
          </div>

          <div
            className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{
              color: "white",
              backgroundImage: 'url("../pictures/IntroHomePagePic")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <img
              src={ibmPic1}
              alt="computer version image"
              height="auto"
              width="600px"
              style={{ maxHeight: "800px" }}
            />
            <a
              href="https://www.ibm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline cursor-pointer text-3xl text-white">
              IBM
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 h-fit z-10 relative px-10 gap-x-6 mb-6 text-current">
          <div
            className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{
              color: "white",
              backgroundImage: 'url("../pictures/IntroHomePagePic")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <img
              src={msP2}
              alt="computer version image"
              height="auto"
              width="400px"
              style={{ maxHeight: "500px" }}
            />
            <a
              href="https://www.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline cursor-pointer text-3xl text-white">
              Microsoft Corporation
            </a>
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
              src={msP3}
              alt="computer version image"
              height="auto"
              width="800px"
              style={{ maxHeight: "500px" }}
            />
            <p style={{ fontSize: "18px" }}>
              <br />
              <div>
                Microsoft Corporation is a multinational technology company with
                its headquarters in Redmond, Washington. The company was founded
                by Bill Gates and Paul Allen on April 4, 1975, with the primary
                goal of developing and selling BASIC interpreters for the Altair
                8800, an early personal computer.
              </div>
              <br></br>
              <div>
                Microsoft's first major breakthrough came in 1980 when it
                licensed an operating system to IBM for use on its upcoming
                personal computer (PC). This operating system, initially called
                QDOS (Quick and Dirty Operating System) and later renamed MS-DOS
                (Microsoft Disk Operating System), became hugely popular as the
                standard operating system on the IBM PC and its clones.
              </div>
              <br></br>
              <div>
                In 1985, Microsoft launched Windows, a graphical operating
                environment that ran on top of MS-DOS. Windows 3.0, released in
                1990, became a best-seller, and subsequent versions,
                particularly Windows 95, Windows XP, and Windows 7, solidified
                Microsoft's dominance in the PC operating system market.
              </div>
              <br></br>
              <div>
                In addition to its operating systems, Microsoft has made
                substantial contributions to computer development through its
                software products. The Microsoft Office suite, including Word,
                Excel, and PowerPoint, has become the standard for productivity
                software in businesses and homes around the world.
              </div>
              <br></br>
              <div>
                Microsoft also played a significant role in the development of
                the Internet and web technology with the launch of the Internet
                Explorer web browser in the mid-1990s.In the 2000s, Microsoft
                expanded into the gaming industry with the Xbox console line and
                into mobile and cloud computing with Windows Phone (later
                replaced by a partnership with Android) and Azure, its cloud
                computing service. Throughout its history, Microsoft has
                continued to evolve, focusing on areas such as cloud computing,
                AI, business software and services, and remaining a key player
                in the global tech industry.
              </div>
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
              src={intelP1}
              alt="computer version image"
              height="auto"
              width="800px"
              style={{ maxHeight: "500px" }}
            />
            <p style={{ fontSize: "18px" }}>
              <br />
              <div>
                Intel Corporation is a multinational technology company
                headquartered in Santa Clara, California. Intel was founded on
                July 18, 1968, by Robert Noyce and Gordon Moore, two pioneers in
                the semiconductor industry. Intel's primary contribution to
                computer development lies in its groundbreaking work in
                microprocessors. The company introduced the world's first
                commercially available microprocessor, the Intel 4004, in 1971.
                The 4004 was a 4-bit central processing unit (CPU) designed for
                calculators but it set the stage for the microprocessor
                revolution that would transform computing.
              </div>
              <br></br>
              <div>
                In 1974, Intel introduced the 8080 microprocessor, which became
                the basis for the first personal computers. However, it was the
                introduction of the Intel 8086 in 1978 and its successor, the
                8088, that truly revolutionized personal computing. The 8088 was
                chosen by IBM for its first personal computer, the IBM PC,
                launched in 1981. The architecture of these processors, known as
                x86, has continued to be the foundation of most PCs to this day.
              </div>
              <br></br>
              <div>
                Throughout the 1980s and 1990s, Intel introduced a series of
                innovative processors under the name "Intel Core", including the
                i286, i386, i486, and the Pentium series, which continued to
                enhance the power and capabilities of personal computers. In the
                2000s, Intel continued to innovate with the introduction of its
                Core i3, i5, and i7 processors, and later, the Core i9 series.
                These processors, with multiple cores and increased efficiency,
                have become the backbone of modern PCs and laptops.
              </div>
              <br></br>
              <div>
                Intel also contributed significantly to the development of
                memory technologies, including the first
                metal-oxide-semiconductor (MOS) static random-access memory
                (SRAM) and the first commercial dynamic random-access memory
                (DRAM) chips. In addition to CPUs, Intel produces a wide range
                of other technologies, including solid-state drives (SSDs),
                motherboards, integrated graphics, and network interface
                controllers.
              </div>
              <br></br>
              <div>
                Today, Intel remains one of the leading semiconductor
                manufacturers globally, continuously innovating in areas like
                microprocessors, server technology, graphics, and AI processors,
                while also exploring future areas like quantum computing.
              </div>
            </p>
          </div>

          <div
            className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{
              color: "white",
              backgroundImage: 'url("../pictures/IntroHomePagePic")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <img
              src={intelP2}
              alt="computer version image"
              height="auto"
              width="600px"
              style={{ maxHeight: "800px" }}
            />
            <a
              href="https://www.intel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline cursor-pointer text-3xl text-white">
              Intel
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 h-fit z-10 relative px-10 gap-x-6 mb-6 text-current">
          <div
            className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{
              color: "white",
              backgroundImage: 'url("../pictures/IntroHomePagePic")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <img
              src={ggP1}
              alt="computer version image"
              height="auto"
              width="400px"
              style={{ maxHeight: "500px" }}
            />
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline cursor-pointer text-3xl text-white">
              Google LLC
            </a>
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
              src={ggP2}
              alt="computer version image"
              height="auto"
              width="800px"
              style={{ maxHeight: "500px" }}
            />
            <p style={{ fontSize: "18px" }}>
              <br />
              <div>
                Google LLC, primarily known for its search engine, is a
                multinational technology company specializing in
                internet-related services and products. It was founded on
                September 4, 1998, in Menlo Park, California, by Larry Page and
                Sergey Brin while they were Ph.D. students at Stanford
                University.
              </div>
              <br></br>
              <div>
                Google's initial contribution to computer development was its
                search engine, which used a new algorithm called PageRank that
                ranked web pages based on their relevance and importance. This
                made Google Search the most widely used search engine on the Web
                due to its superior search results.
              </div>
              <br></br>
              <div>
                In 2007, Google launched the Android operating system, which has
                since become the world's most widely used smartphone operating
                system. Android's open-source nature has allowed a multitude of
                manufacturers to adopt the system, significantly impacting
                mobile computing. In 2008, Google introduced the Chrome browser,
                which has since grown to be one of the most popular web browsers
                in the world, and Chrome OS, a lightweight, web-focused
                operating system primarily for netbooks and laptops.
              </div>
              <br></br>
              <div>
                While Google has not traditionally been a hardware company, in
                recent years, it has ventured into custom chip development. In
                2016, Google announced the Tensor Processing Unit (TPU), a
                custom application-specific integrated circuit (ASIC) built
                specifically for machine learning workloads. The TPU is tailored
                to TensorFlow, Google's open-source machine learning framework,
                and it provides significant acceleration in machine learning
                tasks. Furthermore, Google has designed custom chips for its
                Pixel line of smartphones. These chips, like the Pixel Visual
                Core and the Titan M security chip, enhance specific
                functionalities within these devices.
              </div>
              <br></br>
              <div>
                In addition to its hardware and software contributions, Google
                has played a significant role in the development and advancement
                of numerous areas of computing, including web browsing, email
                (Gmail), cloud storage (Google Drive), productivity software
                (Google Docs, Sheets, and Slides), digital mapping (Google
                Maps), video sharing (YouTube), and many more. Currently, Google
                continues to be a dominant force in the technology industry,
                making significant strides in areas such as artificial
                intelligence, self-driving cars, and quantum computing, while
                continually improving and expanding its suite of consumer and
                business products and services.
              </div>
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
              src={hpP1}
              alt="computer version image"
              height="auto"
              width="800px"
              style={{ maxHeight: "400px" }}
            />
            <p style={{ fontSize: "18px" }}>
              <br />
              <div>
                Hewlett-Packard Company, commonly known as HP, is a
                multinational technology company headquartered in Palo Alto,
                California. HP was founded on January 1, 1939, by Bill Hewlett
                and Dave Packard, two Stanford University classmates. Initially,
                HP was known for its diverse range of electronic products,
                including oscilloscopes, frequency counters, and other test and
                measurement equipment. However, it started contributing to the
                computer industry in the 1960s, beginning with the HP 2100 and
                HP 1000 minicomputers. The company's first personal computer,
                the HP-85, was introduced in 1980.
              </div>
              <br></br>
              <div>
                HP's contributions to computer development expanded in the 1980s
                and 1990s as it became a key player in the personal computing
                industry. HP produced a series of PCs and laptops that were well
                received by both the business and consumer markets. One of their
                most notable computer lines is the HP Pavilion, introduced in
                1995, which includes both laptops and desktops and is still in
                production today.
              </div>
              <br></br>
              <div>
                While HP hasn't been known for developing its own computer chips
                like Intel or AMD, it has collaborated with these companies to
                use their processors in HP devices. HP computers often come
                equipped with Intel or AMD processors, and in some
                high-performance models, graphics processing units (GPUs) from
                Nvidia are also used.
              </div>
              <br></br>
              <div>
                In 2002, HP merged with Compaq, a leading PC manufacturer at the
                time, significantly enhancing HP's presence in the personal
                computing market. After the merger, the company introduced
                several Compaq-branded devices, most notably the Compaq Presario
                desktop and laptop lines.
              </div>
              <br></br>
              <div>
                In 2015, HP split into two separate companies: HP Inc., which
                focuses on PCs and printers, and Hewlett Packard Enterprise
                (HPE), which focuses on servers, storage, networking,
                consulting, and support. HPE has made significant contributions
                to server technology and data center infrastructure, and it
                continues to innovate in areas like edge computing and
                artificial intelligence.
              </div>
              <br></br>
              <div>
                Throughout its history, HP has shown a consistent commitment to
                research and innovation, leading to contributions not just in
                computing, but also in areas such as 3D printing and digital
                manufacturing. As of today, HP Inc. and Hewlett Packard
                Enterprise continue to be influential entities in their
                respective markets.
              </div>
            </p>
          </div>

          <div
            className="col-span-1 h-fit p-10 bg-maroon flex flex-col items-center rounded-lg"
            style={{
              color: "white",
              backgroundImage: 'url("../pictures/IntroHomePagePic")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <img
              src={hpP2}
              alt="computer version image"
              height="auto"
              width="600px"
              style={{ maxHeight: "400px" }}
            />
            <a
              href="https://www.hp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline cursor-pointer text-3xl text-white">
              Hewlett-Packard Company (HP)
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default TopManufacturers;
