import "./App.css";
import DashBoard from "./components/DashBoard";
import Login from "./components/UI/Login";
import Register from "./components/UI/Register";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [registerState, setRegisterState] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoard loginState={loginState} />} />
        <Route
          path="/login"
          element={
            <Login loginState={loginState} setLoginState={setLoginState} />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              registerState={registerState}
              setRegisterState={setRegisterState}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
