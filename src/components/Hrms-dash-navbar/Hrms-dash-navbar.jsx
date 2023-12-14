import { Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import "./Hrms-dash-navbar.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

const HrmsDashNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand={"lg"} className="px-md-4 navbar container mt-4">
        <div className="container-fluid">
          <div className=""></div>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <h1 className="fs-2 m-0 w-100 fw-semibold text-uppercase">
              Analytical board
            </h1>
            <Nav className="ms-5 p-4 p-lg-0 align-items-center ">
              <div className=" d-flex align-items-center gap-4 mx-2">
                <i className="fa-solid fa-bell fs-4 mx-2"></i>
                <Link className="text-dark" to={'/products/hrms/calendar'}>
                  <i className="fa-solid fa-calendar-check fs-4 mx-2 me-4"></i>
                </Link>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    style={{ zIndex: 9 }}
                    width={55}
                    className=" rounded-circle"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
              <button onClick={handleShow} className=" add-btn btn text-white my-3">Add member</button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal */}

    </>
  );
};

export default HrmsDashNavbar;
