import { Button } from "react-bootstrap";
import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ModalForm from "./AddUser";
import EditForm from "./EditUser";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isOpen: false,
      isEdit: false,
    };
  }
  handleShow = () => {
    this.setState({ isOpen: true });
  };
  handleHide = () => {
    this.setState({ isOpen: false });
  };
  handleEdit = (id) => {
    this.setState({ isEdit: true, edit_id: id });
  };
  handleEdithide = () => {
    this.setState({ isEdit: false });
  };
  onData = async () => {
    const api = await axios.get("http://localhost:3008/users");
    this.setState({
      arr: api.data,
    });
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
    let userData = this.state.arr;
    return (
      <>
        <Button onClick={this.handleShow}>Add User</Button>
        {this.state.isOpen ? (
          <ModalForm show={this.state.isOpen} hide={this.handleHide} />
        ) : this.state.isEdit ? (
          <EditForm
            show={this.state.isEdit}
            id={this.state.edit_id}
            hide={this.handleEdithide}
          />
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
export default Users;
