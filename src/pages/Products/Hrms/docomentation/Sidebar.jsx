import { Accordion } from "react-bootstrap";
import "./Documentation.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ActiveNavContext } from "../../../../context/ActiveNav";

const Sidenavs = [
  {
    id: 2,
    title: "Api",
    child: [
      {
        id: "users",
        name: "Users",
        path: "/products/hrms/documentation/users",
      },
      {
        id: "job",
        name: "Job",
        path: "/products/hrms/documentation/job",
      },
      {
        id: "resume",
        name: "Resume",
        path: "/products/hrms/documentation/resume",
      },
      {
        id: "company",
        name: "Company",
        path: "/products/hrms/documentation/company",
      },
    ],
  },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ showSidebar, setshowSidebar }) => {
  const { activeHrmsdoc, setActiveHrmsdoc } = useContext(ActiveNavContext);

  return (
    <>
      <div
        className={`hrms-doc-sidebar py-4
         bg-light border border-right ${showSidebar && "show"} `}
      >
        <div className="side-body bg-light px-3">
          <Accordion defaultActiveKey={activeHrmsdoc}>
            {Sidenavs.map((item) => (
              <Accordion.Item
                eventKey={item.id}
                key={item.id}
                onClick={() => setActiveHrmsdoc(item.id)}
                className="mb-1"
              >
                <Accordion.Header>
                  <h5 className="fs-6 m-0">{item.title}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  {item.child.map((link) => (
                    <Link
                      key={link.id}
                      to={link.path}
                      className="d-block text-dark text-decoration-none"
                      onClick={() => setshowSidebar(false)}
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
