import React from "react";
import InputContainer from "./InputContainer";
import { Link } from "react-router-dom";
import { userSignUp } from "../../utils/userSignUp";
import "./Register.css";

const Register = (props) => {
  const { registerState, setRegisterState } = props;
  const onClickRegisterHandler = (e) => {
    e.preventDefault();
    if (
      registerState.name &&
      registerState.role &&
      registerState.email &&
      registerState.password &&
      registerState.passwordConfirm
    ) {
      let newUserData = {
        name: registerState.name,
        role: registerState.role,
        email: registerState.email,
        password: registerState.password,
        passwordConfirm: registerState.passwordConfirm,
      };
      let res = async () => userSignUp(newUserData)();
    }
  };
  return (
    <>
      <div className="register">
      <h1>Park N Go</h1>
        <div className="register-container">
          <form action="">
            <InputContainer
              props={props}
              htmlFor="name"
              title="Name"
              type="text"
              name="name"
              id="name"
              class_name="name-container"
              value={registerState.name}
            />

            <InputContainer
              props={props}
              htmlFor="role"
              title="Role"
              type="text"
              name="role"
              id="role"
              class_name="role-container"
              value={registerState.role}
            />
            <InputContainer
              props={props}
              htmlFor="email"
              title="Email"
              type="text"
              name="email"
              id="email"
              class_name="email-container"
              value={registerState.email}
            />
            <InputContainer
              props={props}
              htmlFor="password"
              title="Password"
              type="text"
              name="password"
              id="password"
              class_name="password-container"
              value={registerState.password}
            />
            <InputContainer
              props={props}
              htmlFor="passwordConfirm"
              title="Confirm Password"
              type="text"
              name="passwordConfirm"
              id="passwordConfirm"
              class_name="passwordConfirm-container"
              value={registerState.passwordConfirm}
            />

            <div className="button-container">
              <button type="" className="login-button">
                <Link
                  style={{
                    color: "#272727",
                    outline: "none",
                    textDecoration: "none",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </button>
              <button
                onClick={onClickRegisterHandler}
                type="submit"
                className="register-button"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
