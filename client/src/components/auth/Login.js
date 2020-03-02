import React, { Fragment, useState } from 'react';
import Navbar from '../layout/Navbar';
import Background from '../layout/Background';

const Login = () => {
  const [focus, setFocus] = useState('');

  const onFocus = e => {
    setFocus(e.target.name);
  };

  return (
    <Fragment>
      <Background />

      <Navbar />

      <div id='auth'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 col-lg-5 mx-auto'>
              <div className='card'>
                <div className='card-header'>
                  <h4 className='card-title'>Connexion</h4>
                </div>

                <form className='form'>
                  <div className='card-body'>
                    <div
                      className={
                        'input-group ' + (focus === 'email' ? 'focus' : '')
                      }
                    >
                      <div className='input-group-prepend'>
                        <span className='input-group-icon'>
                          <i className='material-icons-outlined'>email</i>
                        </span>
                      </div>

                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        onFocus={onFocus}
                        onBlur={() => setFocus('')}
                      />
                    </div>

                    <div
                      className={
                        'input-group ' + (focus === 'password' ? 'focus' : '')
                      }
                    >
                      <div className='input-group-prepend'>
                        <div className='input-group-icon'>
                          <i className='material-icons-outlined'>lock_open</i>
                        </div>
                      </div>

                      <input
                        type='password'
                        className='form-control'
                        placeholder='Mot de passe'
                        name='password'
                        onFocus={onFocus}
                        onBlur={() => setFocus('')}
                      />
                    </div>
                  </div>

                  <div className='card-footer'>
                    <button className='btn btn-primary btn-lg btn-round d-block mx-auto'>
                      Connexion
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
