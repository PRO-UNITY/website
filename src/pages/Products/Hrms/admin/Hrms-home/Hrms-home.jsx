import HrmsAdminLayout from "../../../../../Layout/Hrms-admin-layout";
import "./Hrms-dash.css";
const HrmsHome = () => {
  return (
    <HrmsAdminLayout>
      <div className="hrms-dashboasrd-home mt-4 overflow-auto">
        <div className="container">
          <div className="row">
            <div className=" col-lg-4">
              <div className="card m-0 mb-3"></div>
            </div>
            <div className="col-lg-8">
              <div className="card"></div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 mb-3">
              <div className="card m-0"></div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card"></div>
            </div>
            <div className="col-lg-4">
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    </HrmsAdminLayout>
  );
};

export default HrmsHome;
