import { Link, useNavigate } from "react-router-dom";
import "./Delivery-sign-in.css";
import { useRef } from "react";
import { postData } from "../../functions";

const DeliverySignIn = () => {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

    const handleSignInUser = async (e) => {
      e.preventDefault();
      const user = {
         username : usernameRef.current?.value,
         password : passwordRef.current?.value,
      };
      await postData(user,"/auth/sigin").then((res)=>{
        localStorage.setItem('token',res.token.access)
        console.log(res);
        if(localStorage.getItem("token") !== "undefined" ){
          navigate('/products/delivery/admin')
          window.location.reload()
      }
      })
  };

  return (
    <section className="auth hrms-dash w-100 vh-100">
      <main className="form-signin  h-100  w-100 d-flex justify-content-center align-items-center m-auto">
        <form
          className="bg-white mx-3 p-4 p-md-5 border "
          onSubmit={handleSignInUser}
        >
          <h1 className="h2 mb-3  text-center primary-text fw-semibold">
            Sign in
          </h1>
          <div className="form-floating">
            <input
              type="text"
              required
              className="form-control  my-4 rounded-3"
              id="floatingInput"
              placeholder="michael"
              ref={usernameRef}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating rounded-3">
            <input
              type="password"
              className="form-control"
              required
              id="floatingPassword"
              placeholder="Password"
              ref={passwordRef}
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
              to={"/products/delivery/admin/auth/sign-up"}
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

export default DeliverySignIn;
