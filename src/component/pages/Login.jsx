import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { user, token },
      } = await axios.post("http://localhost:8080/api/user/login", {
        ...login,
      });
      localStorage.setItem("userdata", JSON.stringify(user));
      localStorage.setItem("auth_token", token);
      JSON.parse(localStorage.getItem("userdata"));
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
    console.log("submitted values", login);
    let error = validate();

    if (error.email || error.password) {
      setError(error);
    } else {
      setError({ ...error });
      console.log(login);
    }
  };

  const handleChange = (e) => {
    // let objCopy = { ...login };

    // if (e.target.name == "email") objCopy.email = e.target.value;

    // if (e.target.name == "password") objCopy.password = e.target.value;

    // setLogin(objCopy);

    setLogin({ ...login, [e.target.name]: e.target.value });
    validateProperty(e.target.name, e.target.value);
  };

  const validateProperty = (propertyName, propertyValue) => {
    if (propertyValue === "") {
      setError({ ...error, [propertyName]: `${propertyName} is required` });
    } else if (propertyValue !== "") {
      setError({ ...error, [propertyName]: "" });
    }
  };

  const validate = () => {
    let errorObj = { ...error };
    if (login.email.trim() === "") errorObj.email = "email is required";
    else errorObj.email = "";

    if (login.password.trim() === "")
      errorObj.password = "password is required";
    else errorObj.password = "";

    if (!login.checkedme) errorObj.checkedme = "checkedme is required";
    else errorObj.checkedme = "";

    if (login.course === "") errorObj.course = "course is required";
    else errorObj.course = "";

    return errorObj;
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="row m-5 no-gutters shadow-lg">
            <div className="col-md-6 d-none d-md-block">
              <img
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                className="img-fluid w-100"
                style={{ minHeight: "100%" }}
              />
            </div>
            <div className="col-md-6 bg-white p-5">
              <h3 className="pb-3">Login Form</h3>
              <div className="form-style">
                <form onSubmit={handleSubmit}>
                  <div className="form-group pb-3">
                    <Input
                      type="email"
                      value={login.email}
                      name="email"
                      onChanged={handleChange}
                      error={error.email}
                      placeholder="Email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group pb-3">
                    <Input
                      type="password"
                      value={login.password}
                      name="password"
                      onChanged={handleChange}
                      placeholder="Password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <input name type="checkbox" defaultValue />{" "}
                      <span className="pl-2 font-weight-bold">
                        &nbsp;&nbsp;Remember Me
                      </span>
                    </div>
                    <div>
                      <a href="#">Forget Password?</a>
                    </div>
                  </div>
                  <div className="pb-2">
                    <button
                      type="submit"
                      className="btn btn-dark w-100 font-weight-bold mt-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="sideline">OR</div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 font-weight-bold mt-2"
                  >
                    <a class="btn btn-social-icon btn-twitter">
                      <span class="fa fa-twitter"></span>
                    </a>{" "}
                    Login With Facebook
                  </button>
                </div>
                <div className="pt-4 text-center">
                  Create new account &nbsp; <a href="/Signup">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
