import React, { Component } from 'react';
import SearchBar from "../containers/search_bar";
import ServiceList from "../containers/service_list";
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ServiceList />
      </div>
    );
  }
}
//gggg