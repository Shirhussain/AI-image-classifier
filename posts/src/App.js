import cuid from 'cuid';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import StarWar from './components/StarWar/starWar';

class App extends Component {
  state = {  
    posts: [
      {
        id: 1,
        text: 'Hello Mr Danishyar'
      },
      {
        id: 2,
        text: 'Great to have you'
      },
      {
        id: 3,
        text: 'Bye bye'
      }
    ], 
    showPosts : false
  }

  showPostsHandler = () => {
    const show = this.state.showPosts
    this.setState({showPosts: !show})
  }

  addPost = (text) => {
    console.log('create'+text)
    const new_post = {
      id: cuid,
      text: text,
    }
    // creating a new post and append to the old posts
    const posts = [...this.state.posts, new_post]
    this.setState({posts})
  }

  deletePostHandler = (id) =>{
    console.log(id)
    let posts = [...this.state.posts]
    posts = posts.filter(post=>post.id !== id)
    this.setState({posts})
}
  render() { 
    return ( 
        <Container>
        <PostForm add={this.addPost} />
        <hr />
        <PostList 
          posts={this.state.posts} 
          status={this.state.showPosts} 
          show={this.showPostsHandler}
          delete = {this.deletePostHandler}
        />
        <hr />
        <StarWar />
        </Container>
    );
  }
}

export default App;
