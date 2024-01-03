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
        path: "/products/delivery/documentation/users",
      },
      {
        id: "kitchen",
        name: "Kitchen",
        path: "/products/delivery/documentation/kitchen",
      },
      {
        id: "foods",
        name: "Foods",
        path: "/products/delivery/documentation/foods",
      },
      {
        id: "deliveryman",
        name: "Deliveryman",
        path: "/products/delivery/documentation/deliveryman",
      },
      {
        id: "manager",
        name: "Manager",
        path: "/products/delivery/documentation/manager",
      },
      {
        id: "orders",
        name: "Orders",
        path: "/products/delivery/documentation/orders",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "Test",
  //   child: [
  //     {
  //       id: "create-user",
  //       name: "Test",
  //       path: "",
  //     },
  //   ],
  // },
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
          border border-right ${showSidebar && "show"} `}
      >
        <div className="side-body  px-3">
          <Accordion activeKey={activeHrmsdoc}>
            {Sidenavs.map((item) => (
              <Accordion.Item
                eventKey={item.id}
                key={item.id}
                className="mb-1"
                onClick={() => setActiveHrmsdoc(item.id)}
              >
                <Accordion.Header>
                  <h5 className="fs-5 m-0">{item.title}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  {item.child.map((link) => (
                    <Link
                      key={link.id}
                      to={link.path}
                      className={`d-block fs-6  text-decoration-none ${
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
