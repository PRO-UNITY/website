import { Accordion } from "react-bootstrap";
import "./Documentation.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidenavs = [
  {
    id: 1,
    title: "Getting Started",
    child: [
      {
        id: "create-user",
        name: "Installation",
        path: "installation",
      },
      {
        id: "get-user",
        name: "Get User",
        path: "/products/hrms/documentation",
      },
    ],
  },
  {
    id: 2,
    title: "Api",
    child: [
      { id: "create-task", name: "Link", path: "/products/hrms/documentation" },
    ],
  },
  {
    id: 3,
    title: "Use Cases",
    child: [
      { id: "create-task", name: "Link", path: "/products/hrms/documentation" },
    ],
  },
  {
    id: 4,
    title: "Payment",
    child: [
      { id: "create-task", name: "Link", path: "/products/hrms/documentation" },
    ],
  },
];

const Sidebar = () => {
  const [sideShow, setSideShow] = useState(true);

  return (
    <>
      <div
        className={`hrms-doc-sidebar py-4
         bg-light border border-right ${sideShow && "show"} `}
      >
        <div className="side-body bg-light px-3">
          <Accordion defaultActiveKey="">
            {Sidenavs.map((item) => (
              <Accordion.Item eventKey={item.id} key={item.id} className="mb-1">
                <Accordion.Header>
                  <h5 className="fs-6 m-0">{item.title}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  {item.child.map((link) => (
                    <Link
                      key={link.id}
                      to={link.path}
                      className="d-block text-dark text-decoration-none"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
