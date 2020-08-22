import React from 'react';

import logoImg from '../../assets/images/background.svg';

import './styles.css';

const Login: React.FC = () => {
  const fieldActive = true;
  const fieldActive2 = false;

  return (
    <div id="page-login">
      <div id="login-background" />

      <div id="form-container">

        <form>
          <h2>Fazer Login</h2>

          <div className="login-input-block">
            <label className={fieldActive ? "field-active" : ""}>Teste</label>
            <input></input>
          </div>
          <div className="login-input-block">
            <label>Teste</label>
            <input></input>
          </div>
        </form>


      </div>
    </div>
  );
};

export default Login;

