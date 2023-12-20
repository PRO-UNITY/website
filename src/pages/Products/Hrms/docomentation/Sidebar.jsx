import { Accordion } from "react-bootstrap";
import "./Documentation.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ActiveNavContext } from "../../../../context/ActiveNav";

const Sidenavs = [
  {
    id: 1,
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
  {
    id: 2,
    title: "Test",
    child: [
      {
        id: "test",
        name: "Test",
        path: "",
      },
    ],
  },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ showSidebar, setshowSidebar }) => {
  const { pathname } = useLocation();
  const { activeHrmsdoc, setActiveHrmsdoc } = useContext(ActiveNavContext);
  useEffect(() => {
    Sidenavs.map((item) =>
      item.child.map((e) => {
        if (e.path == pathname) {
          setActiveHrmsdoc(item.id);
        }
      })
    );
  }, []);

  return (
    <>
      <div
        className={`hrms-doc-sidebar py-4
         bg-light border border-right ${showSidebar && "show"} `}
      >
        <div className="side-body bg-light px-3">
          <Accordion defaultActiveKey={activeHrmsdoc} activeKey={activeHrmsdoc}>
            {Sidenavs.map((item) => (
              <Accordion.Item
                eventKey={item.id}
                key={item.id}
                className="mb-1"
                onClick={() => setActiveHrmsdoc(item.id)}
              >
                <Accordion.Header>
                  <h5 className="fs-6 m-0">{item.title}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  {item.child.map((link) => (
                    <Link
                      key={link.id}
                      to={link.path}
                      className={`d-block  text-decoration-none ${
                        pathname === link.path
                          ? "text-primary fw-semibold"
                          : "text-dark"
                      }`}
                      onClick={() => {
                        setshowSidebar(false);
                      }}
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
