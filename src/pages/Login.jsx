import React from 'react';

const Login = () => {
  return (
    <>
      <div className="log-in container">
        <div className="login">
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="password">Password</label>
            <input type="password" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
