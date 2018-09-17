import React, { Component } from "react";

import './App.css';

import { timeSince } from './helpers';

export default class Post extends Component {
  render() {
    const { id, createdAt, description, category } = this.props.post;

    return (
      <div className="card" key={id} style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
          <h4 className="card-title">#{category}</h4>
          <h6 className="card-subtitle mb-2 text-muted">by Anonymous</h6>
          <p className="card-text">{description}</p>
          <p className="card-link text-muted no-margin-bottom">Posted {timeSince(createdAt)}</p>
        </div>
      </div>
    )
  }
};
