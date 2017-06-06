import React from 'react';

import FruitBasket from './FruitBasket';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: [],
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruits() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ currentFilter: e.target.value });
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }



  render() {
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} updateFilterCallback={this.handleFilterChange} />
    );
  }
}

export default App;
