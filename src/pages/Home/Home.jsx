import creator from "../../assets/creater.jpg";
import albomPro from "../../assets/albompro.jpg";
import teamwork from "../../assets/teamwork.jpg";
import { HomeSlider, OurTeam, PartnersCard } from "../../components";
import { Partners, teamMembers } from "../../constants";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Header Start */}
      <section className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1
              style={{ fontWeight: "600" }}
              className="display-4 text-white mb-5"
            >
              {t("herosection.title")}
            </h1>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    10
                  </h2>
                  <p className="text-light mb-0">
                    {t("herosection.developers")}
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    100+
                  </h2>
                  <p className="text-light mb-0">{t("herosection.students")}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    10+
                  </h2>
                  <p className="text-light mb-0">{t("herosection.projects")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel">
              <HomeSlider />
            </div>
          </div>
        </div>
      </section>
      {/* Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end img-lider"
                  src={creator}
                  alt
                />
                <img
                  className="img-animation img-fluid rounded w-50 bg-white cursor"
                  src={albomPro}
                  alt
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
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href>
                {t("aboutsection.morebutton")}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Partners Start */}
      <div className="container-xxl py-5">
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
              <a href>
                <img
                  className="img-partner"
                  style={{ width: "100%" }}
                  src="https://pngimg.com/d/github_PNG15.png"
                  alt
                />
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.3s"
            >
              <a href>
                <img
                  className="img-partner"
                  style={{ width: "100%" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png"
                  alt
                />
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp cursor p-3"
              data-wow-delay="0.5s"
            >
              <img
                className="img-partner mt-4"
                style={{ width: "100%" }}
                src="https://ml.globenewswire.com/Resource/Download/77ae316b-82ad-4147-9189-ee10517a4208"
                alt
              />
            </div>
          </div>
        </div>
      </div>
      {/* Partners End */}

      {/* Partners Start */}
      <div className="container-xxl py-5 partners bg-white">
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
      </div>
      {/* Partners End */}

      {/* Feature Start */}
      <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
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
                        <p className="text-white mb-2">
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
                        <p className="text-white mb-2">
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
                        <p className="text-white mb-2">
                          {t("featuresection.listmini3")}
                        </p>
                        <h5 className="text-white text-wrap mb-0">
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
                        <p className="text-white mb-2">
                          {t("featuresection.listmini4")}
                        </p>
                        <h5 className="text-white mb-0">
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
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      <div className="back">
        <div className="container-xxl pt-3">
          <div className="container pt-3">
            <div className="row w-100 align-items-center pt-3 g-5 body-video">
              <div className="col-lg-6">
                <div>
                  <h1 className="display-4 text-white mb-5">
                    Watch Our blogs here
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
      </div>

      {/* Team Start */}
      <div className="container-xxl py-5">
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
      </div>
      {/* Team End */}

      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                {t("appointment.appointmentbutton")}
              </p>
              <h1 className="mb-4"> {t("appointment.title")}</h1>
              <p className="mb-4">{t("appointment.text")}</p>
              <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: 55, height: 55 }}
                >
                  <i className="fa fa-phone-alt text-primary" />
                </div>
                <div className="ms-4">
                  <p className="mb-2">{t("appointment.call")}</p>
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
                  <p className="mb-2">{t("appointment.message")}</p>
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
                        placeholder={t("appointment.inputplaceholdername")}
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder={t("appointment.inputplaceholderemail")}
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder={t("appointment.inputplaceholdermobile")}
                        style={{ height: 55 }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: 55 }}
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
                        defaultValue={""}
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
      </div>
      {/* Appointment End */}
    </>
  );
};

export default Home;
