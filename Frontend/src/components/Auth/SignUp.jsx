import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <div className="mt-[-70px]  sm:mb-0 lg:mb-[-50px]  ">
      <form class="container" onSubmit={submitHandler}>
        <div class="card">
          <a class="singup">Sign Up</a>

          <div class="inputBox">
            <input
              type="text"
              required="required"
              name="username"
              onChange={handleInputChange}
            />
            <span>Username</span>
          </div>
          <div class="inputBox1">
            <input
              type="text"
              required="required"
              name="email"
              onChange={handleInputChange}
            />
            <span class="user">Email</span>
          </div>
          <div class="inputBox">
            <input
              type="password"
              required="required"
              name="password"
              onChange={handleInputChange}
            />
            <span>Password</span>
          </div>

          <button class="enter">
            {" "}
            {loading && (
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <HashLoader size={25} color="#fff" />
              </div>
            )}
            <span style={{ visibility: loading ? "hidden" : "visible" }}>
              Sign Up
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
