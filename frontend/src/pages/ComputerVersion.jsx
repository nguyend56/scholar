import React from "react";
import compVer from "../pictures/computerVersion.jpeg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
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
        padding: '70px 0', // Assuming header and footer height are 70px
      }}>
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {computerVers.map((computerVer, index) => (
    <Card key={index} style={{ backgroundColor: "#800000", color: '#ffffff' }}>
      <Card.Header style={{ backgroundColor: '#000000', color: '#ffffff' }}>{computerVer.name}</Card.Header>
      <Card.Body>
        <Card.Title>Information:</Card.Title>
        <br></br>
        <Card.Text>Manufacturer: {computerVer.manufacturer}</Card.Text>
        <Card.Text>Published year: {computerVer.year}</Card.Text>
        <Card.Text>Price: ${computerVer.price}</Card.Text>
        <Card.Text>CPU: {computerVer.cpu}</Card.Text>
        <Card.Text>RAM: {computerVer.ram}</Card.Text>
        <Card.Text>Hard drive: {computerVer.hardDrive}</Card.Text>

        <div>
          <img className="w-full h-64 object-cover" src={"http://localhost:5002/"+ computerVer.name.split(" ").join("-") + ".jpeg"} />
        </div>
        <br></br>
        <Link to={computerVer.articleUrl} target="_blank">
          <Button variant="primary">Article</Button>
        </Link>
      </Card.Body>
    </Card>
  ))}
</div>

    </div>
  );
}

export default ComputerVersion;
