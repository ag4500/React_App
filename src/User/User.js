import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import EditForm from "./EditUser";
import ModalForm from "./AddUser";
import { users, show, edit_show as edit } from "../actions/index";
import { Table } from "react-bootstrap";
class Users extends React.Component {
  handleShow = () => {
    this.props.show(!this.props.isOpen);
  };
  handleEdit = (id) => {
    this.props.edit({ isEdit: true, edit_id: id });
  };
  onData = async () => {
    const api = await axios.get("http://localhost:3008/users");
    this.props.users(api.data);
  };
  componentDidMount() {
    this.onData();
  }
  Post_Data = (e) => {
    this.props.history.push(`/users/${e}/posts`);
  };
  ToDo_Data = (e) => {
    this.props.history.push(`/users/${e}/todos`);
  };
  render() {
    let userData = this.props.my_user;
    return (
      <>
        <Button className="my-2" variant="info" onClick={this.handleShow}>
          Add User
        </Button>
        {this.props.isOpen ? (
          <ModalForm />
        ) : this.props.isEdit ? (
          <EditForm />
        ) : (
          <Table striped bordered hover size="lg">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.username}</td>
                  <Button
                    variant="outline-info"
                    className="mx-1"
                    onClick={() => this.Post_Data(data.id)}
                  >
                    ShowPost
                  </Button>
                  <Button
                    variant="outline-info"
                    className="mx-1"
                    onClick={() => this.ToDo_Data(data.id)}
                  >
                    ShowToDo
                  </Button>
                  <Button
                    variant="outline-warning"
                    className="mx-1"
                    onClick={() => this.handleEdit(data.id)}
                  >
                    Edit User
                  </Button>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </>
    );
  }
}
const mapDispatchToProps = {
  users,
  show,
  edit,
};
const mapStateToProps = (state) => ({
  my_user: state.users,
  isOpen: state.isOpen,
  isEdit: state.isEdit,
});
const UsersConnectedWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersConnectedWithRedux;
