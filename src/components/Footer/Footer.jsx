const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Address</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              Islom Karimov 1 Street, Bukhara, Uzbekistan
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +998 33 899 50 00
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              prounity.uz@gmail.com
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href="https://github.com/prounitycompany"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href
              >
                <i className="fa-solid fa-basketball" />
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href
              >
                <img
                  width="20px"
                  style={{ borderRadius: "50%" }}
                  src="./img/clutchicon.webp"
                  alt
                />
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href="https://www.linkedin.com/company/prounityuz"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href="https://www.instagram.com/prounity.uz/"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href="https://www.upwork.com/agencies/1514836313665982464/"
              >
                <img
                  width="20px"
                  style={{ borderRadius: "50%" }}
                  src="./img/upworkround.avif"
                  alt
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Services</h5>
            <a className="btn btn-link" href>
              Software Development
            </a>
            <a className="btn btn-link" href>
              IT School
            </a>
            <a className="btn btn-link" href>
              Authorized Tutorials
            </a>
            <a className="btn btn-link" href>
              Coworking
            </a>
            <a className="btn btn-link" href>
              Open Source
            </a>
            <a className="btn btn-link" href>
              Pro Community
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a className="btn btn-link" href>
              About Us
            </a>
            <a className="btn btn-link" href>
              Contact Us
            </a>
            <a className="btn btn-link" href>
              Our Services
            </a>
            <a className="btn btn-link" href>
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href>
              Support
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Newsletter</h5>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
