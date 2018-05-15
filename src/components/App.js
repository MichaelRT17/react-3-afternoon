import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post'

import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input:'',
      posts: [],
      mainUrl: 'https://practiceapi.devmountain.com/api'
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
    this.filterPosts = this.filterPosts.bind( this );
  }
  
  componentDidMount() {
    axios.get(this.state.mainUrl + '/posts').then(res => {
      this.setState({
        posts:res.data
      })
    })
  }

  updatePost(id, text) {
    axios.put(this.state.mainUrl + `/posts?id=${id}`, {text}).then(res => {
      this.setState({
        posts:res.data
      })
    })
  }

  deletePost(id) {
    axios.delete(this.state.mainUrl + `/posts?id=${id}`).then(res => {
      this.setState({
        posts:res.data
      })
    })
  }

  createPost(text) {
    axios.post(this.state.mainUrl + '/posts', {text}).then(res => {
      this.setState({
        posts:res.data
      })
    })
  }

  filterPosts(input) {
    this.setState({
      input:input
    })
  }

  render() {
    console.log(this.state)
    const { posts } = this.state;
    
    return (
      <div className="App__parent">
        <Header filterPosts={this.filterPosts}/>

        <section className="App__content">

          <Compose createPostFn={this.createPost}/>
          {
            posts.filter(e => {return e.text.includes(this.state.input)}).map( post => (
              <Post key={post.id} 
                    text={post.text}
                    date={post.date}  
                    id={post.id}
                    updatePostFn={this.updatePost} 
                    deletePostFn={this.deletePost}/>
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
