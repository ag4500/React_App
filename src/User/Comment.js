import React from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
export default class CommentPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Comment: [],
    };
  }
  CommentData = async (post_id) => {
    const comment = await axios.get(
      `http://localhost:3008/posts/${post_id}/comments`
    );
    this.setState({
      Comment: comment.data,
    });
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.CommentData(id);
  }
  render() {
    const commentData = this.state.Comment;
    let comment_Data = commentData.map((data) => {
      return (
        <>
          <ListGroup className="py-3">
            <ListGroup.Item>{data.name}</ListGroup.Item>
            <ListGroup.Item>{data.body}</ListGroup.Item>
          </ListGroup>
        </>
      );
    });
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center my-2 text-danger">Comments..</h3>
          {comment_Data}
        </div>
      </>
    );
  }
}
