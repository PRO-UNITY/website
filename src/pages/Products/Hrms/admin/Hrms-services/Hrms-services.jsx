import HrmsAdminLayout from "../../../../../Layout/Hrms-admin-layout";
import { Link } from "react-router-dom";
import { useState } from "react";

const HrmsServices = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <HrmsAdminLayout>
       <div className="hrms-dashboasrd-home mt-4 overflow-auto">
        <div className="container">
          <h3>Services</h3>
          
          <div className="card p-0 rounded overflow-hidden">
            <table className="table m-0">
              <tbody>
                <tr>
                  
                  <td>
                    <h6 className="m-0 mt-2">Frontend </h6>
                    <span className="text-secondary ">Sevice</span>
                  </td>
                  <td>
                    <h6 className="m-0 mt-2">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, architecto?
                    </h6>
                    <span className="text-secondary">Content</span>
                  </td>
                  <td>
                    <h6 className="m-0 mt-2">PROUnity</h6>
                    <span className="text-secondary">Company</span>
                  </td>
                  <td align="center" className="text-end">
                    <div className="d-flex align-items-center justify-content-end mt-2">
                      <button className="action-button btn py-2  fw-semibold border">
                        <i className="fa-solid fa-rotate px-1"></i> Renew
                      </button>
                      <div className="position-realative">
                        {showMenu && (
                          <div className="menu-open  p-3 rounded d-flex  justify-content-end flex-column gap-2">
                            <Link
                              to={"/products/delivery/admin/edit-profile"}
                              className="btn btn-primary"
                            >
                              Edit Service
                            </Link>
                            <button className="btn btn-danger">
                              Delete Service
                            </button>
                          </div>
                        )}
                        <button
                          className="btn ms-1"
                          onClick={() => setshowMenu((prev) => !prev)}
                        >
                          <i className="fa-solid fa-ellipsis-vertical fs-5 "></i>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className="m-0 mt-2">Backend </h6>
                    <span className="text-secondary ">Service</span>
                  </td>
                  <td>
                    <h6 className="m-0 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos.</h6>
                    <span className="text-secondary">Content</span>
                  </td>
                  <td>
                    <h6 className="m-0 mt-2">PROUnity</h6>
                    <span className="text-secondary">Company</span>
                  </td>
                  <td align="center" className="text-end">
                    <div className="d-flex align-items-center justify-content-end mt-2">
                      <button className="action-button btn py-2  fw-semibold border">
                        <i className="fa-solid fa-ban px-1"></i> Cancel
                      </button>
                      <button className="btn ms-1">
                        <i className="fa-solid fa-ellipsis-vertical fs-5"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </HrmsAdminLayout>
  );
};

export default HrmsServices;


