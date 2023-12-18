import { Link } from "react-router-dom";

const MenuLinks = () => {
  return (
    <ul className="navbar-nav text-capitalize">
      <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
        <ul className="navbar-nav ms-lg-auto ">
          <li className="nav-item  dropdown-mega">
            <Link to={"/"} className="nav-link  text-capitalize">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link  text-capitalize " href="#">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link  text-capitalize " href="#">
              Services
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link  text-capitalize dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              Products
            </a>
            <div className="dropdown-menu dropdown-lg">
              <div className="dropdown-lg-content">
                <div>
                  <h6 className="dropdown-header">Project Pages</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="dropdown-item"
                        href="@@webRoot/projects.html"
                      >
                        Projects I
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="@@webRoot/projects2.html"
                      >
                        Projects II
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
        <ul className="navbar-nav me-lg-auto">
          <li className="nav-item dropdown dropdown-mega">
            <a className="nav-link dropdown-toggle  text-capitalize" href="#">
              Documentation
            </a>
            <ul className="dropdown-menu mega-menu">
              <li className="mega-menu-content">
                <div className="row gx-0 gx-lg-3">
                  <div className="col-lg-4">
                    <h6 className="dropdown-header">Usage</h6>
                    <ul className="list-unstyled cc-2 pb-lg-1">
                      <li>
                        <a
                          className="dropdown-item"
                          href="@@webRoot/docs/index.html"
                        >
                          Hrms
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="@@webRoot/docs/forms.html"
                        >
                          Delivery
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </ul>
  );
};

export default MenuLinks;
