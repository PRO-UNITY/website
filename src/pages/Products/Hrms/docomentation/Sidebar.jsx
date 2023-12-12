import "./Documentation.css";
import { useState } from "react";

const Sidenavs = [
  {
    id: 1,
    title: "Users",
    show: false,
    child: [
      { id: "create-user", name: "Create User", path: "create-user" },
      { id: "get-user", name: "Get User", path: "get-user" },
    ],
  },
  {
    id: 2,
    title: "Tasks",
    show: false,
    child: [
      { id: "create-task", name: "Create Task", path: "creat-task" },
      { id: "marking", name: "Marking as Complete", path: "making" },
      { id: "listing", name: "Listing Tasks", path: "listing-task" },
    ],
  },
];

const Sidebar = ({ setShowSearchbar }) => {
  const [data, setData] = useState(Sidenavs);

  const handleToggle = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };

  return (
    <div className="hrms-doc-sidebar">
      <div className="side-head p-3 pb-0">
        <h5 className="fs-4">DocHRMS</h5>
        <div className="inut-box px-2 bg-light mt-3 rounded-2">
          <input
            onClick={() => setShowSearchbar(true)}
            type="text"
            placeholder="Search ..."
            className="border-0 bg-light py-1"
          />
        </div>
      </div>
      <hr />
      <div className="side-body px-3">
        {data.map((nav) => (
          <div className="accordion pt-2" key={nav.id}>
            <div
              className="head cursor d-flex justify-content-between"
              onClick={() => handleToggle(nav.id)}
            >
              <h5>{nav.title}</h5>
              <i
                className={`fa-solid fa-sort-down ${nav.show && "active"}`}
              ></i>
            </div>
            {nav.show && (
              <div className={`body ps-2 `}>
                <ul className="p-0">
                  {nav.child.map((childItem) => (
                    <li key={childItem.id} className="py-1">
                      <a
                        href={`#${childItem.path} `}
                        to={`/documentation/${childItem.id}`}
                        className="text-light text-decoration-none "
                      >
                        {childItem.name}

                        <i className=""></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
