import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hrms-doc-navbar d-flex flex-column flex-md-row gap-3 align-items-center  justify-content-between px-5 py-3 border border-bottom">
      <div className="hrms-doc-navbar-logo">
        <h4>Hrms</h4>
      </div>
      <div className="searchbar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search docs..." className="px-2 py-1" />
      </div>
      <div className="auth">
        <Link className="mx-3 btn fw-semibold">Sign in</Link>
        <Link className="btn btn-primary rounded-1 px-3 fw-semibold">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
