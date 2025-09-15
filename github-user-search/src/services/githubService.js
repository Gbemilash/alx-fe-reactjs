import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchUserData(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
}

export async function fetchAdvancedSearch(username, location, minRepos) {
  let query = username ? `${username} in:login` : "";

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data;
}

