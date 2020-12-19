import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Listing(props) {
  return (
    <tr>
      <td>{props.data.title}</td>
      <td>{props.data.description}</td>
      <td>{props.data.city}</td>
      <td>{props.data.category}</td>
      <td>More information</td>
    </tr>
  );
}

function Landing() {
  const auth = useSelector((state) => state.auth);

  const { isLogged } = auth;

  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/listings")
      .then(function (response) {
        setListings(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function ListingList(listingArr) {
    return listingArr.map((listing, index) => {
      return <Listing data={listing} key={index} />;
    });
  }

  return (
    <Container>
      {isLogged && (
        <Button variant="outline-primary" href="/new-listing">
          Naujas skelbimas
        </Button>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>City</th>
            <th>Category</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ListingList(listings)}</tbody>
      </Table>
    </Container>
  );
}

export default Landing;
