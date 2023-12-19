/* eslint-disable react/prop-types */

const DemoNavbar = ({ setshowSidebar }) => {
  return (
    <div className="hrms-doc-navbar demo-navbar d-flex flex-column flex-md-row gap-3 align-items-center bg-white  justify-content-between px-md-5 py-3">
      <i
        className="fa-solid fa-bars position-absolute top-0 start-0 m-3 my-4 "
        onClick={() => setshowSidebar((prev) => !prev)}
      ></i>
      <div className="hrms-doc-navbar-logo">
        <h4>Hello, Patricia</h4>
      </div>
      <div className="searchbar bg-light">
        <i className="fa-solid fa-magnifying-glass orange"></i>
        <input type="text" placeholder="What do you want eat today" className="px-2 py-1" />
      </div>
      
    </div>
  );
};

export default DemoNavbar;
