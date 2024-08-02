
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./header.css"


const Header = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        
        localStorage.removeItem('authToken');

        
        navigate('/login');
    };

    return (
        <div className="navbar">
            
            <a href="#user">Lucas</a>
            <a href="#" onClick={handleLogout}>Log out</a>
        </div>
    );
}

export default Header;