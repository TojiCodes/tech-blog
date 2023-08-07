import React, { useState } from 'react';

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async (e) => {
    e.preventDefault();
    
    // Makes a POST request to /login with the username and password
};

return (
    <form onSubmit={handleLogin}>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit">Login</button>
    </form>
);
};

export default Login;
