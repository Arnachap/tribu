import React from 'react';

const Login = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 m-auto'>
          <form>
            <div className='form-group'>
              <label>Adresse Email</label>

              <input type='email' className='form-control' />
            </div>

            <div className='form-group'>
              <label>Mot de passe</label>
              <input type='password' className='form-control' />
            </div>

            <button className='btn btn-primary'>Connexion</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
