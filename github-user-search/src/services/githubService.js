import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

// Main function used for advanced search
export const fetchUserData = async (query, location, minRepos) => {
  try {
    let searchQuery = query;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}${searchQuery}`);
    return response.data.items; // GitHub Search API returns "items" array
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Alias for compatibility with Search.jsx if it calls fetchAdvancedSearch
export const fetchAdvancedSearch = fetchUserData;
