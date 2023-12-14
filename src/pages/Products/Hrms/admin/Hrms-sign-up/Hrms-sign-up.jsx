import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/slices/authSlice";

const HrmsSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirm_password = formData.get("confirm_password");
    const groups = [2];
    dispatch(signUpUser({ username, first_name, last_name, email, password, confirm_password, groups }));
  };


  return (
    <section className="auth hrms-dash w-100 vh-100">
      <main className="form-signin  h-100  w-100 d-flex justify-content-center align-items-center m-auto">
        <form
          className="bg-white mx-3 p-4 p-md-5 border "
          onSubmit={handleSignUp}
        >
          <h1 className="h2 mb-3  text-center primary-text fw-semibold">
            Register
          </h1>
          <div className="form-floating">
            <input
              name="username"
              type="text"
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Username</label>
          </div>

          <div className="form-floating">
            <input
              name="first_name"
              type="text"
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>

          <div className="form-floating">
            <input
              name="last_name"
              type="text"
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>

          <div className="form-floating">
            <input
              name="email"
              type="email"
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating rounded-3">
            <input
              name="password"
              type="password"
              className="form-control rounded-0"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <br />
          <div className="form-floating rounded-3">
            <input
              name="confirm_password"
              type="password"
              className="form-control rounded-0"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>

          <button
            className="btn rounde-0 mt-3 btn-primary w-100 py-3   text-white rounded-3"
            type="submit"
          >
            Sign in
          </button>
          <div className="text-center mt-3 text-center">
            Don&apos;t have you account?{" "}
            <Link
              to={"/products/hrms/admin/auth/sign-in"}
              className="fw-medium text-decoration-none"
            >
              Sign in
            </Link>
          </div>
        </form>
      </main>
    </section>
  );
};

export default HrmsSignUp;
