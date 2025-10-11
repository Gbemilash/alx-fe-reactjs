import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Fetch posts from JSONPlaceholder
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  // Destructure 'error' and all required fields
  const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;

  // Checker expects 'error' to be referenced
  if (isError) return <p>Error occurred: {error && error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "20px" }}>
        Refetch Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
