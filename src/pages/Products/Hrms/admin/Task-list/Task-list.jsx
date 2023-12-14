import HrmsAdminLayout from "../../../../../Layout/Hrms-admin-layout";
import { Link } from "react-router-dom";
import { useState } from "react";
const btns = [
  { id: 1, name: "Active", count: 8 },
  { id: 2, name: "Inactive", count: 24 },
];
const TaskList = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const [showMenu, setshowMenu] = useState(false);
  return (
    <HrmsAdminLayout>
       <div className="hrms-dashboasrd-home mt-4 overflow-auto">
        <div className="container">
          <h3>Tasks</h3>
          <div className="btns my-2">
            {btns.map((btn) => (
              <button
                onClick={() => setActiveBtn(btn.id)}
                key={btn.id}
                className={`btn ${
                  activeBtn === btn.id ? "btn-active" : "btn-no-active"
                } text-primary my-2 me-2`}
              >
                <span
                  className={`badge ${
                    activeBtn === btn.id ? "text-bg-primary" : "text-bg-light"
                  }  fw-normal me-2`}
                >
                  {btn.count}
                </span>
                {btn.name}
              </button>
            ))}
          </div>
          <div className="card p-0 rounded overflow-hidden">
            <table className="table m-0">
              <tbody>
                <tr>
                  
                  <td>
                    <h6 className="m-0 mt-2">Oct 01, 2022 </h6>
                    <span className="text-secondary ">Start Date</span>
                  </td>
                  <td>
                    <h6 className="m-0 mt-2">
                      None
                      <i className="fa-solid fa-circle-exclamation mx-1 text-warning"></i>
                      <span className="text-warning fw-normal">
                        Expires soon
                      </span>
                    </h6>
                    <span className="text-secondary">Deadline</span>
                  </td>
                  <td>
                    <h6 className="m-0 mt-2">Michael John</h6>
                    <span className="text-secondary">User</span>
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
                              Edit Task
                            </Link>
                            <button className="btn btn-danger">
                              Delete Task
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
                    <h6 className="m-0 mt-2">Oct 01, 2022 </h6>
                    <span className="text-secondary ">Start Date</span>
                  </td>
                  <td>
                    <h6 className="m-0 mt-2">Apr 17, 2023</h6>
                    <span className="text-secondary">Deadline</span>
                  </td>
                  <td>
                    <h6 className="m-0 mt-2">Adrey Molodsov</h6>
                    <span className="text-secondary">User</span>
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

export default TaskList;
