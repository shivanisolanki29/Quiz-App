import React from "react";

const Login = () => {
  return (
    <>
      <div class="page-login">
        <form class="ui_form" method="POST">
          <header>
            <h3>Quiz App </h3>
          </header>
          <div class="field">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div class="field">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <button class="ui_primary_labeled_icon_button" type="submit">
            <i class="unlock alternate icon"></i>
            Start
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
