import HrmsAdminLayout from "../../../../../Layout/Hrms-admin-layout";
import "./Hrms-dash.css";
const HrmsHome = () => {
  return (
    <HrmsAdminLayout>
      <div className="hrms-dashboasrd-home mt-4 overflow-auto">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4">
              <div className="card m-0 mb-3 bg-light"></div>
            </div>
            <div className="col-lg-8">
              <div className="card bg-light"></div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 mb-3">
              <div className="card m-0 bg-light"></div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card bg-light"></div>
            </div>
            <div className="col-lg-4">
              <div className="card bg-light"></div>
            </div>
          </div>
        </div>
      </div>
    </HrmsAdminLayout>
  );
};

export default HrmsHome;
