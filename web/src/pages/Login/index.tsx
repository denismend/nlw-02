import React from 'react';

import logoImg from '../../assets/images/background.svg';

import './styles.css';

const Login: React.FC = () => {
  return (
    <div id="page-login">
      <div id="login-background" />

      <div id="form-container">

        <form>
          <h2>Fazer Login</h2>

          <div>
            <label className="">Teste</label>
            <input></input>
          </div>
          <div>
            <label>Teste</label>
            <input></input>
          </div>
        </form>


      </div>
    </div>
  );
};

export default Login;

