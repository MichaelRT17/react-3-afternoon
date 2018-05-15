import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    console.log(this.refs)
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input ref='input' name='input' placeholder="Search Your Feed" />

          <SearchIcon id="Search__icon" onClick={() => this.props.filterPosts(this.refs.input.value)}/>
        </div>
        
      </section>
    )
  }
}