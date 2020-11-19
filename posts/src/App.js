import React, { Component } from 'react';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';

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
    ]
  }
  render() { 
    return ( 
      <div className="App">
        <PostForm />
        <hr />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
