import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { UpdateToken } from "../action";
import { getLocalStorageUserData, setLocalStorageString } from "../service";

const Login = () => {
  const [error, setError] = useState("");
  const isLogin = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const CheckUser = (e) => {
    e.preventDefault();
    const currentEmail = e.target.email.value;
    const currentPassword = e.target.password.value;

    if (currentEmail === "" || currentPassword === "") {
      setError("Enter the Email and Password.");
      return;
    }

    const storeData = getLocalStorageUserData("users_data");
    setError("");
    if (storeData) {
      let usersData = { ...storeData };

      if (usersData[currentEmail]) {
        if (usersData[currentEmail].password === currentPassword) {
          setLocalStorageString("token", usersData[currentEmail].email);
          dispatch(UpdateToken(true));
        } else {
          setError("Password Not Matched..!");
        }
      } else {
        setError("Account Does Not Exist");
      }
    } else {
      setError("Account Does Not Exist");
    }
  };
  return isLogin ? (
    <Redirect to="/" />
  ) : (
    <div>
      <form className="form" onSubmit={CheckUser}>
        <div>
          <h1>Login</h1>
          <hr />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div className="error-msg">
          {error}
        </div>
        <div>
          <button type="submit" className="button4">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
