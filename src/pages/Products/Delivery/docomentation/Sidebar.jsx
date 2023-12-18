import { Accordion } from "react-bootstrap";
import "./Documentation.css";
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
        path: "/products/delivery/documentation",
      },
    ],
  },
  {
    id: 2,
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
  {
    id: 3,
    title: "Use Cases",
    child: [
      { id: "create-task", name: "Link", path: "/products/delivery/documentation" },
    ],
  },
  {
    id: 4,
    title: "Payment",
    child: [
      { id: "create-task", name: "Link", path: "/products/delivery/documentation" },
    ],
  },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ showSidebar, setshowSidebar }) => {
  return (
    <>
      <div
        className={`hrms-doc-sidebar py-4
         bg-light border border-right ${showSidebar && "show"} `}
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
