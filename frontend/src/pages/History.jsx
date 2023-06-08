import React, { useState } from "react";
import HistoryPic from "../pictures/HistoryPic.jpeg";
import hisPic1 from "../pictures/hisPic1.jpeg"
import hisPic2 from "../pictures/hisPic2.webp"
import hisPic3 from "../pictures/hisPic3.jpeg"
import hisPic4 from "../pictures/hisPic4.avif"
import hisPic5 from "../pictures/hisPic5.jpeg"
import hisPic6 from "../pictures/hisPic6.webp"
import hisPic7 from "../pictures/hisPic7.jpeg"
import hisPic8 from "../pictures/hisPic8.jpeg"
import hisPic9 from "../pictures/hisPic9.webp"
import hisPic10 from "../pictures/hisPic10.jpeg"
import hisPic11 from "../pictures/hisPic11.jpeg"

function About() {
  const [activeIndex, setActiveIndex] = useState([]);

  const AccordionItem = ({ index, title, content, imgSrc }) => (
    <div className="border-b border-gray-200">
        <button
            onClick={() => {
                if (activeIndex.includes(index)) {
                    setActiveIndex(activeIndex.filter((i) => i !== index));
                } else {
                    setActiveIndex([...activeIndex, index]);
                }
            }}
            className="w-full py-3 px-4 text-left text-white focus:outline-none"
            style={{ backgroundColor: "black" }}>
            {title}
        </button>
        <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex.includes(index) ? "max-h-[1000px]" : "max-h-0"
            }`}
            style={{ backgroundColor: "maroon" }}>
            <div className="p-4 text-white flex flex-col items-center justify-center">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    className="mb-4 object-cover w-full h-64 md:h-96 lg:h-[25rem] xl:h-[30rem]" 
                />
                {content}
            </div>
        </div>
    </div>
);


  const accordionData = [
    {
      title: "Mechanical computers (Early 19th century)",
      content:
        "Originating in the early 19th century, mechanical computing devices were theoretical forerunners of today computer systems. Foremost among these were Charles Babbage Analytical Engine and Difference Engine, which utilized a series of mechanical components such as gears and levers to perform arithmetic operations. Although never fully realized due to technological limitations of the time, these engines laid the groundwork for the concept of programmable machines, representing a crucial leap forward in the field of computing",
      imgSrc: hisPic1, 
    },
    {
      title: "Electromechanical computers (1930s-1940s)",
      content:
        "Combining electrical switches, or relays, with mechanical components, electromechanical computers represented an evolution from purely mechanical computing devices. Machines like the Harvard Mark I and the German Z3 used sequences of electrical impulses to drive mechanical computation processes, achieving a degree of programmability. While still cumbersome and slow by modern standards, these systems established the practical viability of automated, programmable computation.",
      imgSrc: hisPic2, 
    },
    {
      title: "Vacuum tube computers (1940s-1950s)",
      content:
        "Vacuum tube technology, which had initially been developed for radio and telephone applications, became the foundation for first-generation computers. Machines like the ENIAC and UNIVAC utilized vacuum tubes both as switches and memory elements, enabling much faster and more complex calculations than their electromechanical predecessors. However, vacuum tube systems were notoriously prone to failure and required significant power and cooling infrastructure.",
      imgSrc: hisPic3, 
    },
    {
      title: "Transistor computers (1950s-1960s)",
      content:
        "The invention of the transistor in the late 1940s represented a monumental breakthrough in computing technology. Second-generation computers, such as the IBM 709, replaced vacuum tubes with transistors, yielding significant improvements in speed, reliability, and efficiency. These smaller, less power-hungry machines were more practical for commercial and scientific applications, broadening the accessibility of computer technology.",
      imgSrc: hisPic4, 
    },
    {
      title: "Integrated circuit computers (1960s-1970s)",
      content:
        "Third-generation computers replaced individual transistors with integrated circuits (also known as microchips), which combined many transistors on a single silicon chip. This development dramatically increased the speed and efficiency of computers and further reduced their size and cost. The IBM System/360, for instance, represented a flexible, powerful computer system that found widespread use in business and scientific computing.",
      imgSrc: hisPic5, 
    },
    {
      title: "Microprocessor computers (1970s-present)",
      content:
        "The advent of the microprocessor, a single chip that combined all the functions of a CPU, heralded the fourth generation of computers. This breakthrough led to the development of personal computers, such as the Apple II and IBM PC, which made powerful computing capabilities accessible to individuals and small businesses. These systems catalyzed a revolution in computing, enabling a wide range of new applications.",
      imgSrc: hisPic6, 
    },
    {
      title: "Supercomputers (1960s-present)",
      content:
        "Emerged in the 1960s, supercomputers utilized parallel processing techniques to execute millions of instructions simultaneously. Models like the Cray-1 were instrumental in high-stakes fields such as weather forecasting, nuclear simulations, and cryptanalysis. As technology advanced, supercomputers became faster, more energy-efficient, and more capable, with modern systems reaching speeds of many petaflops and exploring the possibilities of exascale computing.",
      imgSrc: hisPic7, 
    },
    {
      title: "Networked computers and the internet (1960s-present)",
      content:
        "The invention of ARPANET in the late 1960s marked the genesis of the internet, revolutionizing the world of computing by enabling computers to communicate and share resources over large distances. This innovation paved the way for distributed computing, the World Wide Web, and the host of connected services and platforms we know today, drastically transforming business, social interaction, and access to information.",
      imgSrc: hisPic8, 
    },
    {
      title: "Mobile computing (2000s-present)",
      content:
        "The 21st century has seen the explosion of mobile computing devices, such as laptops, smartphones, and tablets. These devices, with their powerful processors, large memories, and rich graphical interfaces, have brought computing into the hands of individuals, making it a ubiquitous aspect of modern life. This development has opened new vistas for real-time information access, digital commerce, social networking, and many other applications.",
      imgSrc: hisPic9, 
    },
    {
      title: "Cloud computing (2010s-present)",
      content:
        "With the advent of reliable high-speed internet, the paradigm of computing has shifted towards the cloud. Cloud computing allows data storage and processing to occur on powerful remote servers, reducing the need for powerful local hardware. This technology has made it possible to access complex applications and vast storage from anywhere, powering an ever-growing range of services and platforms that shape our digital lives.",
      imgSrc: hisPic10, 
    },
    {
      title: "Quantum computers (Current research)",
      content:
        "Quantum computing, currently in the experimental stages, uses the principles of quantum mechanics to process information. Quantum computers have the potential to solve certain problems exponentially faster than classical computers, due to their ability to exist in multiple states simultaneously. While practical quantum computing is still a work in progress, its realization could signify a quantum leap in computation capability, tackling tasks currently considered computationally unfeasible.",
      imgSrc: hisPic11, 
    },
  ];

  return (
    <div className="relative min-h-screen pt-20 pb-20 overflow-y-auto">
      <div
        className="relative flex flex-col items-center justify-center"
        style={{
          minHeight: "calc(100vh - 5rem)", // Adjust this value according to your header and footer size
          backgroundImage: `url(${HistoryPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
        <div className="relative z-10 w-7/12">
          <button
            onClick={() => setActiveIndex(accordionData.map((_, i) => i))}
            className="py-2 px-4 text-white mb-4 w-full"
            style={{ backgroundColor: "maroon" }}>
            Expand All
          </button>
          <button
            onClick={() => setActiveIndex([])}
            className="py-2 px-4 text-white mb-4 w-full"
            style={{ backgroundColor: "maroon" }}>
            Collapse All
          </button>
          {accordionData.map((item, index) => (
            <AccordionItem key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
