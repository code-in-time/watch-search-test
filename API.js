
import axios from 'axios';

/**
  * Get the search filters.
  * @returns promise
  */
export const apiSearchLoadFilters = () => axios.get(`/searchLoadFilters`);

/**
 * This will get the search results
 * @param {int} selectedFilterID The ID of the search filter
 * @param {string} searchInput The text that must be searched
 * @returns promise
 */
export const apiSearchResults = (selectedFilterID, searchInput) => axios.get(`/searchLoadFilters`);
