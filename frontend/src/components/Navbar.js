import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
return (
    <nav>
    <Link to="/">Homepage</Link>
    {isAuthenticated ? (
        <>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/logout">Logout</Link>
        </>
    ) : (
        <>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
        </>
    )}
    </nav>
);
};

export default Navbar;
