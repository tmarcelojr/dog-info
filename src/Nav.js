import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
	return (
        <div>
            <ul>
                <Link to='/home'>Home</Link>
                <Link to='/alldogs'>All Dogs</Link>
            </ul>
        </div>
    )
};

export default Nav;
