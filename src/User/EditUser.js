import React from "react";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { InputGroup } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
const EditForm = (props) => {
  const getId = props.id;
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const { name, username, email, phone } = state;
  const OnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    EditUser();
  }, []);
  const EditUser = async () => {
    const result = await axios.get(`http://localhost:3008/users/${getId}`);
    setState(result.data);
  };
  const OnSubmit = async () => {
    await axios.put(`http://localhost:3008/users/${getId}`, state);
  };
  return (
    <>
      <div className="container p-3 text-center bg-light">
        <Modal show={props.show} onHide={props.hide}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={OnSubmit}>
              <InputGroup className=" p-2 -3 ">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <FormControl
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => OnChange(event)}
                />
              </InputGroup>
              <InputGroup className="p-2 -3 ">
                <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
                <FormControl
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => OnChange(event)}
                />
              </InputGroup>
              <InputGroup className="p-2 -3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <FormControl
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => OnChange(event)}
                />
              </InputGroup>
              <InputGroup className="p-2 -3 ">
                <InputGroup.Text id="basic-addon1">Mobile</InputGroup.Text>
                <FormControl
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(event) => OnChange(event)}
                />
              </InputGroup>
              <Modal.Footer>
                <Button variant="success" type="submit">
                  Edit User
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default EditForm;
