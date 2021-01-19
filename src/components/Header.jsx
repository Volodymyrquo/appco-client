import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <ul>
        <li>
          <Link to='/'>Main page</Link>
        </li>
        <li>
          <Link to='/allusers'>Users</Link>
        </li>
        <li>
          <Link to='/user'>Stats</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
