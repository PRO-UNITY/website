import "./Documentation.css";
import { useState } from "react";

const Sidenavs = [
  {
    id: 1,
    title: "Overview",
    path: "create-user",
  },
  {
    id: 2,
    title: "Quick Start",
    path: "get-user",
  },
  {
    id: 3,
    title: "Configure your integration",
    path: "creat-task",
  },
  {
    id: 4,
    title: "Complate Your KYC",
    path: "making",
  },
  {
    id: 5,
    title: "Access APIs",
    path: "listing-task",
  },
];

const Asaide = () => {
  const [sideShow, setSideShow] = useState();
  const [activeLink, setActiveLink] = useState(1);

  return (
    <>
      <div
        className={`hrms-doc-asaide border border-left ${
          sideShow && "show"
        } ps-5`}
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