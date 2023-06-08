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
    <div className="flex justify-center" style={{ zIndex: "1", width: "100%" }}>
      <div className="w-full p-4" style={{ width: "100%" }}>
        <Accordion activeKey={expandedItem} onSelect={handleToggle} className="bg-maroon" style={{ width: "100%" }}>
          <Accordion.Item eventKey="0" style={{ width: "100%" }}>
            <Accordion.Header className="bg-maroon p-4">1930s</Accordion.Header>
            <Accordion.Body className="p-2">
              <div className="text-center">
                <img src={historyPic1} alt="hispic1" className="mx-auto" />
                <p>From 1956 to 2003,</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
  
          <Accordion.Item eventKey="1" style={{ width: "100%" }}>
            <Accordion.Header className="bg-maroon p-4">1940s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>
  
          <Accordion.Item eventKey="2" style={{ width: "100%" }}>
            <Accordion.Header className="bg-maroon p-4">1950s</Accordion.Header>
            <Accordion.Body className="p-2">abc</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
  
  
  
}

export default HistoryDropdown;

