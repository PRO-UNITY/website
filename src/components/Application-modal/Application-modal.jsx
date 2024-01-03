/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Application-modal.css";

const ApplicationModal = ({ btn }) => {
  const [showModal, setshowModal] = useState(false);
  const sendMessage = (e) => {
    e.preventDefaut();
  };

  const handleToggle = () => setshowModal((prev) => !prev);
  return (
    <div className="application-modal">
      <button className="btn btn-gold" onClick={handleToggle}>
        {btn}
      </button>
      {showModal && (
        <div className="modal-wrapp">
          <div className="overlay" onClick={handleToggle}></div>
          <div className="container  d-flex justify-content-center">
            <form className=" p-5 rounded-4">
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="close-btn mx-0 btn"
                  onClick={handleToggle}
                >
                  <i className="fa-solid fa-xmark fs-5"></i>
                </button>
              </div>
              <div className="head text-center">
                <span className="text-secondary">To get a consultation</span>
                <h3 className="font-primary fs-3 mt-3">
                  Leave your contacts for communication
                </h3>
              </div>
              <div className="input-box my-4">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <textarea
                  placeholder="Description"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  onClick={sendMessage}
                  className="btn btn-gold "
                >
                  Send Mesage
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationModal;
