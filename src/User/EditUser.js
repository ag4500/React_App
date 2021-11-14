import React from "react";
import { Modal } from "react-bootstrap";
import {  useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {edituser} from '../actions/index'
import axios from "axios";
import { InputGroup } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
const EditForm = (props) => {
  const dispatch = useDispatch();
  const update_users = useSelector((state) => state.add_data);
  const getId = props.id;
  const { name, username, email, phone } = update_users;
  const OnChange = (e) => {
    const { name, value } = e.target;
    const updatedTodo = {...update_users,[name]: value };
    dispatch(edituser(updatedTodo))
  };
  useEffect(() => {
    EditUser();
  }, []);
  const EditUser = async () => {
    const result = await axios.get(`http://localhost:3008/users/${getId}`);
    dispatch(edituser(result.data))
  };
  const OnSubmit = async () => {
    await axios.put(`http://localhost:3008/users/${getId}`,update_users);
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
