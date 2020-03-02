import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Background from '../layout/Background';

const Landing = () => {
  return (
    <Fragment>
      <Background />

      <Navbar />

      <div id='landing-header'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <h1>Le réseau social privé</h1>

              <p>
                Chez Tribu, notre mission est de vous fournir un réseau social
                privé, ou seul vous et les membres de vos groupes peuvent
                accéder à votre profil.
              </p>

              <Link to='/login' className='btn btn-primary'>
                Se connecter
              </Link>

              <Link to='/register' className='btn btn-secondary ml-2'>
                S'inscrire
              </Link>
            </div>

            <div className='col-md-6'>
              <img
                src='/img/landing-header.svg'
                className='img-fluid'
                alt='Social media party'
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
