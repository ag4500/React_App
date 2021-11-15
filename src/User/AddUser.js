import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { adduser, hide } from "../actions/index";
import React from "react";
import axios from "axios";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
const ModalForm = () => {
  const dispatch = useDispatch();
  const update_users = useSelector((state) => state);
  const { name, username, email, phone } = update_users.data;
  const OnChange = (e) => {
    const { name, value } = e.target;
    const add_users = { ...update_users.data, [name]: value };
    dispatch(adduser(add_users));
  };
  const UpdateUser = async (state) => {
    const response = await axios.post("http://localhost:3008/users", {
      ...update_users.data,
    });
    dispatch(adduser(response.data));
  };
  const OnSubmit = async () => {
    UpdateUser(update_users.data);
  };
  const handleHide = () => {
    dispatch(hide(!update_users.isOpen));
  };
  return (
    <>
      <div className="container p-3 text-center bg-light">
        <Modal show={update_users.isOpen} onHide={handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Add User</Modal.Title>
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
                <Button variant="primary" type="submit">
                  Add User
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default ModalForm;
