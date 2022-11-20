import React from "react";

const Login = () => {
  return (
    <>
    <div class="page-login">

      <form class="ui_form" method="POST">
        <div class="field">
          <label>Username </label>
          <input type="text" name="username" placeholder="Username"  />
        </div>
        <div class="field">
          <label>Password </label>
          <input type="password" name="pass" placeholder="Password" />
        </div>
        <button class="ui_primary_labeled_icon_button" type="submit">
          <i class="unlock alternate icon"></i>
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
