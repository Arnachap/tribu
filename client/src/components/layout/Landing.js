import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';

const Landing = () => {
  return (
    <Fragment>
      <Navbar />

      <main>
        <section className='jumbotron text-center'>
          <div className='container'>
            <h1>Bienvenue sur Tribu</h1>

            <p className='lead text-muted'>
              Le réseau social des groupes privés !
            </p>

            <p>
              <Link to='/login' className='btn btn-primary m-2'>
                Se connecter
              </Link>

              <Link to='/register' className='btn btn-secondary m-2'>
                S'inscrire
              </Link>
            </p>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Landing;
