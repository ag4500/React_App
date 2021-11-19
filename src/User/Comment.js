import React from "react";
import { connect } from "react-redux";
import { comments, snakebar } from "../actions/index";
import { commentData } from "../thunks/comments";
import { ListGroup } from "react-bootstrap";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
class CommentPost extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.commentData(id);
  }
  handleClose = () => {
    this.props.snakebar({ toggle: false });
  };
  render() {
    const commentData = this.props.myComment.comment;
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center my-2 text-danger">Comments..</h3>
          {commentData.map((data) => (
            <ListGroup className="py-3">
              <ListGroup.Item>{data.name}</ListGroup.Item>
              <ListGroup.Item>{data.body}</ListGroup.Item>
            </ListGroup>
          ))}
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "bottom" }}
          open={this.props.myComment.snakeShowHide.toggle}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message={<span>"{this.props.myComment.snakeShowHide.err}"</span>}
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
  comments,
  commentData,
  snakebar,
};
const mapStateToProps = (state) => ({
  myComment: state.comment,
});
const commentsConnectedWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentPost);
export default commentsConnectedWithRedux;
