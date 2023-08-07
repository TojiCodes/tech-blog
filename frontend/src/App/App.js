import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Navbar from '../components/Navbar';

const App = () => {
return (
    <Router>
    <Navbar />
    <Route path="/" exact component={HomePage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    </Router>
);
};

export default App;
