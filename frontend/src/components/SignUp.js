import React, { useState } from 'react';

const SignUp = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSignUp = async (e) => {
    e.preventDefault();
    
    // Make a POST request to /signup with the username and password
};

return (
    <form onSubmit={handleSignUp}>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit">Sign Up</button>
    </form>
);
};

export default SignUp;
