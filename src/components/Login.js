import React from "react";
import { getLocalStorageUserData } from "../service";

const Login = () => {
  const CheckUser = (e) => {
    e.preventDefault();
    const currentEmail = e.target.email.value;
    const currentPassword = e.target.password.value;
    console.log("email=>> ", currentEmail);
    console.log("Password=>> ", currentPassword);

    if (getLocalStorageUserData("users_data")) {
      let users_data = [...getLocalStorageUserData("users_data")];
      let email = users_data.find((user) => {
        console.log('Object.keys(user) + ""', users_data );
        if (Object.keys(user) + "" === currentEmail) {
          console.log(user[Object.keys(user) + ""]);
          return user[Object.keys(user) + ""];
        } else {
          return 0;
        }
      });

      if (email) {
        console.log("em", email[currentEmail]);
        if (email[currentEmail].password === currentPassword) {
          console.log("Yes Matched..!");
        }
        else{
          console.log("Password Not Matched..!");

        }
      }
    } else {
      console.log("Account Does Not Exist");
    }
  };

  return (
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
