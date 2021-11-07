import React from "react";
import { useState } from "react";
import axios from "axios";
import { InputGroup } from "react-bootstrap";
import { FormControl, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
const AddUser = () => {
  let history = useHistory();
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
  const UpdateUser = async (state) => {
    const response = await axios.post("http://localhost:3008/users", {
      ...state,
    });
    setState(response.data);
    history.push("/user");
  };
  const OnSubmit = async (e) => {
    e.preventDefault();
    UpdateUser(state);
  };
  return (
    <>
      <div className="container p-3 text-center bg-light">
        <h1 className="mb-1">Add User</h1>
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
          <Button variant="success" type="submit">
            Add User
          </Button>
        </Form>
      </div>
    </>
  );
};
export default AddUser;
