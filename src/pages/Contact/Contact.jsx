import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../Layout/Layout";
import { Alert } from "react-bootstrap";

const Contact = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const purposeRef = useRef(null);
  const descriptionRef = useRef(null);

  const ContactPost = async (event) => {
    event.preventDefault();
    setShow(true);
    nameRef.current.value = null;
    emailRef.current.value = null;
    mobileRef.current.value = null;
    purposeRef.current.value = 0;
    descriptionRef.current.value = null;
  };

  setTimeout(() => setShow(false), 5000);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout title={"ProUnity | Contact"}>
      {show && (
        <Alert
          className="send-message"
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          <p className="m-0">Your message has been sent successfully!</p>
        </Alert>
      )}
      <div className="container-xxl py-5 contact">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                {t("appointment.appointmentbutton")}
              </p>
              <h1 className="mb-4"> {t("appointment.title")}</h1>
              <p className="mb-4">{t("appointment.text")}</p>
              <a
                href="tel:+998-33-899-50-00 "
                className="text-decoration-none text-white"
              >
                <div className="bg-white rounded contact-card  d-flex align-items-center py-4 px-2 px-md-5 py-md-5 mb-4">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle border border-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-phone-alt text-white  " />
                  </div>
                  <div className="ms-2 ms-md-5">
                    <p className="mb-2">{t("appointment.call")}</p>
                    <h5 className="mb-0">+998 33 899 50 00</h5>
                  </div>
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:prounity.uz@gmail.com"
                className="text-decoration-none text-white"
              >
                <div className="bg-white contact-card  rounded d-flex align-items-center py-4 px-2 px-md-5 py-md-5">
                  <div
                    className="d-flex  flex-shrink-0 align-items-center justify-content-center rounded-circle border border-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-envelope-open text-white" />
                  </div>
                  <div className="ms-2 ms-md-5">
                    <p className="mb-2">{t("appointment.message")}</p>
                    <h5 className="mb-0 ">prounity.uz@gmail.com</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                <form onSubmit={ContactPost}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder={t("appointment.inputplaceholdername")}
                        style={{ height: 55 }}
                        name="name"
                        ref={nameRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder={t("appointment.inputplaceholderemail")}
                        style={{ height: 55 }}
                        name="email"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder={t("appointment.inputplaceholdermobile")}
                        style={{ height: 55 }}
                        name="mobile"
                        ref={mobileRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        aria-label="Purpose"
                        className="form-select border-0"
                        style={{ height: 55 }}
                        ref={purposeRef}
                        defaultValue={0}
                        required
                      >
                        <option value={0} hidden>
                          {t("appointment.inputplaceholderpurpose")}
                        </option>
                        <option value={1}>Frontend</option>
                        <option value={2}>Backend</option>
                        <option value={3}>Mobile</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        rows={5}
                        placeholder={t("appointment.inputplaceholderdescripe")}
                        ref={descriptionRef}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn home-btn pro-bg-primary text-light w-100 py-3"
                        type="submit"
                      >
                        {t("appointment.bookbutton")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
