import React from "react";
import { connect } from "react-redux";
import { todos, snakebar } from "../actions/index";
import { todoData } from "../thunks/todo";
import { ListGroup } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
class TodoUser extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.todoData(id);
  }
  handleClose = () => {
    this.props.snakebar({ toggle: false });
  };
  render() {
    const todoData = this.props.mytodo.todo;
    const todos = todoData.map((data) => {
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
          {todos}
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "bottom" }}
          open={this.props.mytodo.snakeShowHide.toggle}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message={<span>"{this.props.mytodo.snakeShowHide.err}"</span>}
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
  todos,
  todoData,
  snakebar,
};
const mapStateToProps = (state) => ({
  mytodo: state.todo,
});
const todosConnectedWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoUser);
export default todosConnectedWithRedux;
