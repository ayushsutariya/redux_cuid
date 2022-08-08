import { Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import '../Authentication/Auth.css'
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { SignupAction } from "../../Action/Auth.action";
function Signup(props) {
  const [uselogin, setlogin] = useState("Login");
  const [usepassword, setpassword] = useState(false);
  const dispatch = useDispatch();

  const Handle_login = (values) => {
    alert(JSON.stringify(values, null, 2));

    
    let data = JSON.parse(localStorage.getItem("Login_data"));
    console.log(data);

    if(data === null){
      localStorage.setItem("Login_data" , JSON.stringify([values]));
    } else {
      data.push(values);
      localStorage.setItem("Login_data" , JSON.stringify(data));
    }

  };

  const Handle_SignUp = (values) => {

    dispatch(SignupAction(values))
    console.log(values)

    alert(JSON.stringify(values, null, 2));

    let data = JSON.parse(localStorage.getItem("Signup_data"))
    console.log(data);

    if(data === null){
      localStorage.setItem("Signup_data" , JSON.stringify([values]));
    } else{
      data.push(values);
      localStorage.setItem("Signup_data" , JSON.stringify(data))
    }
  };

  const Handle_Password = (values) => {
    alert(JSON.stringify(values.Email));

    let data = JSON.parse(localStorage.getItem("Password_data"))
    console.log(data);

    if(data === null){
      localStorage.setItem("Password_data" , JSON.stringify([values]));
    } else{
      data.push(values);
      localStorage.setItem("Password_data" , JSON.stringify(data))
    }
  };

  let login_set = {
    Email: yup.string().email("Please enter a valid email").required("Please enter your email address"),
    Password: yup.string().required("Please enter your password"),
  };

  let signup_set = {
    First_Name: yup.string().required("Please enter your First Name"),
    Last_Name: yup.string().required("Please enter your Last Name"),
    Email: yup.string().email("Please enter a valid email").required("Please enter your email address"),
    Password: yup.string().required("Please enter your password"),
    Confirm_Password: yup.string().required("Please re-enter your password"),
  };

  let password_set = {
    Email: yup.string().email("Please enter a valid email").required("Please enter your email address"),
  };
  let schema, initVal;
  if (uselogin === "Login" && !usepassword) {
    schema = yup.object().shape(login_set);
    initVal = {
      Email: "",
      Password: "",
    };
  } else if (uselogin === "Signup" && !usepassword) {
    schema = yup.object().shape(signup_set);
    initVal = {
      First_Name: "",
      Last_Name: "",
      Email: "",
      Password: "",
      Confirm_Password: "",
    };
  } else if (usepassword) {
    schema = yup.object().shape(password_set);
    initVal = {
      Email: ""
    };
  }

  const formik = useFormik({
    initialValues: initVal,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      if (uselogin === "Login" && !usepassword) {
        Handle_login(values);
      } else if (uselogin === "Signup" && !usepassword) {
        Handle_SignUp(values);
      } else if (usepassword) {
        Handle_Password(values);
      }
      resetForm();
    },
  });

  // console.log(formik.errors)

  // const formik = useState({
  //   initialValues: {
  //     First_Name : '',
  //     Last_Name : '',
  //     Email : '',
  //     Password : '',
  //   },
  // })
  return (
    <section id="login">
      <div className="container">
        <div className="section-title">
          {usepassword ? (
            <h2>Set Password</h2>
          ) : uselogin === "Login" ? (
            <h2>Login</h2>
          ) : (
            <h2>Register Here</h2>
          )}
        </div>
        <div className="doctors d-flex justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="member d-flex justify-content-center">
              <Formik value={formik}>
                <Form className="mb-3" onSubmit={formik.handleSubmit}>
                  <div className="form-group first mb-3">
                    {uselogin === "Login" || usepassword ? null : (
                      <div>
                        <label for="text">First Name</label>
                        <input
                          type={"text"}
                          placeholder="First Name"
                          name="First_Name"
                          id="First_Name"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.First_Name}
                        />
                        {formik.errors.First_Name &&
                        formik.touched.First_Name ? (
                          <p>{formik.errors.First_Name}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                  <div className="form-group last mb-3">
                    {uselogin === "Login" || usepassword ? null : (
                      <div>
                        <label for="text">Last Name</label>
                        <input
                          type={"text"}
                          placeholder="Last Name"
                          name="Last_Name"
                          id="Last_Name"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Last_Name}
                        />
                        {formik.errors.Last_Name && formik.touched.Last_Name ? (
                          <p>{formik.errors.Last_Name}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                  <div className="form-group first mb-4">
                    <div>
                      <label for="email" className="ps-1">
                        Email
                      </label>
                      <input
                        type={"email"}
                        placeholder="Email"
                        name="Email"
                        id="Email"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Email}
                      />
                      {formik.errors.Email && formik.touched.Email ? (
                        <p>{formik.errors.Email}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-group last mb-4">
                    {usepassword ? null : (
                      <div>
                        <label for="password" className="ps-1">
                          Password
                        </label>
                        <input
                          type={"password"}
                          placeholder="Password"
                          name="Password"
                          id="Password"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Password}
                        />
                        {formik.errors.Password && formik.touched.Password ? (
                          <p>{formik.errors.Password}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                  <div className="form-group last mb-4">
                    {uselogin === "Login" || usepassword ? null : (
                      <div>
                        <label for="password" className="ps-1">
                          Confirm Password
                        </label>
                        <input
                          type={"password"}
                          placeholder="Confirm Password"
                          name="Confirm_Password"
                          id="Confirm_Password"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Confirm_Password}
                        />
                        {formik.errors.Confirm_Password &&
                        formik.touched.Confirm_Password ? (
                          <p>{formik.errors.Confirm_Password}</p>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                  {usepassword ? (
                    <input
                      onClick={() => Handle_Password()}
                      type="submit"
                      value="Change Password"
                      class="btn btn-block sign-btn"
                    />
                  ) : uselogin === "Login" ? (
                    <input
                      onClick={() => Handle_login()}
                      type="submit"
                      value="Login"
                      class="btn btn-block sign-btn"
                    />
                  ) : (
                    <input
                      onClick={() => Handle_SignUp()}
                      type="submit"
                      value="Register Here"
                      class="btn btn-block sign-btn"
                    />
                  )}
                  {usepassword === true ? (
                    <h4 className="text-center pt-4">
                      <a
                        className="ch-button"
                        onClick={() => setpassword(false)}
                      >
                        Already have an Account ? Login
                      </a>
                    </h4>
                  ) : uselogin === "Login" ? (
                    <h4 className="text-center pt-4">
                      <h6>
                        <a
                          className="ch-button pb-2 "
                          onClick={() => {
                            setpassword(true);
                          }}
                        >
                          Forgot Password ?
                        </a>
                      </h6>
                      <a
                        className="ch-button"
                        onClick={() => {
                          setlogin("Signup");
                        }}
                      >
                        Have a New Account? Signup
                      </a>
                    </h4>
                  ) : (
                    <h4 className="text-center pt-4">
                      {" "}
                      <a
                        className="ch-button"
                        onClick={() => {
                          setlogin("Login");
                        }}
                      >
                        Already have an Account ? Login
                      </a>
                    </h4>
                  )}
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
