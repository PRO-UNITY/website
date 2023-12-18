import { Link } from "react-router-dom";
import Logo from "../../assets/logotogether.png";
import Topbar from "../Topbar/Topbar";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useContext, useState } from "react";
import "./Navbar.css";
import { ActiveNavContext } from "../../context/ActiveNav";
import MenuLinks from "./Menu-links";

const MyNavbar = () => {
  const { t } = useTranslation();
  const { activeNav, setactiveNav } = useContext(ActiveNavContext);
  const [activeProduct, setactiveProduct] = useState(0);
  const [activeLang, setactiveLang] = useState("en");
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container flex-lg-row flex-nowrap align-items-center">
            <div className="container">
              <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
                <div className="navbar-brand w-100">
                  <a href="#">
                    <img src={Logo} width={120} alt="logo" />
                  </a>
                </div>
                <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                  <div className="offcanvas-header d-lg-none">
                    <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                    <MenuLinks />
                    <div className="offcanvas-footer d-lg-none"></div>
                    {/* /.offcanvas-footer */}
                  </div>
                  <div className="navbar-other ms-5 flex text-dark">
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                      <li className="d-flex gap-3">
                        <a href="#" className="text-decoration-none text-dark">
                          <i className="uil uil-twitter" />
                        </a>
                        <a href="#" className="text-decoration-none text-dark">
                          <i className="uil uil-facebook-f" />
                        </a>
                        <a href="#" className="text-decoration-none text-dark">
                          <i className="uil uil-dribbble" />
                        </a>
                        <a href="#" className="text-decoration-none text-dark">
                          <i className="uil uil-instagram" />
                        </a>

                        {/* /.social */}
                      </li>

                      <li className="nav-item d-lg-none">
                        <button className="hamburger offcanvas-nav-btn">
                          <span />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MyNavbar;
