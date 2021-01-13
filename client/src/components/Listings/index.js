import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "Utils/http-common";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function Listing() {
  const { id } = useParams();

  const [listing, setListing] = useState(false);

  useEffect(() => {
    http
      .get("/listings/" + id)
      .then(function (response) {
        setListing(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      {listing && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{listing.listing.title}</td>
            </tr>
            <tr>
              <td>Descriptiom</td>
              <td>{listing.listing.description}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{listing.listing.city}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{listing.listing.category}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{listing.user.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{listing.user.email}</td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>{listing.user.avatar}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Listing;
