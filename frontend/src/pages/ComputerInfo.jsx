/* eslint-disable */
import PageContainer from "../components/PageContainer.component";
import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
                <Link to={computer.articleUrl} target="_blank">
                <Button variant="primary">Article</Button>
              </Link>
                
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </PageContainer>
  );
};

export default ComputerInfo;
