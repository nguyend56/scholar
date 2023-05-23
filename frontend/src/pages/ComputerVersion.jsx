import React from "react";
import compVer from "../pictures/computerVersion.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const getComputerVersions = async () => {
  const {data} = await axios.get("http://localhost:5000/api/computerVersion");
  console.log(data)
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
  },[]);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {computerVers.map((computerVer, index) => (
        <Card key={index}>
          <Card.Header>{computerVer.name}</Card.Header>
          <Card.Body>
            <Card.Title>Information:</Card.Title>
            <Card.Text>
              {computerVer.manufacturer}
              {computerVer.model}
              {computerVer.year}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
      <div
        className="h-full w-full absolute top-0 left-0"
        style={{
          zIndex: -1,
          backgroundImage: `url(${compVer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>
    </div>
  );
}
export default ComputerVersion;
