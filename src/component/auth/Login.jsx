import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const values = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const loginSchema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(8, "Password must be 8 characters long"),
  });

  const handleSubmit = async (values, setSubmitting) => {
    console.log("values : ", values);

    try {
      const {
        data: { user, token },
      } = await axios.post("http://localhost:3001/api/v1/user/loginuser", {
        ...values,
      });
      localStorage.setItem("userdata", JSON.stringify(user));
      localStorage.setItem("auth_token", token);
      JSON.parse(localStorage.getItem("userdata"));
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
    console.log("login form values", values);
    let error = validate();

    if (error.email || error.password) {
      setError(error);
    } else {
      setError({ ...error });
      console.log("error : ", values);
    }
  };

  const validate = (values) => {
    const errors = {};
    console.log("values validate :", values);
    if (!values.email) {
      errors.email = "required";
    }
    if (!values.password) errors.password = "required";
    return errors;
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="row m-5 no-gutters shadow-lg rounded">
            <div className="col-md-6 d-none d-md-block">
              <img
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHxsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                className="img-fluid w-100"
                style={{ minHeight: "100%" }}
                alt="No Image"
              />
            </div>
            <div className="col-md-6 bg-white p-5">
              <h3 className="pb-3">Login Form</h3>
              <div className="form-style">
                <Formik
                  initialValues={values}
                  validate={(values) => validate(values)}
                  validationSchema={loginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values, setSubmitting);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="relative mb-2">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="email"
                          onChange={handleChange}
                          className="form-control"
                        />
                        <span className="text-danger">
                          {errors.email && touched.email && errors.email}
                        </span>
                      </div>
                      <div className="relative mb-2">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          size="50"
                          placeholder="password"
                          onChange={handleChange}
                          className="form-control"
                        />
                        <span className="text-danger">
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </span>
                      </div>
                      <div className="pb-2">
                        <button
                          type="submit"
                          className="btn btn-primary w-100 font-weight-bold my-2"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>

                <div className="sideline text-dark">OR</div>
                <div className="pt-4 text-center">
                  Create new account &nbsp;{" "}
                  <NavLink to="/signup">Sign Up</NavLink>
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
