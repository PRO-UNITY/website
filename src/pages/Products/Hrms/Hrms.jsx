import "./Hrms.css";
import aplleLogo from "../../../assets/Apple-Logo.png";
import playStoreLogo from "../../../assets/play-store.webp";

const Hrms = () => {
  return (
    <div className="hrms">
      <section className="hrms-hero container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 " data-wow-delay="0.1s">
            <h1
              style={{ fontWeight: "600" }}
              className="display-2 text-white mb-5 "
            >
              Book Movie Ticket <br />
              From Your Home
            </h1>
            <p className="description text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem vero assumenda officia, ipsa dignissimos, suscipit
              minus molestias aliquid velit illo sequi voluptate cupiditate
              repellendus. Dolorum, ipsam maiores est quibusdam consequatur
              ratione omnis adipisci ea quis soluta possimus sapiente dolor
              voluptatum.
            </p>
            <a className="download-btn btn me-3 rounded-pill py-3 px-5 mt-3">
              Download for
              <img src={aplleLogo} alt="" />
            </a>
            <a className="download-btn btn  rounded-pill py-3 px-5 mt-3">
              Download for
              <img src={playStoreLogo} alt="" />
            </a>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="hero_img  d-flex justify-content-center">
              <img
                src="https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltab2d565224fbb987/6319db02937b9657b5f2b803/Carousel_iPhone14_Blue_Placement01-PreOrder.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="hrms-about container-lg  p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="img-box">
              <img
                src="https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltab2d565224fbb987/6319db02937b9657b5f2b803/Carousel_iPhone14_Blue_Placement01-PreOrder.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h3 style={{ fontWeight: "600" }} className=" mb-3">
              We Are The Most Effecient Software Developement Company Having teh
              Methodologies
            </h3>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem vero assumenda officia, ipsa dignissimos, suscipit
              minus molestias aliquid velit illo sequi voluptate cupiditate
              repellendus.
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem vero assumenda officia, ipsa dignissimos, suscipit
              minus molestias aliquid velit illo sequi voluptate cupiditate
              repellendus.
            </p>
            <a
              to={"/about"}
              className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3"
            >
              Read more
            </a>
          </div>
        </div>
      </section>
      <section className="hrms-about container-lg  p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h3 style={{ fontWeight: "600" }} className=" mb-3">
              We Are The Most Effecient Software Developement Company Having teh
              Methodologies
            </h3>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem vero assumenda officia, ipsa dignissimos, suscipit
              minus molestias aliquid velit illo sequi voluptate cupiditate
              repellendus.
            </p>
            <a className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3">
              Read more
            </a>
          </div>
          <div className="col-lg-6 " data-wow-delay="0.5s">
            <div className="img-box">
              <img
                src="https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltab2d565224fbb987/6319db02937b9657b5f2b803/Carousel_iPhone14_Blue_Placement01-PreOrder.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className=" hrms-archive container-fluid bg-primary servces-detail pt-5">
        <div className="head text-center text-white">
          <h5 className="subtitle">What we have</h5>
          <h2>Archived</h2>
        </div>
        <div className="archive-card">
          <div className="row bg-white rounded h-100 p-5">
            <div className="col-md-4 d-flex align-items-center justify-content-center flex-column">
              <h1>1M</h1>
              <h5>Downloads</h5>
            </div>
            <div className="col-md-4 card-item  d-flex align-items-center justify-content-center flex-column">
              <h1>30K</h1>
              <h5>Positive Reviews</h5>
            </div>
            <div className="col-md-4  d-flex align-items-center justify-content-center flex-column">
              <h1>4.8/5</h1>
              <h5>Rating</h5>
            </div>
          </div>
        </div>
      </div>
      <section className="feature container mt-5 pt-5">
        <div className="head text-center text-dark">
          <h5 className="subtitle">Advanced Features</h5>
          <h1>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nemo
            voluptatum ipsa <br /> eaque quibusdam aspernatur
          </h1>
        </div>
        <div className="cards d-flex align-items-center justify-content-center flex-column ">
          <div className="card card-top p-4 ">
            <div className="card-head d-flex align-items-center justify-content-center">
              <div
                className="d-inline-flex  align-items-center justify-content-center bg-light rounded-circle mb-4"
                style={{ width: 100, height: 100 }}
              >
                <i className="fa-solid fa-computer fs-2 text-primary" />
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">
                Expand Your reach To Desired Tickets Precise & Quickly
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </p>
            </div>
          </div>

          <div className=" card-bottom  d-md-flex justify-content-center gap-4">
            <div className="card p-4 border-0 my-2">
              <div className="card-head">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa-solid fa-computer fs-2 text-primary" />
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">
                  Expand Your reach To Desired Tickets Precise & Quickly
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>

            <div className="card p-4 border-0 my-2">
              <div className="card-head d-flex justify-content-lg-end">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa-solid fa-computer fs-2 text-primary" />
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">
                  Expand Your reach To Desired Tickets Precise & Quickly
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feedback */}
      <section className="feedback container-fluid bg-primary servces-detail my-5 pt-5">
        <div className="head text-center text-white">
          <h5 className="subtitle">What we have</h5>
          <h2>Feedback</h2>
        </div>
        <div className="feedback-cards   gap-4  container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-head p-4">
                  <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi sit excepturi, vel saepe quae veniam aperiam
                    exercitationem eligendi voluptas atque
                  </i>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-auto">
                      <img
                        className="profile-image"
                        src="https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=-twL1NKKad6S_EPrGSniewjh6776A0Ju27ExMh7v_kI="
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <h5 className="name">Logan Wolf</h5>
                      <p className="profession">User Experiens Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-head p-4">
                  <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi sit excepturi, vel saepe quae veniam aperiam
                    exercitationem eligendi voluptas atque
                  </i>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-auto">
                      <img
                        className="profile-image"
                        src="https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=-twL1NKKad6S_EPrGSniewjh6776A0Ju27ExMh7v_kI="
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <h5 className="name">Logan Wolf</h5>
                      <p className="profession">User Experiens Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-head p-4">
                  <i>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi sit excepturi, vel saepe quae veniam aperiam
                    exercitationem eligendi voluptas atque
                  </i>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-auto">
                      <img
                        className="profile-image"
                        src="https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=-twL1NKKad6S_EPrGSniewjh6776A0Ju27ExMh7v_kI="
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <h5 className="name">Logan Wolf</h5>
                      <p className="profession">User Experiens Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing py-5">
        <div className="head text-center">
          <h5 className="subtitle">Pricing</h5>
          <h2>We Have Better Pricing Plan</h2>
        </div>
        <div className="pricing-cards container d-lg-flex align-items-center justify-content-center gap-3">
          <div className="card my-3 d-flex w-100 text-center p-4">
            <h2>Personal</h2>
            <div className="price-box d-inline-flex align-items-center justify-content-center bg-light rounded-circle my-4">
              <h1>$15</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet <br />
              consectetur adipisicing elit. Molestiae ea, <br /> molestias natus
              alias error magni
            </p>
            <div className="">
              <a className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3">
                Start Now
              </a>
            </div>
          </div>
          <div className="card my-3 w-100 text-center p-4">
            <h2>Standart</h2>
            <div className="price-box d-inline-flex align-items-center justify-content-center bg-light rounded-circle my-4">
              <h1>$25</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet <br />
              consectetur adipisicing elit. Molestiae ea, <br /> molestias natus
              alias error magni
            </p>
            <div>
              <a className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3">
                Start Now
              </a>
            </div>
          </div>
          <div className="card my-3 w-100 text-center p-4">
            <h2>Bussiness</h2>
            <div className="price-box d-inline-flex align-items-center justify-content-center bg-light rounded-circle my-4">
              <h1>$35</h1>
            </div>
            <p>
              Lorem ipsum dolor, sit amet <br />
              consectetur adipisicing elit. Molestiae ea, <br /> molestias natus
              alias error magni
            </p>
            <div>
              <a className=" btn btn-primary me-3 rounded-pill py-2 px-4 mt-3">
                Start Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="get-app my-5">
        <div className="img-box d-flex align-items-center justify-content-center">
          <img
            src="https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltab2d565224fbb987/6319db02937b9657b5f2b803/Carousel_iPhone14_Blue_Placement01-PreOrder.png"
            alt=""
          />
          <img
            src="https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltab2d565224fbb987/6319db02937b9657b5f2b803/Carousel_iPhone14_Blue_Placement01-PreOrder.png"
            alt=""
          />
          <img
            src="https://static.skyassets.com/contentstack/assets/blt143e20b03d72047e/bltab2d565224fbb987/6319db02937b9657b5f2b803/Carousel_iPhone14_Blue_Placement01-PreOrder.png"
            alt=""
          />
        </div>
        <div className="container bg-primary rounded-4  d-flex align-items-center justify-content-center">
          <div className="head text-center text-white">
            <h5 className="subtitle">Pricing</h5>
            <h2>Get The App</h2>
            <a className="download-btn btn me-3 rounded-pill py-3 px-5 mt-3">
              Download for
              <img src={aplleLogo} alt="logo" />
            </a>
            <a className="download-btn btn  rounded-pill py-3 px-5 mt-3">
              Download for
              <img src={playStoreLogo} alt="logo" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hrms;
