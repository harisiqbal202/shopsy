import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
const Signup = () => {
  const values = {
    name: "",
    email: "",
    contact: "",
    age: 0,
    password: "",
    role: "customer",
  };
  const navigate = useNavigate();
  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "required";
    }
    if (!values.name) errors.name = "required";
    if (!values.age) errors.age = "required";
    if (!values.contact) errors.contact = "required";
    if (!values.password) errors.password = "required";
    return errors;
  }

  const SignUpSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    contact: yup
      .number()
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8),
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "password requires a number")
      .matches(/[a-z]/, "password requires a lowercase letter")
      .matches(/[A-Z]/, "password requires an uppercase letter")
      .matches(/[^\w]/, "password requires a symbol"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], 'must match "password" field value'),
  });

  const handleSubmit = async (values, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
    try {
      const res = await axios.post(
        "http://localhost:3001/api/v1/user/registeruser",
        {
          ...values,
        }
      );
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log("failed to register", err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg rounded">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              className="img-fluid w-100"
              style={{ minHeight: "100%" }}
              alt="No Image"
            />
          </div>
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Signup form</h3>
            <div className="form-style">
              <Formik
                initialValues={values}
                validate={(values) => validate(values)}
                validationSchema={SignUpSchema}
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
                    <div className="form-group pb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <span className="text-danger">
                        {errors.name && touched.name && errors.name}
                      </span>
                    </div>
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
                        type="text"
                        id="contact"
                        name="contact"
                        size="50"
                        placeholder="contact"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <span className="text-danger">
                        {errors.contact && touched.contact && errors.contact}
                      </span>
                    </div>
                    <div className="relative mb-2">
                      <input
                        type="number"
                        id="age"
                        name="age"
                        onChange={handleChange}
                        placeholder="age"
                        className="form-control"
                      />
                      <span className="text-danger">
                        {errors.age && touched.age && errors.age}
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
                        {errors.password && touched.password && errors.password}
                      </span>
                    </div>
                    <div className="relative mb-2">
                      <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        size="50"
                        placeholder="confirm password"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <span className="text-danger">
                        {errors.confirm && touched.confirm && errors.confirm}
                      </span>
                    </div>
                    <div className="pb-2">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 font-weight-bold my-2"
                      >
                        SignUp
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
