import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { comments } from "../actions/index";
import { ListGroup } from "react-bootstrap";
class CommentPost extends React.Component {
  commentData = async (post_id) => {
    const comment = await axios.get(
      `http://localhost:3008/posts/${post_id}/comments`
    );
    this.props.comments(comment.data);
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.commentData(id);
  }
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
      </>
    );
  }
}
const mapDispatchToProps = {
  comments,
};
const mapStateToProps = (state) => ({
  myComment: state.comment,
});
const CommentsConnectedWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentPost);

export default CommentsConnectedWithRedux;
