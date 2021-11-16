import React from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setuser, showHide } from "../actions/index";
import { useEffect } from "react";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
const AddEditForm = () => {
  const dispatch = useDispatch();
  const updateUsers = useSelector((state) => state.setUser);
  const getId = updateUsers.toggle.handleId;
  const { name, username, email, phone } = updateUsers.data;
  const onChange = (e) => {
    const { name, value } = e.target;
    const addusers = { ...updateUsers.data, [name]: value };
    dispatch(setuser(addusers));
  };
  const updateUser = async (state) => {
    const response = await axios.post("http://localhost:3008/users", {
      ...updateUsers.data,
    });
    dispatch(setuser(response.data));
  };
  const OnSubmit = async () => {
    if (getId === undefined) {
      updateUser(updateUsers.data);
    } else {
      await axios.put(`http://localhost:3008/users/${getId}`, updateUsers.data);
    }
  };
  const handleHideToggle = () => {
    dispatch(
      showHide(!updateUsers.toggle, (updateUsers.data = updateUsers.record))
    );
  };
  useEffect(() => {
    editUser();
  }, []);
  const editUser = async () => {
    const result = await axios.get(`http://localhost:3008/users/${getId}`);
    dispatch(setuser(result.data));
  };
  return (
    <>
      <div className="container p-3 text-center bg-light">
        <Modal show={updateUsers.toggle} onHide={handleHideToggle}>
          <Modal.Header closeButton>
            {getId === undefined ? (
              <Modal.Title>Add User</Modal.Title>
            ) : (
              <Modal.Title>Edit User</Modal.Title>
            )}
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={OnSubmit}>
              <InputGroup className=" p-2 -3 ">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <FormControl
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => onChange(event)}
                />
              </InputGroup>
              <InputGroup className="p-2 -3 ">
                <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
                <FormControl
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => onChange(event)}
                />
              </InputGroup>
              <InputGroup className="p-2 -3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <FormControl
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => onChange(event)}
                />
              </InputGroup>
              <InputGroup className="p-2 -3 ">
                <InputGroup.Text id="basic-addon1">Mobile</InputGroup.Text>
                <FormControl
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(event) => onChange(event)}
                />
              </InputGroup>
              <Modal.Footer>
                {getId === undefined ? (
                  <Button variant="success" type="submit">
                    Add User
                  </Button>
                ) : (
                  <Button variant="warning" type="submit">
                    Edit User
                  </Button>
                )}
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default AddEditForm;
