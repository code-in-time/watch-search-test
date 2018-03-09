import React, { Component } from 'react';
import { apiSearchLoadFilters,  } from './API';
import SearchResults from './SearchResults';

/**
 * This is the starting point
 */

export default class Index extends Component {
  constructor(props) {
    super(props);

    // Set the default state
    this.state = {
      // This will hold the search input text
      searchInput = '',
      // This will hold the search filter selection
      selectedFilterID: 0,
      // This will hold all search filters
      allFilters: {},
      // This will hold the Search results
      searchResults: {}
    };
  }

  componentDidMount() {
    // Get the all possible filters using an API call
    apiSearchLoadFilters()
      // Data was returned
      .then(response => {
        // Set the state with the results
        this.setState((allFilters = response));
        console.log(response);
      })
      // An error occured
      .catch(error => {
        console.log(error);
      });
  }

  /**
   * The onChange for the search input
   * NOTE: This must be throttled
   * 
   * @param {object} e The event data from the input
   * @memberof App
   */
  onChangeInput(e) {
    // Save the text in the state.searchInput
    
    // Do an api call to get the results
    apiSearchResults(this.state.selectedFilterID, state.searchInput).then(response => {
      // Set the state with the results
      this.setState((searchResults = response));
      console.log(response);
    })
    // An error occured
    .catch(error => {
      console.log(error);
    });
  }

  /**
   * This will be passed as a prop and used to update the state
   * so that the search filter selection can be captured.
   * 
   * @param {int} ID the ID of the search filter
   */
  saveSelectedFilterID(ID) {
    // Save the search filter
    this.setState((selectedFilterID = ID));
  }

  render() {
    return (
      <div className="App">
        <searchFilter allFilters={this.state.allFilters}  saveSelectedFilterID={saveSelectedFilterID}/>
        <input onChange={this.onChangeInput} searchResults={this.state.SearchResults} value={this.state.searchInput} type="text" name="SearchInput" class="SearchInput"/>
        <SearchResults searchResults={this.state.searchResults} />
      </div>
    );
  }
}
