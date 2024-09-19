import React from "react";

const SignUp = () => {
  return (
    <div className="mt-[-70px]  sm:mb-0 lg:mb-[-50px]  ">
      <div class="container">
        <div class="card">
          <a class="singup">Sign Up</a>
          <div class="inputBox1">
            <input type="text" required="required" />
            <span class="user">Email</span>
          </div>

          <div class="inputBox">
            <input type="text" required="required" />
            <span>Username</span>
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

export default SignUp;
