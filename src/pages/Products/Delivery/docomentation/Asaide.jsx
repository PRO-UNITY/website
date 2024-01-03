/* eslint-disable react/prop-types */
import "./Documentation.css";
const Asaide = ({ Sidenavs, scrollActive }) => {
  return (
    <>
      <div
        style={{ overflow: "auto" }}
        className={`hrms-doc-asaide border position-relative border-left    ps-5`}
      >
        <div className="  pt-5">
          <h5 className="h6 m-0 fw-bold text-uppercase ">One This Page</h5>
        </div>
        <div className="side-body  pt-3">
          {Sidenavs?.map((nav) => (
            <a
              key={nav.id}
              className={`d-block pt-1 text-decoration-none  ${
                scrollActive === nav.path ? "fw-bold" : "fw-normal"
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
