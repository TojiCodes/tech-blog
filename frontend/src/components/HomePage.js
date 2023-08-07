import React, { useEffect, useState } from 'react';

const HomePage = () => {
const [posts, setPosts] = useState([]);

useEffect(() => {
    // Fetches posts from backend and update state
}, []);

return (
    <div>
    {posts.map((post) => (
        <div key={post._id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
          {/* other post details */}
        </div>
    ))}
    </div>
);
};

export default HomePage;
