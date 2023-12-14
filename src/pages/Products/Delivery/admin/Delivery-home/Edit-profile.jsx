import { Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import HrmsAdminLayout from "../../../../../Layout/Hrms-admin-layout";
import { useRef } from "react";

const EditProfile = () => {
  const hiddenFileInput = useRef(null);

  const handleClick = () => hiddenFileInput.current.click();

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
  };
  return (
    <DeliveryAdminLayout>
      <div className="mt-4 profile-setting overflow-auto">
        <div className="container">
          <h3>Profile settings</h3>
          <div className="card profile-setting-card overfoll p-4">
            <div className="card-head rounded-3 d-flex align-items-center justify-content-center p-4 flex-column bg-light">
              <div className="user-img d-flex align-items-center rounded-circle justify-content-center">
                <i className="fa-solid fa-circle-user fs-5"></i>
              </div>
              <span className="my-2">Image must be 256 x 256px - Max 2MB</span>
              <div className="mt-1">
                <input
                  type="file"
                  onChange={handleChange}
                  ref={hiddenFileInput}
                  hidden
                />
                <button
                  className="btn py-2 px-3 bg-white border me-3 fw-semibold"
                  onClick={handleClick}
                >
                  <i className="fa-solid fa-upload me-2"></i>Upload image
                </button>
                <button className="btn py-2 text-danger px-3 bg-white border fw-semibold">
                  <i className="fa-solid fa-trash-can me-2"></i>Delete image
                </button>
              </div>
            </div>
            <div className="card-body px-0 py-0 pt-4">
              <div className="mb-3">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Select"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="myemail@gmail.com"
                    />
                  </div>
                  <div
                    style={{ position: "relative" }}
                    className="col-lg-6 realative"
                  >
                    <img
                      width={30}
                      height={20}
                      className="rounded-1 position-absolute  me-2 start-0"
                      style={{ objectFit: "cover", marginTop:"12px", marginLeft:"20px" }}
                      src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
                      alt=""
                    />
                    <input
                      type="email"
                      className="form-control py-2 ps-5"
                      id="exampleFormControlInput1"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>
                <InputGroup className="mb-3 relative">
                  <DropdownButton
                    variant="outline-secondary"
                    className="border"
                    title="https://"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control placeholder="Enter..." />

                  <div className="form-check position-absolute text-success mt-1 me-2 end-0">
                    <input
                      className="form-check-input bg-outline-success  "
                      type="checkbox"
                      defaultValue
                      id="btn-check-outlined"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckIndeterminateDisabled"
                    >
                      Available
                    </label>
                  </div>
                </InputGroup>
                <textarea
                  className="form-control mt-4"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter text here..."
                  rows="4"
                ></textarea>
                <button className=" float-end mt-4 btn btn-primary px-4 py-2">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DeliveryAdminLayout>
  );
};
export default EditProfile;
