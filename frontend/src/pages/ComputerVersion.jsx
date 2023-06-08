import React from "react";
import compVer from "../pictures/computerVersion.jpeg";
// import "../pictures/*";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const getComputerVersions = async () => {
  const { data } = await axios.get("http://localhost:5000/api/computerVersion");
  console.log(data);
  return data;
};

function ComputerVersion() {
  const [computerVers, setComputerVers] = useState([]);

  useEffect(() => {
    getComputerVersions()
      .then((data) => {
        setComputerVers(data);
      })
      .catch((er) =>
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        )
      );
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${compVer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <div className="w-full grid grid-cols-4 gap-4 p-4">
        {computerVers.map((computerVer, index) => (
          <Card key={index} style={{ backgroundColor: "#800000", color: '#ffffff' }}>
            <Card.Header style={{ backgroundColor: '#000000', color: '#ffffff' }}>{computerVer.name}</Card.Header>
            <Card.Body>
              <Card.Title>Information:</Card.Title>
              <Card.Text>{computerVer.manufacturer}</Card.Text>
              <Card.Text>{computerVer.year}</Card.Text>
              {/* {import pic from `../pictures/${computerVer.name}`} */}
              <img src={"/frontend/public/altair 8800.jpeg"} />
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ComputerVersion;
