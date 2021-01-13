import React, { useState } from "react";
import { useSelector } from "react-redux";
import http from "Utils/http-common";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { showErrMsg, showSuccessMsg } from "Components/Notification";

const initialState = {
  title: "",
  description: "",
  city: "",
  category: "",
  err: "",
  success: "",
};

function New_Listing() {
  const token = useSelector((state) => state.token);

  const [data, setData] = useState(initialState);

  const { title, description, city, category, err, success } = data;

  function submit(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      city,
      category,
    };

    const config = {
      headers: {
        Authorization: token,
      },
    };

    http
      .post("/listings/create", data, config)
      .then(function (response) {
        setData({ ...data, err: "", success: response.data.msg });
      })
      .catch(function () {
        setData({ ...data, err: "Error", success: "" });
      });
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  return (
    <Container>
      <h2 id="pageTitle">New Listing</h2>
      <div className="formBox">
        <Form.Group controlId="formTitle">
          <Form.Control
            type="title"
            placeholder="title"
            id="title"
            value={title}
            name="title"
            onChange={handleChangeInput}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Control
            type="description"
            placeholder="description"
            id="description"
            value={description}
            name="description"
            onChange={handleChangeInput}
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Control
            type="city"
            placeholder="city"
            id="city"
            value={city}
            name="city"
            onChange={handleChangeInput}
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Control
            type="category"
            placeholder="category"
            id="category"
            value={category}
            name="category"
            onChange={handleChangeInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => submit(e)}>
          Submit
        </Button>

        {success && showSuccessMsg(success)}
        {err && showErrMsg(err)}
      </div>
    </Container>
  );
}

export default New_Listing;
