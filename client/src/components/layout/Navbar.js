import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' class='navbar-brand'>
        Tribu
      </Link>

      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarNav'>
        <ul class='navbar-nav ml-auto'>
          <li class='nav-item'>
            <Link to='/login' class='nav-link'>
              Connexion
            </Link>
          </li>

          <li class='nav-item'>
            <Link to='/register' class='nav-link'>
              Inscription
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
