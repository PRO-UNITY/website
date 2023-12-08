import { Nav, Navbar } from "react-bootstrap";
import "./Hrms-dash-navbar.css";

const HrmsDashNavbar = () => {
  return (
    <Navbar expand={"lg"} className="px-md-4 navbar container mt-4">
      <div className="container-fluid">
        <div className=""></div>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <h1 className="fs-2 m-0 w-100 fw-semibold text-uppercase">
            Analytical board
          </h1>
          <div className="form ">
            <i className="fa fa-search fs-5" />
            <input
              type="text"
              className="form-control form-input ps-3 "
              placeholder="Search"
            />
          </div>
          <Nav className="ms-5 p-4 p-lg-0 align-items-center ">
            <div className=" d-flex align-items-center gap-4 mx-2">
              <i className="fa-solid fa-bell fs-4 mx-2"></i>
              <i className="fa-solid fa-calendar-check fs-4 mx-2 me-4"></i>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  style={{ zIndex: 9 }}
                  width={55}
                  className=" rounded-circle"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <div className="profile-count bg-light fw-bolder">+24</div>
              </div>
            </div>

            <button className=" add-btn btn text-white my-3">Add member</button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HrmsDashNavbar;
