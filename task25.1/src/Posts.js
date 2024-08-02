import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: ''
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Update state with the first 5 records
        this.setState({ posts: response.data.slice(0, 5) });
      })
      .catch(error => {
        this.setState({ error: 'Error fetching data' });
      });
  }

  render() {
    const { posts, error } = this.state;

    return (
      <div>
        <h2>Posts</h2>
        {error && <p>{error}</p>}
        <ul>
          {posts.map(post => (
            <li>
              <p>{post.id}</p>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
