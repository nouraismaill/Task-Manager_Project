import React from "react";

const Login = () => {
  return (
    <div className="mt-[-20px] lg:mt-[-70px]  sm:mb-0 lg:mb-[-57px]  ">
      <div class="container  mx-auto ">
        <div class="card ">
          <a class="login">Log in</a>
          <div class="inputBox">
            <input type="text" required="required" />
            <span class="user">Username</span>
          </div>

          <div class="inputBox">
            <input type="password" required="required" />
            <span>Password</span>
          </div>

          <button class="enter">Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
