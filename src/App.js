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
              <div className="navbar-brand">Chantal - Share stories, anonymously!</div>
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
          <nav className="navbar navbar-default navbar-fixed-bottom footer">
            <div className="footer-container">
              <div className="footer-about-container">
                <div>Made by <a href="https://github.com/monte9" target="_blank" rel="noopener noreferrer">Monte Thakkar</a></div>
                <div className="footer-divider">&nbsp;|&nbsp;</div>
                <div className="footer-twitter-share">
                  Share on
                  <TwitterShareButton
                    title="Check out this website where you can share stories anonymously!"
                    via="MThakkar_"
                    url="http://chantal.app">
                    <a href="">&nbsp;Twitter</a>
                  </TwitterShareButton>
                </div>
              </div>
              <div className="footer-meaning-container">
                <a href="https://www.urbandictionary.com/define.php?term=Chantal" target="_blank" rel="noopener noreferrer">What does Chantal mean?</a>
              </div>
            </div>
          </nav>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
