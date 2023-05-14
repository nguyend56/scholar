// import { Row, Container } from "react-bootstrap";

// const TopComputers = () => {
//   return (
//     <Container>
//       <Row xs={2} md={4} className="g-4 mt-5">
//         <div>
//             This is top computer
//         </div>
//       </Row>
//     </Container>
//   );
// };

// export default TopComputers;

import React from "react";
import backgroundImg from "../pictures/TopManufacturersPic.jpeg";

function TopManufacturers() {
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
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}></div>
    </div>
  );
}

export default TopManufacturers;
