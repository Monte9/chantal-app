import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { TwitterShareButton, TwitterIcon } from 'react-share';

import Input from './Input';
import Posts from './Posts';

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjm49mw1o23mp0145mq2e3ecx"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <nav className="navbar navbar-dark bg-primary sticky-nav">
            <div className="container">
              <a className="navbar-brand" href="#">Chantal - Share stories, anonymously!</a>
              <a className="float-right navbar-twitter-share">
                <TwitterShareButton
                  title="Check out this website where you can share stories anonymously!"
                  via="MThakkar_"
                  url="http://chantal.app">
                  <TwitterIcon
                    size={32}
                    round
                  />
                </TwitterShareButton>
              </a>
            </div>
          </nav>
          <div>
            <Input />
            <Posts />
          </div>
          <nav className="navbar navbar-default navbar-fixed-bottom footer-container">
            <div>Made by <a href="https://github.com/monte9">Monte Thakkar</a> | Share on</div>
            <TwitterShareButton
              title="Check out this website where you can share stories anonymously!"
              via="MThakkar_"
              url="http://chantal.app">
              <a href="">&nbsp;Twitter</a>
            </TwitterShareButton>
          </nav>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
