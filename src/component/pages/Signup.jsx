import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
const Signup = () => {
  const values = {
    name: "",
    age: 0,
    email: "",
    contact: "",
    password: "",
  };
  const navigate = useNavigate();
  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.name) errors.email = "Required";
    if (!values.age) errors.age = "Required";
    if (!values.contact) errors.contact = "Required";
    if (!values.password) errors.password = "Required";

    return errors;
  }

  const SignUpSchema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    contact: yup.string(),
    password: yup.string().required(),
  });

  const handleSubmit = async (values, setSubmitting) => {
    console.log("values", values);
    setSubmitting(false);
    try {
      const res = await axios.post("http://localhost:8080/api/user/register", {
        ...values,
      });
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log("failed to register", err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              className="img-fluid w-100"
              style={{ minHeight: "100%" }}
            />
          </div>
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Signup form</h3>
            <div className="form-style"></div>
            <div className="">
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap items-center">
                  <div className=" bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-1/3 mt-10 md:mt-0">
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
                        /* and other goodies */
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="form-group pb-3">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              size="50"
                              placeholder="Enter Name"
                              onChange={handleChange}
                              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.name && touched.name && errors.name}
                          </div>
                          <div className="relative mb-2">
                            {/* <label className="leading-7 text-sm text-gray-600">
                              Email
                            </label> */}
                            <input
                              type="text"
                              id="email"
                              name="email"
                              size="50"
                              placeholder="Enter Email"
                              onChange={handleChange}
                              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.email && touched.email && errors.email}
                          </div>
                          <div className="relative mb-2">
                            {/* <label className="leading-7 text-sm text-gray-600">
                              Password
                            </label> */}
                            <input
                              type="text"
                              id="password"
                              name="password"
                              size="50"
                              placeholder="Enter Password"
                              onChange={handleChange}
                              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </div>
                          <div className="relative mb-2">
                            {/* <label className="leading-7 text-sm text-gray-600">
                              Contact
                            </label> */}
                            <input
                              type="text"
                              id="contact"
                              name="contact"
                              size="50"
                              placeholder="Enter Contact"
                              onChange={handleChange}
                              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.contact &&
                              touched.contact &&
                              errors.contact}
                          </div>
                          <div className="relative mb-2">
                            {/* <label className="leading-7 text-sm text-gray-600">
                              Age
                            </label> */}
                            <input
                              type="number"
                              id="age"
                              name="age"
                              onChange={handleChange}
                              placeholder="Enter Age"
                              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                            {errors.age && touched.age && errors.age}
                          </div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                          >
                            Sign Up
                          </button>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
