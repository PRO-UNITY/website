import { Nav, Navbar } from "react-bootstrap";
import "./Hrms-dash-navbar.css";

const HrmsDashNavbar = () => {
  return (
    <Navbar expand={"lg"} className=" navbar container mt-4">
      <div className="container-fluid">
        <div className=""></div>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <h1 className="fs-2 fw-semibold text-uppercase">
                Analytical board
              </h1>
            </div>
            <div className="col-lg-6">
              <div className="form">
                <i className="fa fa-search" />
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="Search anything..."
                />
              </div>
            </div>
          </div>
          <Nav className="ms-auto p-4 p-lg-0 align-items-center">
            <div className=" d-flex align-items-center gap-4">
              <i className="fa-solid fa-calendar-check fs-4"></i>
              <i className="fa-solid fa-bell fs-4"></i>

              <img
                width={55}
                className="mx-3 rounded-circle"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>

            <button className=" add-btn btn btn-danger my-3">Add member</button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default HrmsDashNavbar;
