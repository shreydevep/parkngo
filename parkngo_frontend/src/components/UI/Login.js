import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = (props) => {
  const { loginState, setLoginState } = props;
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(loginState);
    if (loginState.email && loginState.password)
      navigate("/", { replace: true });
  };
  return (
    <>
      <div className="login">
        <h1>Park N Go</h1>
        <div className="login-container">
          <form action="">
            <div className="email-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                required="true"
                autoComplete="off"
                value={loginState.email}
                onChange={(e) =>
                  setLoginState({
                    ...loginState,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="password-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginState.password}
                onChange={(e) =>
                  setLoginState({
                    ...loginState,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="button-container">
              <button
                onClick={loginHandler}
                type="submit"
                className="login-button"
              >
                Login
              </button>
              <button type="" className="register-button">
                <Link
                  style={{
                    color: "#272727",
                    outline: "none",
                    textDecoration: "none",
                  }}
                  to="/register"
                >
                  Register
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
