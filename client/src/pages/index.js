import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Landing() {
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);

  const { user, isLogged } = auth;

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

  function deleteListing(id) {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .delete("/api/listings/delete/" + id, config)
      .then(function () {
        window.location.reload();
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function Listing(props) {
    return (
      <tr>
        <td>{props.data.title}</td>
        <td>{props.data.description}</td>
        <td>{props.data.city}</td>
        <td>{props.data.category}</td>
        <td>
          <Link to={"/listings/" + props.data.id}>More information</Link>
          {props.user_id == props.data.user_id && (
            <Button
              variant="danger"
              onClick={(e) => {
                e.preventDefault();
                deleteListing(props.data.id);
              }}
            >
              Delete
            </Button>
          )}
        </td>
      </tr>
    );
  }

  function ListingList(listingArr) {
    return listingArr.map((listing, index) => {
      return <Listing data={listing} user_id={user.id} key={index} />;
    });
  }

  return (
    <Container>
      {isLogged && (
        <Button variant="outline-primary" href="/new_listing">
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
