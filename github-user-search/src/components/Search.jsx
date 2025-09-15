import { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 p-2 border rounded-xl"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded-xl">
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* User Data */}
      {userData && (
        <div className="p-4 border rounded-xl shadow">
          <img src={userData.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-xl font-bold text-center mt-2">{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 text-center mt-1"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
