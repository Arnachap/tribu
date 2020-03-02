import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Fragment>
      <div id='sidebar'>
        <div className='logo'>
          <Link to='/dashboard' className='logo-img'>
            <img src='/img/logo.svg' alt='' />
          </Link>

          <Link to='/dashboard' className='logo-text'>
            Tribu
          </Link>
        </div>

        <ul className='nav'>
          <li>
            <Link to='/dashboard'></Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
