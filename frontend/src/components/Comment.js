import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comments = ({ postId }) => {
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState('');

useEffect(() => {
    // Fetches comments from the backend
    const fetchComments = async () => {
    const res = await axios.get(`/api/comments/${postId}`);
    setComments(res.data);
    };

    fetchComments();
}, [postId]);

const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/api/comments`, {
    content: newComment,
    postId,
      // Note: authorId should come from the user context or session
    authorId: 'userId',
    });
    setComments([...comments, res.data]);
    setNewComment('');
};

return (
    <div>
    <h3>Comments</h3>
    {comments.map((comment) => (
        <div key={comment._id}>
        <p>{comment.content}</p>
        <p>Posted by: {comment.author.username}</p>
        <p>Date: {new Date(comment.date).toLocaleDateString()}</p>
        </div>
    ))}
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        required
        />
        <button type="submit">Add Comment</button>
    </form>
    </div>
);
};

export default Comments;
