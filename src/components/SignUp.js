import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { UpdateToken } from "../action";
import "../index.css";
import { getLocalStorageUserData, setLocalStorageUserData,setLocalStorageString } from "../service";

const SignUp = () => {
  const passwordText = useRef("");
  const [errorMessage, setErrorMessage] = useState("");
  const [taskDone, settaskDone] = useState(false);
  const dispatch = useDispatch();  
  const [user, setUser] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const verifyPassword = (password, confirmPassword) => {
    if (password === confirmPassword) {
      if (password.length < 8) {
        setErrorMessage("Password Should be of 8 Characters Long.");
        return false;
      }
      let result;
      const patt1 = /[0-9]/g;
      result = password.match(patt1);
      if (result !== null) {
        if (result.length < 3) {
          setErrorMessage(
            "Password should contain atleast 3 digits. i-e: pass1234"
          );
          return false;
        } else {
          setErrorMessage("");
          return true;
        }
      } else {
        setErrorMessage(
          "Password should contain atleast 3 digits. i-e: pass1234"
        );
        return false;
      }
    } else {
      setErrorMessage("Password Mismatched");
      return false;
    }
  };

  const checkField = (fields = {}) => {
    let valid = true;
    Object.keys(fields).forEach((key) => {
      //console.log(`${key} => ${fields[key]}`);
      setUser((currentUser) => ({
        ...currentUser,
        [key]: !fields[key],
      }));
      if (fields[key] === "") {
        valid = false;
      }
    });
    if (valid === true) {
      valid = verifyPassword(fields.password, fields.confirmPassword);
    }
    return valid;
  };

  const SetData = (e) => {
    e.preventDefault();
    const updatedUser = {
      fname: e.target.fname.value,
      email: e.target.email.value,
      lname: e.target.lname.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    const valid = checkField(updatedUser);

    if (valid) {
      let usersData = {};
      const storeData = getLocalStorageUserData("users_data");
      
      if (storeData) {
        usersData = { ...storeData };
      }
      if (usersData[updatedUser.email]) {
        alert("User Already Exist");
      } else {
        usersData = { ...usersData, [updatedUser.email]: updatedUser };
        setLocalStorageUserData("users_data", usersData);
        setLocalStorageString('token',updatedUser.email);
        dispatch(UpdateToken(true));
        settaskDone(true);
      }
    }else{
      console.log("Requirements not fulfilled ");
      passwordText.current.focus();
    }
  };

  return taskDone ? (<Redirect to="/" />):(
    <div>
      <form onSubmit={SetData}>
        <div className="form">
          <div>
            <h1>Create Account</h1>
            <hr />
          </div>

          <div>
            <legend>First Name</legend>
            <input type="text" name="fname" placeholder="First Name" />
            {user.fname && <p className="error-msg">*This field is required</p>}
          </div>

          <div>
            <legend>Last Name</legend>
            <input type="text" name="lname" placeholder="Last Name" />
            {user.lname && (
              <p className="error-msg">* This field is required</p>
            )}
          </div>

          <div>
            <legend>Email</legend>
            <input type="email" name="email" placeholder="Email" />
            {user.email && (
              <p className="error-msg">* This field is required</p>
            )}
          </div>

          <div>
            <legend>Password</legend>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onClick={() => setErrorMessage("")}
            />
            {user.password && (
              <p className="error-msg">* This field is required</p>
            )}
          </div>

          <div>
            <legend>Confirm Password</legend>
            <input
              ref={passwordText}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onClick={() => setErrorMessage("")}
            />
            {user.confirmPassword && (
              <p className="error-msg">* This field is required</p>
            )}
          </div>
          <div className="error-msg"> {errorMessage}</div>

          <div>
            <button type="submit" className="button4">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
