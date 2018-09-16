import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Post from './Post';

class Posts extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            allPosts {
              id
              createdAt
              updatedAt
              description
              category
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return data.allPosts.map((currentPost, key) => (
            <Post post={currentPost} key={`post-${key}`}/>
          ));
        }}
      </Query>
    )
  }
};

export default Posts;
