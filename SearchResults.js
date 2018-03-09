
import React, { Component } from 'react'

export default class SearchResults extends Component {

  /**
   * This will render the search results data
   * 
   * @memberof SearchResults
   */
  renderSearchResults(data) {
    // Loop through the data and return the jsx.
    // return (
    //   <tr>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //   </tr>
    // )
  }

  render() {
    return (
        <table>
          <tr>
            <th>Wathes</th>
            <th>Price</th>
            <th>WArenty</th>
          </tr>
          {this.renderSearchResultsData(this.props.searchResults)}
        </table>
    )
  }
}

