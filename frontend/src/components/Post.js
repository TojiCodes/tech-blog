import React, { useEffect, useState } from 'react';

const Post = ({ match }) => {
const [post, setPost] = useState(null);
const [comments, setComments] = useState([]);

useEffect(() => {
    // Fetches post and its comments from backend and update state
}, []);

return (
    <div>
    {post && (
        <>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
          {/* posts details */}
        {comments.map((comment) => (
            <p key={comment._id}>{comment.content}</p>
        ))}
          {/* comment form */}
        </>
    )}
    </div>
);
};

export default Post;
