
import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className='container'>
            <h1 className="welcome-title">Welcome to you Travel website</h1>
            <nav className='navber'>
                <a href="/home">Home</a>
                <a href="/service">Services</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;