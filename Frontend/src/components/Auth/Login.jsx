import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";
import { authContext } from "../../../Context/authContext";
import { BASE_URL } from "../../config";

const Login = () => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);
  const handleInputChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: result.token,
        },
      });
      localStorage.setItem("token", result.token);
      setLoading(false);
      toast.success(result.message);
      navigate("/tasks");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };
  return (
    <div className="mt-[-20px] lg:mt-[-70px]  sm:mb-0 lg:mb-[-57px]  ">
      <form class="container  mx-auto " onSubmit={submitHandler}>
        <div class="card ">
          <a class="login">Log in</a>
          <div class="inputBox3 ">
            <input
              type="text"
              required="required"
              name="email"
              value={formdata.email}
              onChange={handleInputChange}
            />
            <span class="user">Email</span>
          </div>

          <div class="inputBox">
            <input
              type="password"
              required="required"
              name="password"
              value={formdata.password}
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
                <HashLoader size={25} color="#00BF63" />
              </div>
            )}
            <span style={{ visibility: loading ? "hidden" : "visible" }}>
              Login
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
