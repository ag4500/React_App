import React from "react";
import axios from "axios";
import { Button, ListGroup } from "react-bootstrap";
export default class PostUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Post: [],
    };
  }
  postData = async (userId) => {
    const post = await axios.get(`http://localhost:3008/users/${userId}/posts`);
    this.setState({
      Post: post.data,
    });
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.postData(id);
  }
  CommentData = () => {
    const post_id = this.props.match.params.id;
    this.props.history.push(`/posts/${post_id}/comments`);
  };
  render() {
    const postData = this.state.Post;
    let post_Data = postData.map((data) => {
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
          <h3 className="text-center my-2 text-secondary">
            Posts...
            <Button
              className="mx-4"
              variant="outline-secondary"
              size="sm"
              onClick={this.CommentData}
            >
              Comment
            </Button>
          </h3>
          {post_Data}
        </div>
      </>
    );
  }
}
