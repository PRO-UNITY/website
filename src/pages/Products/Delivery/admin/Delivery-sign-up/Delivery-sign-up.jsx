import { Link, useNavigate } from "react-router-dom";

const DeliverySignUp = () => {
  const navigate = useNavigate();
  const handleSignUp = () => navigate("/products/delivery/admin");
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
              type="email"
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control rounded-0 my-4"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating rounded-3">
            <input
              type="password"
              className="form-control rounded-0"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            className="btn rounde-0 mt-3 btn-primary w-100 py-3   text-white rounded-3"
            type="submit"
          >
            Sign up
          </button>
          <div className="text-center mt-3 text-center">
            Don&apos;t have you account?{" "}
            <Link
              to={"/products/delivery/admin/auth/sign-in"}
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

export default DeliverySignUp;
