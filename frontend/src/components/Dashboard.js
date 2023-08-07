import React, { useEffect, useState } from 'react';

const Dashboard = () => {
const [posts, setPosts] = useState([]);

useEffect(() => {
    // Fetches user's posts from backend and update state
}, []);

return (
    <div>
      {/* posts creation form */}
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

export default Dashboard;
