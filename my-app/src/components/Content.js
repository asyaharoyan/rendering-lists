import React, { Component } from 'react';
import {savedPosts} from "../posts.json";
import css from './css/Content.module.css';
import PostItem from './PostItem';
import Loader from './Loader';


class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
          isLoaded: false,
          posts: []
        }
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          isLoaded: true,
          posts: savedPosts,
        })
      }, 2000)
    }

    searchHandler = (e) => {
      const name = e.target.value.toLowerCase();
      const filteredPosts = savedPosts.filter((post) => {
        return post.name.toLowerCase().includes(name);
      });
      this.setState({
        posts: filteredPosts
      });
    }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label htmlFor='searchinput'>Search</label>
              <input
                type='search'
                id='searchinput'
                placeholder='By Author'
                onChange={(e) => this.searchHandler(e)}
                />
              <h4>Posts found: {this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
          {
            this.state.isLoaded ?
            <PostItem savedPosts={savedPosts}/> :
            <Loader />
          }
        </div>
      </div>
    )
  }
}

export default Content