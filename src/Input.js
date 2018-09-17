import React, { Component } from "react";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import CreatableSelect from 'react-select/lib/Creatable';

import './App.css';

import { POSTS_QUERY } from './Posts';

export const colourOptions = [
  { value: 'random', label: 'Random', color: '#00B8D9', isFixed: true },
  { value: 'IRL', label: 'IRL', color: '#0052CC' },
  { value: 'unexpected', label: 'Unexpected', color: '#5243AA' },
  { value: 'general', label: 'General', color: '#FF5630', isFixed: true }
];

const CREATE_POST = gql`
  mutation createPost($description: String!, $category: String!) {
    createPost(
      description: $description
      category: $category
    ) {
      id
    }
  }
`;

export default class Input extends Component {
  constructor() {
    super();

    this.state = {
      story: '',
      categories: [],
      enabled: false
    }
  }

  handleChange = (newValue: any, actionMeta: any) => {
    const categories = newValue.map(value => {
      return value.value
    })

    this.setState({ categories }, this.checkEnabled)
  };

  checkEnabled() {
    const { story, categories } = this.state;

    this.setState({
      enabled: story.length > 0 && categories.length > 0
    })
  }

  render() {
    const { story, categories, enabled } = this.state;

    return (
      <Mutation mutation={CREATE_POST} refetchQueries={[{ query: POSTS_QUERY }]}>
        {(createPost, { data }) => (
          <div className="input-container">
            <div className="form-group shadow-textarea form-container">
              <textarea
                className="form-control z-depth-1"
                type="text"
                rows="4"
                name="story"
                placeholder="Share a story.. it's totally anonymous."
                value={story}
                maxLength="1500"
                onChange={(event)=>{
                  this.setState({
                    story: event.target.value
                  }, this.checkEnabled);
                }}>
              </textarea>
              <div className="buttons-container">
                <CreatableSelect
                  className="select-element"
                  placeholder="Select category"
                  isMulti
                  onChange={this.handleChange}
                  options={colourOptions}
                />
                <button
                  type="button"
                  className="btn btn-primary btn-rounded share-button"
                  onClick={() => {
                    createPost({ variables: { description: story, category: categories[0] } });
                    this.setState({ story: '', categories: [] });
                  }}
                  disabled={!enabled}
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        )}
      </Mutation>
    )
  }
};
