import { Button } from "react-bootstrap";
import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };
  }
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
  Edit_Data = (e) => {
    this.props.history.push(`/users/edit/${e}`);
  };
  Add_User = () => {
    this.props.history.push("/users/add");
  };
  render() {
    let userData = this.state.arr;
    return (
      <>
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
                  onClick={() => this.Edit_Data(data.id)}
                >
                  Edit User
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          variant="success"
          size="lg"
          className="mx-5 col-md-11 text-center"
          onClick={this.Add_User}
        >
          Add User
        </Button>
      </>
    );
  }
}
export default Users;
