import "./Documentation.css";
import { NavLink } from "react-router-dom";

const Sidenavs = [
      {
        id: "users",
        name: "Dashboard",
        path: "/products/delivery/demo/dashboard",
        active: "/products/delivery/demo/dashboard",
        icon : "fa-solid fa-utensils"
      },
      {
        id: "kitchen",
        name: "Food order",
        path: "/products/delivery/demo/food-order",
        active: "/products/delivery/demo/food-order",
        icon: "fa-solid fa-truck",
      },
      {
        id: "foods",
        name: "Favourite",
        path: "/products/delivery/demo/favourite",
        active: "/products/delivery/demo/favourite",
        icon: "fa-regular fa-heart",
      },
      {
        id: "deliveryman",
        name: "Order History",
        path: "/products/delivery/demo/order-history",
        active: "/products/delivery/demo/order-history",
        icon: "fa-solid fa-clock-rotate-left",

      },
      {
        id: "manager",
        name: "Bills",
        path: "/products/delivery/demo/bills",
        active: "/products/delivery/demo/bills",
        icon: "fa-solid fa-money-bill-1",

      },
      {
        id: "orders",
        name: "Settings",
        path: "/products/delivery/demo/settings",
        active: "/products/delivery/demo/settings",
        icon: "fa-solid fa-gears",
      }
];

// eslint-disable-next-line react/prop-types
const DemoSidebar = ({ showSidebar, setshowSidebar }) => {

  const checkActive = (match, location) => {
    const { pathname } = location;
  
    return pathname === match;
  };

  return (
    <>
      <div
        className={`hrms-doc-sidebar py-2
         bg-light  ${showSidebar && "show"} `}
      >
        <div className="w-100 text-center mb-5">
        <h2>Delivery</h2>
        </div>
        <div className="side-body ">
          <ul className="px-3">
          {
            Sidenavs.map(item=>
              <li className="nav-item" key={item.id}>
                <NavLink to={item.path} className="nav-link text-start px-2" isActive={() => checkActive(item.active)}>
                <p className="text-start py-3"><i className={`${item.icon} mx-3 `}></i> {item.name}</p>
              </NavLink>
              </li>  
            )
          }
          </ul>
        </div>
      </div>
    </>
  );
};

export default DemoSidebar;
