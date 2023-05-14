import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import historyPic1 from "../pictures/1930pic1.jpeg";
import React from "react";

function HistoryDropdown() {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (eventKey) => {
    setExpandedItem(eventKey === expandedItem ? null : eventKey);
  };

  return (
    <div className="flex justify-center" style={{ zIndex: "1" }}>
      <div className="w-full max-w-screen-md p-4">
        <Accordion activeKey={expandedItem} onSelect={handleToggle} className="bg-maroon">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="bg-maroon p-4">1930s</Accordion.Header>
            <Accordion.Body className="p-2" style={{ minWidth: "600px" }}>
              <div className="text-center">
                <img src={historyPic1} alt="hispic1" className="mx-auto" />
                <p>From 1956 to 2003,</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className="bg-maroon p-4">1940s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className="bg-maroon p-4">1950s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default HistoryDropdown;





// IBM produced magnetic disk storage devices
//                   until it sold its hard disk drive business to Hitachi. The
//                   company's employees were instrumental in creating and
//                   advancing the technology for both the hard disk drive and
//                   floppy disk drive. Despite the unchanged basic mechanical
//                   arrangement of hard disk drives since the IBM 1301, there have
//                   been dramatic improvements in their capacity, performance,
//                   cost, and physical size. IBM was a manufacturer of 8-inch
//                   floppy disk drives until the mid-1980s but did not play a
//                   significant role in producing smaller-sized, 5.25- or 3.5-inch
//                   floppy disk drives. IBM initially only offered its magnetic
//                   disk drives for sale and did not make them available with
//                   original equipment manufacturer terms until 1981. However, by
//                   1996, IBM stopped producing hard disk drives unique to its
//                   systems and began offering all its HDDs as an original
//                   equipment manufacturer. IBM uses several terms to describe its
//                   magnetic disk drives, such as direct-access storage device,
//                   disk file, and diskette file, but the current industry
//                   standard terms of hard disk drive and floppy disk drive are
//                   used here.


          {/* <Accordion.Item eventKey="3">
            <Accordion.Header className="bg-maroon p-4">1960s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header className="bg-maroon p-4">1970s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header className="bg-maroon p-4">1980s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header className="bg-maroon p-4">1990s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header className="bg-maroon p-4">2000s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header className="bg-maroon p-4">2010s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item> */}
