import { useState } from "react";
import { fetchUserData, fetchAdvancedSearch } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      if (location || minRepos) {
        // Advanced search using GitHub Search API
        const data = await fetchAdvancedSearch(username, location, minRepos);
        setUsers(data.items || []);
      } else {
        // Basic search using GitHub Users API
        const user = await fetchUserData(username);
        setUsers(user ? [user] : []);
      }
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        GitHub User Search
      </h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4 md:items-end"
      >
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Location (optional)
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Lagos"
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Min Repos (optional)
          </label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g. 10"
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {user.login}
                </h2>
                {user.location && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    📍 {user.location}
                  </p>
                )}
                {user.public_repos !== undefined && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    📦 {user.public_repos} repos
                  </p>
                )}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View Profile →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

