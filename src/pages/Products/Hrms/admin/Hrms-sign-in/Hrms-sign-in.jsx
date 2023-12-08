import { Link, useNavigate } from "react-router-dom";
import "./Hrms-sign-in.css";

const HrmsSignIn = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/products/hrms/admin");
  return (
    <section className="auth hrms-dash w-100 vh-100">
      <main className="form-signin  h-100  w-100 d-flex justify-content-center align-items-center m-auto">
        <form
          className="bg-white mx-3 p-4 p-md-5 border "
          onSubmit={handleLogin}
        >
          <h1 className="h2 mb-3  text-center primary-text fw-semibold">
            Sign in
          </h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control  my-4 rounded-3"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating rounded-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start my-3">
            <div className="d-flex justify-content-between flex-column  flex-md-row align-items-center">
              <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="remember-me"
                  id="flexCheckDefault"
                />

                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="primary-text text-center text-decoration-none"
              >
                Forget Password
              </a>
            </div>
          </div>
          <button
            className="btn btn-primary w-100 py-3 my-2  text-white border-0"
            type="submit"
          >
            Sign in
          </button>
          <div className="text-center mt-3 text-center">
            Don&apos;t have you account?{" "}
            <Link
              to={"/products/hrms/admin/auth/sign-up"}
              className="fw-medium text-decoration-none"
            >
              Sign up
            </Link>
          </div>
        </form>
      </main>
    </section>
  );
};

export default HrmsSignIn;
