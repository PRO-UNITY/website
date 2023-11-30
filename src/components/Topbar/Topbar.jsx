const Topbar = () => {
  return (
    <div className="container-fluid p-0 wow fadeIn " data-wow-delay="0.1s">
      <div className="row gx-0 d-none d-lg-flex">
        <div className="col-lg-7 px-5 text-start">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://maps.app.goo.gl/oz5im3ic1GM48FfL6"
            className="h-100 d-inline-flex align-items-center py-3 me-4 text-decoration-none text-dark"
          >
            <small className="fa fa-map-marker-alt text-primary me-2" />
            <small>Islom Karimov 1 Street, Bukhara, Uzbekistan</small>
          </a>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2" />
            <small>Mon - Sat : 09.00 AM - 06.00 PM</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <a
            href="tel:+998-33-899-50-00"
            className="h-100 d-inline-flex align-items-center py-3 me-4 text-decoration-none text-dark"
          >
            <small className="fa fa-phone-alt text-primary me-2" />
            <small>+998 33 899 50 00</small>
          </a>
          <div className="h-100 d-inline-flex align-items-center">
            <a
              className="text-decoration-none btn-sm-square rounded-circle bg-white text-primary me-1"
              href="https://github.com/PRO-UNITY"
            >
              <img
                width={16}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
            </a>
            <a
              className=" text-decoration-none btn-sm-square rounded-circle bg-white text-primary me-1 "
              href
            >
              <i className="fa-solid fa-basketball" />
            </a>
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
              href
            >
              <img width="20px" src="./img/clutchicon.webp" alt />
            </a>
            <a
              className="text-decoration-none btn-sm-square rounded-circle bg-white text-primary me-1"
              href="https://clutch.co/profile/pro-unity"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary m-0"
              href="https://www.instagram.com/prounity.uz/"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn btn-sm-square rounded-circle bg-white text-primary m-0"
              href="https://www.upwork.com/agencies/1514836313665982464/"
            >
              <i className="fa-brands fa-upwork"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
