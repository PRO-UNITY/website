import HomeImg from "../../assets/team1.jpg";
import { useTranslation } from "react-i18next";
import Layout from "../../Layout/Layout";
import imgab1 from "../../assets/img/photos/ab1.jpg";
import imgab2 from "../../assets/img/photos/ab2.jpg";
import imgab3 from "../../assets/img/photos/ab3.jpg";
import imgag1 from "../../assets/img/photos/g1.jpg";
import imgag2 from "../../assets/img/photos/g2.jpg";
import imgag3 from "../../assets/img/photos/g3.jpg";
import imgag4 from "../../assets/img/photos/g4.jpg";
import bg1 from "../../assets/img/photos/b1.jpg";
import phoneIcon from "../../assets/img/icons/lineal/telephone-2.svg";
import "../../assets/scss/style.scss";
import "../../assets/scss/colors/violet.scss";
import "../../assets/scss/fonts/dm.scss";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Header Start */}
      <div className="content-wrapper">
        <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center">
          <div className="rounded-4-lg-start col-lg-5 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50">
            <img
              src={HomeImg}
              alt=""
              className="w-100 h-100  object-fit-cover"
            />
          </div>
          {/*/column */}
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div
                  className="mt-5 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start"
                  data-cues="slideInDown"
                  data-group="page-title"
                  data-delay={600}
                >
                  <h1 className="display-6 mb-5">{t("herosection.title")}</h1>
                  <p className="lead fs-25 lh-sm mb-7 pe-md-10">
                    {t("herosection.desc")}
                  </p>
                  <div
                    className="d-flex justify-content-center justify-content-lg-start"
                    data-cues="slideInDown"
                    data-group="page-title-buttons"
                    data-delay={900}
                  >
                    <span>
                      <a
                        href="#"
                        className="btn  btn-primary rounded-pill me-2"
                      >
                        Explore Now
                      </a>
                    </span>
                    <span>
                      <a
                        href="#"
                        className="btn  btn-outline-primary rounded-pill"
                      >
                        Contact Us
                      </a>
                    </span>
                  </div>
                </div>
                {/*/div */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-18">
            <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-10 mb-md-13">
              <div className="col-lg-6 position-relative">
                <div
                  className="btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 170,
                    height: 170,
                  }}
                >
                  <h3 className="text-white mb-1 mt-n2">
                    <span className="counter counter-lg">20+</span>
                  </h3>
                  <p>Year Experience</p>
                </div>
                <div className="row gx-md-5 gy-5 align-items-center">
                  <div className="col-md-6">
                    <div className="row gx-md-5 gy-5">
                      <div className="col-md-10 offset-md-2">
                        <figure className="rounded">
                          <img src={imgab1} alt />
                        </figure>
                      </div>
                      {/*/column */}
                      <div className="col-md-12">
                        <figure className="rounded">
                          <img src={imgab2} alt />
                        </figure>
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/*/column */}
                  <div className="col-md-6">
                    <figure className="rounded">
                      <img src={imgab3} alt />
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="col-lg-6">
                <h3 className="display-4 mb-5">
                  We bring solutions to make life easier for our customers.
                </h3>
                <p className="mb-7">
                  Nulla vitae elit libero, a pharetra augue. Aenean lacinia
                  bibendum nulla sed consectetur. Integer posuere erat a ante
                  venenatis dapibus posuere velit aliquet. Vestibulum id ligula
                  porta felis euismod semper. Vestibulum id ligula.
                </p>
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check" />
                        </span>
                        <span>
                          Aenean quam ornare curabitur blandit consectetur.
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check" />
                        </span>
                        <span>
                          Nullam quis risus eget urna mollis ornare aenean leo.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*/column */}
                  <div className="col-xl-6">
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                      <li>
                        <span>
                          <i className="uil uil-check" />
                        </span>
                        <span>
                          Etiam porta euismod malesuada mollis nisl ornare sem.
                        </span>
                      </li>
                      <li className="mt-3">
                        <span>
                          <i className="uil uil-check" />
                        </span>
                        <span>
                          Vivamus sagittis lacus augue rutrum maecenas.
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <div className="row gx-lg-8 gx-xl-12 gy-8">
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="@@webRoot/assets/img/icons/lineal/telephone-3.svg"
                      alt
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">24/7 Support</h4>
                    <p className="mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="@@webRoot/assets/img/icons/lineal/shield.svg"
                      className="svg-inject icon-svg icon-svg-sm text-primary me-4"
                      alt
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">Secure Payments</h4>
                    <p className="mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="@@webRoot/assets/img/icons/lineal/cloud-computing-3.svg"
                      className="svg-inject icon-svg icon-svg-sm text-primary me-4"
                      alt
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">Daily Updates</h4>
                    <p className="mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="@@webRoot/assets/img/icons/lineal/analytics.svg"
                      className="svg-inject icon-svg icon-svg-sm text-primary me-4"
                      alt
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">Market Research</h4>
                    <p className="mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="@@webRoot/assets/img/icons/lineal/settings.svg"
                      className="svg-inject icon-svg icon-svg-sm text-primary me-4"
                      alt
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">System Integration</h4>
                    <p className="mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
              <div className="col-md-6 col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="@@webRoot/assets/img/icons/lineal/earth.svg"
                      className="svg-inject icon-svg icon-svg-sm text-primary me-4"
                      alt
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">SEO Services</h4>
                    <p className="mb-0">
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <hr className="my-14 my-md-17" />
            <div className="row gy-10 gy-sm-13 gx-lg-8 align-items-center">
              <div className="col-lg-7 order-lg-2">
                <div className="row gx-md-5 gy-5">
                  <div className="col-md-4 offset-md-2 align-self-end">
                    <figure className="rounded">
                      <img src={imgag1} alt />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="col-md-6 align-self-end">
                    <figure className="rounded">
                      <img src={imgag2} alt />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="col-md-6 offset-md-1">
                    <figure className="rounded">
                      <img src={imgag3} alt />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="col-md-4 align-self-start">
                    <figure className="rounded">
                      <img src={imgag4} alt />
                    </figure>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="col-lg-5">
                <h3 className="display-4 mb-7">
                  A few reasons why our valued customers choose us.
                </h3>
                <div
                  className="accordion accordion-wrapper"
                  id="accordionExample"
                >
                  <div className="card plain accordion-item">
                    <div className="card-header" id="headingOne">
                      <button
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {" "}
                        Professional Design{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card plain accordion-item">
                    <div className="card-header" id="headingTwo">
                      <button
                        className="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {" "}
                        Top-Notch Support{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                  <div className="card plain accordion-item">
                    <div className="card-header" id="headingThree">
                      <button
                        className="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        {" "}
                        Header and Slider Options{" "}
                      </button>
                    </div>
                    {/*/.card-header */}
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et. Cum sociis natoque
                          penatibus et magnis dis parturient montes.
                        </p>
                      </div>
                      {/*/.card-body */}
                    </div>
                    {/*/.accordion-collapse */}
                  </div>
                  {/*/.accordion-item */}
                </div>
                {/*/.accordion */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /section */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay"
          style={{ backgroundImage: `url(${bg1})` }}
        >
          <div className="container py-18 text-center">
            <div className="row">
              <div className="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
                <a
                  href="@@webRoot/assets/media/movie.mp4"
                  className="btn btn-circle btn-white btn-play ripple mx-auto mb-5"
                  data-glightbox
                >
                  <i className="icn-caret-right" />
                </a>
                <h2 className="display-4 px-lg-10 px-xl-13 px-xxl-10 text-white">
                  Find out everything you need to know about creating a business
                  process model.
                </h2>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /section */}

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
              <div className="col-lg-4">
                <h3 className="display-6 mb-3 pe-xl-10">
                  We are proud of our creative team
                </h3>
                <p className="lead fs-lg mb-0 pe-xxl-10">
                  Just sit back and relax while we take care of your business
                  needs.
                </p>
              </div>
              {/* /column */}
              <div className="col-lg-8 mt-lg-2">
                <div className="row align-items-center counter-wrapper gy-6 text-center">
                  <div className="col-md-4">
                    <img
                      src="@@webRoot/assets/img/icons/lineal/check.svg"
                      className="svg-inject icon-svg icon-svg-md text-primary mb-3"
                      alt
                    />
                    <h3 className="counter">7518</h3>
                    <p>Completed Projects</p>
                  </div>
                  {/*/column */}
                  <div className="col-md-4">
                    <img
                      src="@@webRoot/assets/img/icons/lineal/user.svg"
                      className="svg-inject icon-svg icon-svg-md text-primary mb-3"
                      alt
                    />
                    <h3 className="counter">3472</h3>
                    <p>Happy Customers</p>
                  </div>
                  {/*/column */}
                  <div className="col-md-4">
                    <img
                      src="@@webRoot/assets/img/icons/lineal/briefcase-2.svg"
                      className="svg-inject icon-svg icon-svg-md text-primary mb-3"
                      alt
                    />
                    <h3 className="counter">2184</h3>
                    <p>Expert Employees</p>
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
            <div className="row grid-view gy-6 gy-xl-0">
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      className="rounded-circle w-15 mb-4"
                      src="@@webRoot/assets/img/avatars/te1.jpg"
                      srcSet="@@webRoot/assets/img/avatars/te1@2x.jpg 2x"
                      alt
                    />
                    <h4 className="mb-1">Coriss Ambady</h4>
                    <div className="meta mb-2">Financial Analyst</div>
                    <p className="mb-2">
                      Fermentum massa justo sit amet risus morbi leo.
                    </p>
                    <nav className="nav social mb-0">
                      <a href="#">
                        <i className="uil uil-twitter" />
                      </a>
                      <a href="#">
                        <i className="uil uil-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="uil uil-dribbble" />
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/*/column */}
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      className="rounded-circle w-15 mb-4"
                      src="@@webRoot/assets/img/avatars/te2.jpg"
                      srcSet="@@webRoot/assets/img/avatars/te2@2x.jpg 2x"
                      alt
                    />
                    <h4 className="mb-1">Cory Zamora</h4>
                    <div className="meta mb-2">Marketing Specialist</div>
                    <p className="mb-2">
                      Fermentum massa justo sit amet risus morbi leo.
                    </p>
                    <nav className="nav social mb-0">
                      <a href="#">
                        <i className="uil uil-twitter" />
                      </a>
                      <a href="#">
                        <i className="uil uil-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="uil uil-dribbble" />
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/*/column */}
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      className="rounded-circle w-15 mb-4"
                      src="@@webRoot/assets/img/avatars/te3.jpg"
                      srcSet="@@webRoot/assets/img/avatars/te3@2x.jpg 2x"
                      alt
                    />
                    <h4 className="mb-1">Nikolas Brooten</h4>
                    <div className="meta mb-2">Sales Manager</div>
                    <p className="mb-2">
                      Fermentum massa justo sit amet risus morbi leo.
                    </p>
                    <nav className="nav social mb-0">
                      <a href="#">
                        <i className="uil uil-twitter" />
                      </a>
                      <a href="#">
                        <i className="uil uil-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="uil uil-dribbble" />
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/*/column */}
              <div className="col-md-6 col-xl-3">
                <div className="card shadow-lg">
                  <div className="card-body">
                    <img
                      className="rounded-circle w-15 mb-4"
                      src="@@webRoot/assets/img/avatars/te4.jpg"
                      srcSet="@@webRoot/assets/img/avatars/te4@2x.jpg 2x"
                      alt
                    />
                    <h4 className="mb-1">Jackie Sanders</h4>
                    <div className="meta mb-2">Investment Planner</div>
                    <p className="mb-2">
                      Fermentum massa justo sit amet risus morbi leo.
                    </p>
                    <nav className="nav social mb-0">
                      <a href="#">
                        <i className="uil uil-twitter" />
                      </a>
                      <a href="#">
                        <i className="uil uil-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="uil uil-dribbble" />
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                  {/*/.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <hr className="mt-15 mt-md-18 mb-14 mb-md-17" />
            <h3 className="display-4 mb-3 text-center">
              What People Say About Us
            </h3>
            <p className="lead fs-lg mb-10 text-center">
              Don't take our word for it. See what customers are saying about
              us.
            </p>
            <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 align-items-center">
              <div className="col-lg-7">
                <div className="row gx-md-5 gy-5">
                  <div className="col-md-6">
                    <figure className="rounded mt-md-10 position-relative">
                      <img
                        src="@@webRoot/assets/img/photos/g5.jpg"
                        srcSet="@@webRoot/assets/img/photos/g5@2x.jpg 2x"
                        alt
                      />
                    </figure>
                  </div>
                  {/*/column */}
                  <div className="col-md-6">
                    <div className="row gx-md-5 gy-5">
                      <div className="col-md-12 order-md-2">
                        <figure className="rounded">
                          <img
                            src="@@webRoot/assets/img/photos/g6.jpg"
                            srcSet="@@webRoot/assets/img/photos/g6@2x.jpg 2x"
                            alt
                          />
                        </figure>
                      </div>
                      {/*/column */}
                      <div className="col-md-10">
                        <div className="card bg-pale-primary text-center">
                          <div className="card-body py-11 counter-wrapper">
                            <h3 className="counter text-nowrap">5000+</h3>
                            <p className="mb-0">Satisfied Customers</p>
                          </div>
                          {/*/.card-body */}
                        </div>
                        {/*/.card */}
                      </div>
                      {/*/column */}
                    </div>
                    {/*/.row */}
                  </div>
                  {/*/column */}
                </div>
                {/*/.row */}
              </div>
              {/*/column */}
              <div className="col-lg-5 mt-5">
                <div
                  className="swiper-container dots-closer mb-6"
                  data-margin={30}
                  data-dots="true"
                >
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top fs-lg text-center">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo consectetur.”
                          </p>
                          <div className="blockquote-details justify-content-center text-center">
                            <div className="info ps-0">
                              <h5 className="mb-1">Coriss Ambady</h5>
                              <p className="mb-0">Financial Analyst</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/*/.swiper-slide */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top fs-lg text-center">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur.”
                          </p>
                          <div className="blockquote-details justify-content-center text-center">
                            <div className="info ps-0">
                              <h5 className="mb-1">Cory Zamora</h5>
                              <p className="mb-0">Marketing Specialist</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/*/.swiper-slide */}
                      <div className="swiper-slide">
                        <blockquote className="icon icon-top fs-lg text-center">
                          <p>
                            “Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Vestibulum ligula porta felis
                            euismod semper. Cras justo odio consectetur.”
                          </p>
                          <div className="blockquote-details justify-content-center text-center">
                            <div className="info ps-0">
                              <h5 className="mb-1">Nikolas Brooten</h5>
                              <p className="mb-0">Sales Manager</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/*/.swiper-slide */}
                    </div>
                    {/*/.swiper-wrapper */}
                  </div>
                  {/*/.swiper */}
                </div>
                {/* /.swiper-container */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <div className="px-lg-5 mb-16 mb-md-22">
              <div className="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
                <div className="col-4 col-md-2">
                  <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                    <img src="@@webRoot/assets/img/brands/c1.png" alt />
                  </figure>
                </div>
                {/*/column */}
                <div className="col-4 col-md-2">
                  <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                    <img src="@@webRoot/assets/img/brands/c2.png" alt />
                  </figure>
                </div>
                {/*/column */}
                <div className="col-4 col-md-2">
                  <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                    <img src="@@webRoot/assets/img/brands/c3.png" alt />
                  </figure>
                </div>
                {/*/column */}
                <div className="col-4 col-md-2">
                  <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                    <img src="@@webRoot/assets/img/brands/c4.png" alt />
                  </figure>
                </div>
                {/*/column */}
                <div className="col-4 col-md-2">
                  <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                    <img src="@@webRoot/assets/img/brands/c5.png" alt />
                  </figure>
                </div>
                {/*/column */}
                <div className="col-4 col-md-2">
                  <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4">
                    <img src="@@webRoot/assets/img/brands/c6.png" alt />
                  </figure>
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
            </div>
            {/* /div */}
          </div>
          {/* /.container */}
        </section>
        {/* /section */}
      </div>
      <footer className="bg-soft-primary">
        <div className="container">
          <div className="card shadow-lg mt-n16 mt-md-n21 mb-15 mb-md-14">
            <div className="row gx-0">
              <div
                className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start d-none d-md-block"
                data-image-src="@@webRoot/assets/img/photos/tm1.jpg"
              ></div>
              {/*/column */}
              <div className="col-lg-6">
                <div className="p-10 p-md-11 p-lg-13">
                  <h2 className="display-4 mb-3">Let’s Talk</h2>
                  <p className="lead fs-lg">
                    Let&apos;s make something great together. We are trusted by
                    over 5000+ clients. Join them by using our services and grow
                    your business.
                  </p>
                  <p>
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                    venenatis vestibulum. Maecenas faucibus mollis interdum.
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                  </p>
                  <a href="#" className="btn btn-primary rounded-pill mt-2">
                    Join Us
                  </a>
                </div>
                {/*/div */}
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.card */}
        </div>
        {/* /.container */}
        <div className="container pb-12 text-center">
          <div className="row mt-n10 mt-lg-0">
            <div className="col-xl-10 mx-auto">
              <div className="row mb-3">
                <div className="col-md-4">
                  <div className="widget">
                    <h4 className="widget-title">Address</h4>
                    <address>
                      Moonshine St. 14/05 <br className="d-none d-md-block" />{" "}
                      Light City, London, UK
                    </address>
                  </div>
                  {/* /.widget */}
                </div>
                {/*/column */}
                <div className="col-md-4">
                  <div className="widget">
                    <h4 className="widget-title">Phone</h4>
                    <p>
                      00 (123) 456 78 90 <br />
                      00 (987) 654 32 10
                    </p>
                  </div>
                  {/* /.widget */}
                </div>
                {/*/column */}
                <div className="col-md-4">
                  <div className="widget">
                    <h4 className="widget-title">E-mail</h4>
                    <p>
                      <a href="mailto:sandbox@email.com" className="link-body">
                        sandbox@email.com
                      </a>{" "}
                      <br className="d-none d-md-block" />
                      <a href="mailto:help@sandbox.com" className="link-body">
                        help@sandbox.com
                      </a>
                    </p>
                  </div>
                  {/* /.widget */}
                </div>
                {/*/column */}
              </div>
              {/*/.row */}
              <p>© 2023 Sandbox. All rights reserved.</p>
              <nav className="nav social justify-content-center">
                <a href="#">
                  <i className="uil uil-twitter" />
                </a>
                <a href="#">
                  <i className="uil uil-facebook-f" />
                </a>
                <a href="#">
                  <i className="uil uil-dribbble" />
                </a>
                <a href="#">
                  <i className="uil uil-instagram" />
                </a>
                <a href="#">
                  <i className="uil uil-youtube" />
                </a>
              </nav>
              {/* /.social */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
      </footer>

      {/* Header End */}

      {/* About Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end img-lider"
                  src={creator}
                  alt="creator"
                />
                <img
                  className="img-animation img-fluid rounded w-50 bg-white cursor"
                  src={albomPro}
                  alt={"albom-pro"}
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                {t("aboutsection.aboutbutton")}
              </p>
              <h1 className="mb-4">{t("herosection.title")}</h1>
              <p>{t("aboutsection.text")}</p>
              <p>
                <i className="far fa-check-circle text-primary me-3" />
                {t("aboutsection.list1")}
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3" />
                {t("aboutsection.list2")}
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3" />
                {t("aboutsection.list3")}
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3" />
                {t("aboutsection.list4")}
              </p>
              <Link
                to={"/about"}
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
              >
                {t("aboutsection.morebutton")}
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* About End */}

      {/* Partners Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              {t("followsection.followbutton")}
            </p>
            <h1>{t("followsection.title")}</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.1s"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://github.com/PRO-UNITY"}
              >
                <img
                  className="img-partner"
                  style={{ width: "100%" }}
                  src="https://pngimg.com/d/github_PNG15.png"
                  alt="prounity-github"
                />
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.3s"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://dribbble.com/prounity"}
              >
                <img
                  className="img-partner"
                  style={{ width: "100%" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png"
                  alt="prounity-dribbble"
                />
              </a>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.5s"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={"https://clutch.co/profile/pro-unity"}
              >
                <img
                  className="img-partner mt-4"
                  style={{ width: "100%" }}
                  src="https://ml.globenewswire.com/Resource/Download/77ae316b-82ad-4147-9189-ee10517a4208"
                  alt={"prounity-clutch"}
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* Partners End */}

      {/* Partners Start */}
      {/* <div className="container-xxl py-5 partners bg-white">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              {t("partners.partnersbutton")}
            </p>
            <h1>{t("partners.title")}</h1>
          </div>
          <div className="row g-4">
            {Partners.map((item, i) => (
              <PartnersCard key={i} img={item} />
            ))}
          </div>
        </div>
      </div> */}
      {/* Partners End */}

      {/* Feature Start */}
      {/* <div className="container-fluid bg-primary overflow-hidden mt-5 px-lg-0">
        <div className="container-xxl feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="p-lg-5 ps-lg-0">
                <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                  {t("featuresection.featurebutton")}
                </p>
                <h1 className="text-white mb-4">{t("featuresection.title")}</h1>
                <p className="text-white mb-4 pb-2 ">
                  {t("featuresection.text")}
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="fa fa-user-md text-primary" />
                      </div>
                      <div className="ms-2">
                        <p className="text-white m-0">
                          {t("featuresection.listmini1")}
                        </p>
                        <h5 className="text-white mb-0">
                          {t("featuresection.listbig1")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="fa fa-check text-primary" />
                      </div>
                      <div className="ms-2">
                        <p className="text-white m-0">
                          {t("featuresection.listmini2")}
                        </p>
                        <h5 className="text-white mb-0">
                          {t("featuresection.listbig2")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="fa fa-comment-medical text-primary" />
                      </div>
                      <div className="ms-2">
                        <p className="text-white m-0">
                          {t("featuresection.listmini3")}
                        </p>
                        <h5 className="text-white text-wrap m-0">
                          {t("featuresection.listbig3")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 50, height: 50 }}
                      >
                        <i className="fa fa-headphones text-primary" />
                      </div>
                      <div className="ms-2">
                        <p className="text-white m-0">
                          {t("featuresection.listmini4")}
                        </p>
                        <h5 className="text-white m-0">
                          {t("featuresection.listbig4")}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={teamwork}
                  style={{ objectFit: "cover" }}
                  alt="team-work"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Feature End */}

      {/* <div className="back">
        <div className="container-xxl pt-3">
          <div className="container pt-3">
            <div className="row w-100 align-items-center pt-3 g-5 body-video">
              <div className="col-lg-6">
                <div>
                  <h1 className="display-4 text-white mb-5">
                    {t("blogSection.title")}
                  </h1>
                </div>

                <p className="fs-4 text-white">{t("blogSection.text")}</p>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <a
                  href="https://www.youtube.com/watch?v=_voQ5MGXX3g"
                  className=" btn-danger btn-youtube   mx-auto mb-4 "
                >
                  <i className="fa-solid fa-play text-light fs-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="extra" />
      </div> */}

      {/* Team Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              {t("teamsection.teambutton")}
            </p>
            <h1>{t("teamsection.title")}</h1>
          </div>
          <div className="row g-4">
            {teamMembers.map((item, i) => (
              <OurTeam key={i} {...item} />
            ))}
          </div>
        </div>
      </div> */}

      {/* Team End */}

      {/* Appointment Start */}
      {/* <div className="container-xxl py-5 contact">
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
                className="text-decoration-none text-dark"
              >
                <div className="bg-light rounded  d-flex align-items-center py-4 px-2 px-md-5 py-md-5 mb-4">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-phone-alt text-primary" />
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
                className="text-decoration-none text-dark"
              >
                <div className="bg-light rounded d-flex align-items-center py-4 px-2 px-md-5 py-md-5">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-envelope-open text-primary" />
                  </div>
                  <div className="ms-2 ms-md-5">
                    <p className="mb-2">{t("appointment.message")}</p>
                    <h5 className="mb-0 ">prounity.uz@gmail.com</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded h-100 d-flex align-items-center p-3 p-md-5">
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
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: 55 }}
                        ref={purposeRef}
                      >
                        <option selected>
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
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
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
      </div> */}
      {/* Appointment End */}
    </Layout>
  );
};

export default Home;
