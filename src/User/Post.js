import React from "react";
import { connect } from "react-redux";
import { posts, snakebar } from "../actions/index";
import { postData } from "../thunks/posts";
import { Button, ListGroup } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
class PostUser extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.postData(id);
  }
  handleClose = () => {
    this.props.snakebar({ toggle: false });
  };
  commentData = () => {
    const postId = this.props.match.params.id;
    this.props.history.push(`/posts/${postId}/comments`);
  };
  render() {
    const postData = this.props.myPost.post;
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center my-2 text-secondary">
            Posts...
            <Button
              className="mx-4"
              variant="outline-secondary"
              size="sm"
              onClick={this.commentData}
            >
              Comment
            </Button>
          </h3>
          {postData.map((data) => (
            <ul key={data.id}>
              <li style={{ listStyleType: "square" }}>
                <ListGroup>
                  <ListGroup.Item>{data.title}</ListGroup.Item>
                </ListGroup>
              </li>
            </ul>
          ))}
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "bottom" }}
          open={this.props.myPost.snakeShowHide.toggle}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message={<span>"{this.props.myPost.snakeShowHide.err}"</span>}
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
  posts,
  postData,
  snakebar,
};
const mapStateToProps = (state) => ({
  myPost: state.post,
});
const postsConnectedWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostUser);
export default postsConnectedWithRedux;
