import React from 'react';


import logoImg from '../../assets/images/logo.svg';

import './styles.css';

const Login: React.FC = () => {
  return (
    <div id="page-login">
      <div id="page-login-content">
          <div className="login-logo-container">
              <div className="login-logo">
                  <img src={logoImg} alt="Proffy"/>
                  <h2>Your online study platform.</h2>
              </div>
          </div>
        </div>
      </div>
  );
};

export default Login;

