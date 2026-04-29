      import React from 'react';
      import './App.css';

      const SignIn = () => {
        return (
          <div class="form-wrapper">
            <div class="card" role="form" aria-label="Sign in">
              <div class="field">
                <div style="color:var(--text,white); font-size:16px;">Email</div>
                <input class="Email" type="email" placeholder="Enter your email" />
              </div>

          <div class="field">
            <div style="color:var(--text,white); font-size:16px;">Password</div>
            <input class="Pass" type="password" placeholder="Enter your password" />
          </div>

          <div class="actions">
            <button class="btn-primary" onClick={login}>Sign In</button>
          </div>

          <div style="width:100%; text-align:left; color: white; font-size:16px; text-decoration:underline;">Forgot password?</div>
        </div>

        <div class= "error" style="width:680px; color:white; font-size:16px;">Error</div>
      </div>
    );
  };

  export default SignIn;

  function login() {
    const email = document.querySelector('.Email').value;
    const password = document.querySelector('.Pass').value;
  }
