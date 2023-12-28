import Layout2 from "../../../Layout/Layout2";
import "./Contact2.css";
import coworking from "../../../assets/koworking.jpg";
import { useEffect } from "react";
const Contact2 = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <section className="contact2 py-4">
        <div className="container-lg">
          <h2 className="font-primary title">Contacts</h2>
          <div className="row mt-4">
            <div className="col-lg-6">
              <p>
                If you would like to get in touch, get more information, get to
                know us or visit the office, please call/write.
              </p>
              <div className="contact-link">
                <ul className="p-0 mt-4">
                  <li>
                    <a href="tel:+998-33-899-50-00">+998 33 899 50 00 </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/ProUnityuz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Telegram <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.whatsapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Whatsapp <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:prounity.uz@gmail.com">
                      prounity.uz@gmail.com{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5 gap-5 gap-lg-0 ">
            <div className="col-lg-6 ">
              <div className="card row border-0">
                <img src={coworking} alt="" />
                <div className=" mt-3">
                  <h4 className="font-primary">
                    Islom Karimov 1 Street, Bukhara, Uzbekistan
                  </h4>
                </div>
                <div className="col-12 mt-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://maps.app.goo.gl/odKWvwVkG1aYhzy26"
                  >
                    View on map <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className="map-box pe-lg-5 mt-4 rounded-3">
                    <div
                      className="rounded-4"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d766.6183900732728!2d64.430443!3d39.7739267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500741f58f7703%3A0x9e4e35c6256f9fe!2sPro%20Unity!5e0!3m2!1suz!2s!4v1703667137372!5m2!1suz!2s"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="w-100 h-100"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 ">
              <div className="card row border-0">
                <img
                  src="https://elbrusboot.camp/static/a442d80af9930674a0baaf0ee1fecc9b/dfad1/msk.webp"
                  alt=""
                />
                <h2 className="card-title font-primary mt-3">
                  Кампус в Санкт-Петербурге
                </h2>
                <div className="col-lg-6">
                  <p>ул.Орджоникидзе, д. 11 стр. 10 (м. Ленинский проспект)</p>
                </div>
                <div className="col-12 mt-4">
                  <a href="#">
                    Посмотреть на карте{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className="map-box pe-lg-5 mt-4 rounded-3">
                    <div
                      className="rounded-4"
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <a
                        href="https://yandex.uz/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                        style={{
                          color: "#eee",
                          fontSize: 12,
                          position: "absolute",
                          top: 0,
                        }}
                      />
                      <a
                        href="https://yandex.uz/maps/213/moscow/?from=mapframe&ll=37.594477%2C55.706104&mode=routes&rtext=&rtt=auto&source=mapframe&um=constructor%3A6afbef5ed5bffac961b0a815bd82d46540beea3d267025cfdeec776b808895ab&utm_medium=mapframe&utm_source=maps&z=16"
                        style={{
                          color: "#eee",
                          fontSize: 12,
                          position: "absolute",
                          top: 14,
                        }}
                      >
                        Yandex&nbsp;Xaritalar – transport, navigatsiya, joylarni
                        qidirish
                      </a>
                      <iframe
                        src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=37.594477%2C55.706104&mode=routes&rtext=&rtt=auto&source=mapframe&um=constructor%3A6afbef5ed5bffac961b0a815bd82d46540beea3d267025cfdeec776b808895ab&utm_source=mapframe&z=16"
                        frameBorder={1}
                        allowFullScreen="true"
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout2>
  );
};

export default Contact2;
