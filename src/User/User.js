import React from "react";
import AddEditForm from "./AddUser";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { users, showHide, snakebar } from "../actions/index";
import { Table } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { userData } from "../thunks/users";
class Users extends React.Component {
  handleShowToggle = (id) => {
    if (id === undefined) {
      this.props.showHide(!this.props.toggle);
    } else {
      this.props.showHide({ toggle: true, handleId: id });
    }
  };
  handleClose = () => {
    this.props.snakebar({ toggle: false });
  };
  componentDidMount() {
    this.props.userData();
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
        {this.props.handleShow.toggle ? <AddEditForm /> : undefined}
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
        <Snackbar
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
          open={this.props.user.snakeShowHide.toggle}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message={<span>{this.props.user.snakeShowHide.err}</span>}
          action={[
            <IconButton
              key="close"
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>,
          ]}
        />
      </>
    );
  }
}
const mapDispatchToProps = {
  users,
  showHide,
  userData,
  snakebar,
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
