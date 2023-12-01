import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="container-xxl py-5">
      <div className="container ">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            {t("servicesection.subtitle")}
          </p>
          <h1>{t("servicesection.title")}</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa-solid fa-computer fs-4 text-primary" />
              </div>
              <h4 className="mb-3">{t("servicesection.cardservice1.title")}</h4>
              <p className="mb-4">
                {t("servicesection.cardservice1.Description")}
              </p>
              <a className="btn bg-light" href>
                <i className="fa fa-plus text-primary me-3" />
                {t("servicesection.servicebutton")}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa-solid fa-school text-primary fs-4" />
              </div>
              <h4 className="mb-3">{t("servicesection.cardservice2.title")}</h4>
              <p className="mb-4">
                {t("servicesection.cardservice2.Description")}
              </p>
              <a className="btn bg-light" href>
                <i className="fa fa-plus text-primary me-3" />
                {t("servicesection.servicebutton")}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa-solid fa-diagram-successor text-primary fs-4" />
              </div>
              <h4 className="mb-3">{t("servicesection.cardservice3.title")}</h4>
              <p className="mb-4">
                {t("servicesection.cardservice3.Description")}
              </p>
              <a className="btn bg-light" href>
                <i className="fa fa-plus text-primary me-3" />
                {t("servicesection.servicebutton")}
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa-solid fa-diagram-successor text-primary fs-4" />
              </div>
              <h4 className="mb-3">{t("servicesection.cardservice5.title")}</h4>
              <p className="mb-4">
                {t("servicesection.cardservice4.Description")}
              </p>
              <a className="btn bg-light" href>
                <i className="fa fa-plus text-primary me-3" />
                {t("servicesection.servicebutton")}
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa-solid fa-briefcase text-primary fs-4" />
              </div>
              <h4 className="mb-3">Coworking</h4>
              <p className="mb-4">
                Biz UI va frontend ishi uchun muhim komponentlarni o'z ichiga
                olgan o'z ochiq manba asosimizni taklif qilishdan faxrlanamiz.
                Ushbu ramka innovatsiyalarga bo'lgan sadoqatimiz va ishlab
                chiquvchilar hamjamiyatidagi hamkorlik natijasidir
              </p>
              <a className="btn bg-light" href>
                <i className="fa fa-plus text-primary me-3" />
                Ko'proq
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-white rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa-brands fa-sourcetree text-primary fs-4" />
              </div>
              <h4 className="mb-3">Open Source</h4>
              <p className="mb-4">
                Biz UI va frontend ishi uchun muhim komponentlarni o'z ichiga
                olgan o'z ochiq manba asosimizni taklif qilishdan faxrlanamiz.
                Ushbu ramka innovatsiyalarga bo'lgan sadoqatimiz va ishlab
                chiquvchilar hamjamiyatidagi hamkorlik natijasidir
              </p>
              <a className="btn bg-light" href>
                <i className="fa fa-plus text-primary me-3" />
                Ko'proq
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-white rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa-solid fa-people-group text-primary fs-4" />
              </div>
              <h4 className="mb-3">Pro Community</h4>
              <p className="mb-4">
                Biz UI va frontend ishi uchun muhim komponentlarni o'z ichiga
                olgan o'z ochiq manba asosimizni taklif qilishdan faxrlanamiz.
                Ushbu ramka innovatsiyalarga bo'lgan sadoqatimiz va ishlab
                chiquvchilar hamjamiyatidagi hamkorlik natijasidir
              </p>
              <a className="btn bg-light" href>
                <i className="fa fa-plus text-primary me-3" />
                Ko'proq
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
