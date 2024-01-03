/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Navbar = ({ setshowSidebar }) => {
  return (
    <div className="hrms-doc-navbar bg-white  px-md-5 py-3  border-bottom">
      <div className="container-lg d-flex flex-column flex-md-row gap-3 align-items-center  justify-content-between ">
        <i
          className="fa-solid fa-bars position-absolute top-0 start-0 m-3 my-4 "
          onClick={() => setshowSidebar((prev) => !prev)}
        ></i>
        <div className="hrms-doc-navbar-logo">
          <h4>Delivery</h4>
        </div>
        <div className="searchbar border border-dark  rounded-3">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search docs..." className="px-2 " />
        </div>
        <div className="auth">
          <Link className="mx-3 btn btn-outline-dark rounded-3 border-2 py-1 fw-semibold">
            Sign in
          </Link>
          <Link className="btn btn-gold rounded-1 px-3 fw-semibold">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
