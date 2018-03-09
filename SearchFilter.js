
import React, { Component } from 'react'

export default class SearchFilter extends Component {

    // onClick save the results using this.prop.saveSelectedFilterID(value)

    // Render all the options using the this.props.allFilters

  render() {
    return (
        <select name="SearchFilter">
            {/*<option value="0">All</option>*/}
        </select>
    )
  }
}

