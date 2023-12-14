import { Link } from "react-router-dom";
import "./Delivery-sidebar.css";
import { useContext } from "react";
import { ActiveNavContext } from "../../../../../context/ActiveNav";

const sideNavs = [
  { id: 1, path: "/products/delivery/admin", name: "Dashboard1", icon: "fa-house" },
  {
    id: 2,
    path: "/products/delivery/statistic",
    name: "Statictic",
    icon: "fa-square-poll-vertical",
  },
  {
    id: 3,
    path: "/products/delivery/task-list",
    name: "Tack list",
    icon: "fa-list-check",
  },
  {
    id: 4,
    path: "/products/delivery/services",
    name: "Services",
    icon: "fa-square-poll-vertical",
  },
  {
    id: 5,
    path: "/products/delivery/notification",
    name: "Notification",
    icon: "fa-bell",
  },
];
const DeliverySidebar = () => {
  const { activeHrmsDash, setActiveHrmsDash } = useContext(ActiveNavContext);
  return (
    <div>
      <div className="sidebar d-flex  border-secondary border-end  flex-column flex-shrink-0 p-2 ">
        <Link
          onClick={() => setActiveHrmsDash(1)}
          to="/products/hrms/admin"
          className="text-center sidebar-logo  w-100 pt-4 mt-4 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4 fw-semibold text-uppercase">Admetrics</span>
        </Link>

        <ul className="nav nav-pills mx-md-2 px-md-3 py-2 mt-5 flex-column mb-auto">
          {sideNavs.map((item) => (
            <li className="nav-item pt-1" key={item.id}>
              <Link
                to={item.path}
                onClick={() => setActiveHrmsDash(item.id)}
                className={`nav-link text-center text-md-start mx-1  px-3 py-3   text-dark ${
                  activeHrmsDash == item.id ? "active text-white " : ""
                }rounded-0`}
              >
                <i
                  className={`fa-solid fs-5  me-md-3 ${
                    activeHrmsDash == item.id ? "  " : ""
                  }  text-secondary ${item.icon} `}
                ></i>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}

          <li className="nav-item">
            <hr />
            <Link
              to={"/products/hrms/auth/sign-in"}
              className={`nav-link text-center text-md-start mx-1  px-3 py-3   text-dark`}
            >
              <i
                className={`fa-solid fa-arrow-right-from-bracket fs-5  text-secondary  me-md-3`}
              ></i>
              <span>Log Out</span>
            </Link>
          </li>
        </ul>
        <div className="profile  d-flex flex-column justify-content-center align-items-center">
          <img
            width={60}
            className="rounded-circle my-2"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="name fw-bolder">Annette Black</div>
          <div className="mail text-secondary">An-black@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySidebar;
