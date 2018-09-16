import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Post from './Post';

export const POSTS_QUERY = gql`{
  allPosts {
    id
    createdAt
    updatedAt
    description
    category
  }
}`;

class Posts extends Component {
  render() {
    return (
      <Query
        query={POSTS_QUERY}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return (
            <div className="posts-container">
              {
                data.allPosts.reverse().map((currentPost, key) => (
                  <Post post={currentPost} key={`post-${key}`}/>
                ))
              }
            </div>
          );
        }}
      </Query>
    )
  }
};

export default Posts;
