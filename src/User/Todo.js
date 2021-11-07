import React from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
export default class TodoUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todo: [],
    };
  }
  TodoData = async (id) => {
    const todo = await axios.get(`http://localhost:3008/users/${id}/todos`);
    this.setState({
      Todo: todo.data,
    });
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.TodoData(id);
  }
  render() {
    const todoData = this.state.Todo;
    let todo_Data = todoData.map((data) => {
      return (
        <ul key={data.id}>
          <li style={{ listStyleType: "square" }}>
            <ListGroup>
              <ListGroup.Item>{data.title}</ListGroup.Item>
            </ListGroup>
          </li>
        </ul>
      );
    });
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center my-2 text-danger">Todos...</h3>
          {todo_Data}
        </div>
      </>
    );
  }
}
