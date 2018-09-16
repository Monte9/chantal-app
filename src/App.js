import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './App.css';

import Posts from './Posts';

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjm49mw1o23mp0145mq2e3ecx"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Chantal - Share stories, anonymously!</a>
          </nav>
          <div>
            <Posts />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
