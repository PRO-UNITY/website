const Contact = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Contact
              </p>
              <h1 className="mb-4">Our Company</h1>
              <p className="mb-4">
                Contact us today to learn more about how PRO UNITY can help you
                achieve your IT goals
              </p>
              <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: 55, height: 55 }}
                >
                  <i className="fa fa-phone-alt text-primary" />
                </div>
                <div className="ms-4">
                  <p className="mb-2">Call Us Now</p>
                  <h5 className="mb-0">+998 33 899 50 00</h5>
                </div>
              </div>
              <div className="bg-light rounded d-flex align-items-center p-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: 55, height: 55 }}
                >
                  <i className="fa fa-envelope-open text-primary" />
                </div>
                <div className="ms-4">
                  <p className="mb-2">Mail Us Now</p>
                  <h5 className="mb-0">prounity.uz@gmail.com</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: 55 }}
                      >
                        <option selected>Choose Purpose</option>
                        <option value={1}>Frontend</option>
                        <option value={2}>Backend</option>
                        <option value={3}>Mobile</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        rows={5}
                        placeholder="Describe your problem"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
