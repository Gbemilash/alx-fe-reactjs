import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 5,           // 5 minutes
    staleTime: 1000 * 60 * 1,           // 1 minute
    refetchOnWindowFocus: false,        // disable auto refetch on window focus
    keepPreviousData: true,             // keep old data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
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

