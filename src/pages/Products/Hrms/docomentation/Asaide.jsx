import "./Documentation.css";
import { useState } from "react";

const Sidenavs = [
  {
    id: 1,
    title: "Create User",
    path: "create-user",
  },
  {
    id: 2,
    title: "Sign in",
    path: "sign-in",
  },
  {
    id: 3,
    title: "User Profile",
    path: "user-profile",
  },
  {
    id: 4,
    title: "User Update",
    path: "user-update",
  },
  {
    id: 5,
    title: "User Detail",
    path: "user-detail",
  },
  {
    id: 6,
    title: "User Meneger",
    path: "user-manager",
  },
];

const Asaide = () => {
  const [activeLink, setActiveLink] = useState(1);

  return (
    <>
      <div
        className={`hrms-doc-asaide border position-relative border-left bg-light   ps-5`}
      >
        <div className="  pt-5">
          <h5 className="h6 m-0 fw-bold text-uppercase ">One This Page</h5>
        </div>
        <div className="side-body  pt-3">
          {Sidenavs.map((nav) => (
            <a
              key={nav.id}
              onClick={() => setActiveLink(nav.id)}
              className={`d-block pt-1 text-decoration-none  ${
                activeLink == nav.id && "fw-bold"
              }`}
              href={`#${nav.path}`}
            >
              {nav.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Asaide;
