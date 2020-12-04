import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Base from "../Base";
import { signin, authenticateUser, isAuthenticated } from "./helper/authApis";
const SignIn = () => {
  const [user, setUser] = useState({
    mobile: "",
    email: "",
    password: "11111111",
  });
  const [redirect, setRedirect] = useState(false);

  //change handlers
  const handleChangeUser = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };

  //methods
  const signIn = (event) => {
    event.preventDefault();
    if (!user.email.match("^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")) {
      user.mobile = user.email;
      user.email = "";
      if (user.mobile.length !== 10) {
        alert("enter valid mobile");
        return;
      }
    }
    signin(user).then((res) => {
      if (res.status === 0) {
        alert(res.error);
      } else {
        authenticateUser(res, () => {
          setRedirect(true);
        });
      }
    });
  };
  const doRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
    if (redirect) {
      if (isAuthenticated()) {
        return <Redirect to="/" />;
      }
    }
  };
  return (
    <Base>
      <div className="">
        {doRedirect()}
        <div>{JSON.stringify(user)}</div>
        <div className="m-4 row justify-content-center">
          <form className=" col-6">
            <div className="form-group">
              <label>Email/Mobile</label>
              <input
                type="email"
                onChange={handleChangeUser("email")}
                className="form-control"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                onChange={handleChangeUser("password")}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary" onClick={signIn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Base>
  );
};
export default SignIn;
