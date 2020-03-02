import React, { Fragment, useState } from 'react';
import Navbar from '../layout/Navbar';
import Background from '../layout/Background';

const Register = () => {
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
              <div className='card green'>
                <div className='card-header'>
                  <h4 className='card-title'>Inscription</h4>
                </div>

                <form className='form'>
                  <div className='card-body'>
                    <div className='form-row'>
                      <div className='col'>
                        <div
                          className={
                            'input-group ' + (focus === 'name' ? 'focus' : '')
                          }
                        >
                          <div className='input-group-prepend'>
                            <span className='input-group-icon'>
                              <i className='material-icons-outlined'>person</i>
                            </span>
                          </div>

                          <input
                            type='text'
                            className='form-control'
                            placeholder='Nom'
                            name='name'
                            onFocus={onFocus}
                            onBlur={() => setFocus('')}
                          />
                        </div>
                      </div>

                      <div className='col'>
                        <div
                          className={
                            'input-group ' +
                            (focus === 'firstName' ? 'focus' : '')
                          }
                        >
                          <div className='input-group-prepend'>
                            <span className='input-group-icon'>
                              <i className='material-icons-outlined'>
                                people_alt
                              </i>
                            </span>
                          </div>

                          <input
                            type='text'
                            className='form-control'
                            placeholder='Prénom'
                            name='firstName'
                            onFocus={onFocus}
                            onBlur={() => setFocus('')}
                          />
                        </div>
                      </div>
                    </div>

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
                          <i className='material-icons-outlined'>lock</i>
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

                    <div
                      className={
                        'input-group ' + (focus === 'password2' ? 'focus' : '')
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
                        placeholder='Confirmer mot de passe'
                        name='password2'
                        onFocus={onFocus}
                        onBlur={() => setFocus('')}
                      />
                    </div>
                  </div>

                  <div className='card-footer'>
                    <button className='btn btn-secondary btn-lg btn-round d-block mx-auto'>
                      Inscription
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

export default Register;
