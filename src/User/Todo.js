import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import {todos} from '../actions/index';
import { ListGroup } from "react-bootstrap";
 class TodoUser extends React.Component {
  TodoData = async (id) => {
    const todo = await axios.get(`http://localhost:3008/users/${id}/todos`);
    this.props.todos(todo.data)
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.TodoData(id);
  }
  render() {
    const todoData = this.props.my_todo;
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
const mapDispatchToProps={
  todos
 }
 const mapStateToProps=(state)=>({
  my_todo:state.todo
})
const TodosConnectedWithRedux = connect(mapStateToProps, mapDispatchToProps)(TodoUser);

export default TodosConnectedWithRedux
