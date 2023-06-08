/* eslint-disable */

import backgroundImg from "../pictures/WallpaperDog-10752030.jpg";
import PageContainer from "../components/PageContainer.component";
import boxPic from "../pictures/HomePagePic1.jpeg";
import computerVersionImage from "../pictures/IntroHomePagePic.jpeg";
import hightlightPic1 from "../pictures/HightlightPic1.webp";
import hightlightPic2 from "../pictures/highlightPic2.jpeg";
import hightlightPic3 from "../pictures/highlightPic3.jpeg";
import hightlightPic4 from "../pictures/highlightPic4.jpeg";
import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ComputerInfo = () => {
  const { searchString } = useParams();
  const [computers, setComputers] = useState([]);
  // make axious request here

  useEffect(() => {
    if (searchString) {
      axios
        .post(`http://localhost:5000/api/search`, {
          name: searchString === '_' ? '' : searchString,
        })
        .then((res) => {
          setComputers(res.data);
        });
    }
  }, [searchString]);

  return (
    <PageContainer>
      {computers.length === 0 ? (
        <div>No Computers found</div>
      ) : (
        <div>
          {computers.map((computer, i) => (
            <Card key={i}>
              <Card.Header>{computer.name}</Card.Header>
              <Card.Body>
                <Card.Title>Information:</Card.Title>
                <Card.Text>
                  {computer.manufacturer} {computer.model} {computer.year}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </PageContainer>
  );
};

export default ComputerInfo;
