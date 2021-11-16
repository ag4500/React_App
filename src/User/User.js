import React from "react";
import axios from "axios";
import AddEditForm from "./AddUser";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { users, showHide} from "../actions/index";
import { Table } from "react-bootstrap";
class Users extends React.Component {
  handleShowToggle = (id) => {
    if (id === undefined) {
      this.props.showHide(!this.props.toggle);
    } else {
      this.props.showHide({ toggle: true, handleId: id });
    }
  };
  onData = async () => {
    const api = await axios.get("http://localhost:3008/users");
    this.props.users(api.data);
  };
  componentDidMount() {
    this.onData();
  }
  postData = (e) => {
    this.props.history.push(`/users/${e}/posts`);
  };
  todoData = (e) => {
    this.props.history.push(`/users/${e}/todos`);
  };
  render() {
    const userData = this.props.user.users;
    return (
      <>
        <Button
          className="my-2"
          variant="info"
          onClick={() => this.handleShowToggle()}
        >
          Add User
        </Button>
        {this.props.handleShow.toggle ? <AddEditForm/> : undefined}
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
                  onClick={() => this.postData(data.id)}
                >
                  ShowPost
                </Button>
                <Button
                  variant="outline-info"
                  className="mx-1"
                  onClick={() => this.todoData(data.id)}
                >
                  ShowToDo
                </Button>
                <Button
                  variant="outline-warning"
                  className="mx-1"
                  onClick={() => this.handleShowToggle(data.id)}
                >
                  Edit User
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
const mapDispatchToProps = {
  users,
  showHide,
};
const mapStateToProps = (state) => ({
  user: state.user,
  handleShow: state.setUser,
});
const usersConnectedWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default usersConnectedWithRedux;
