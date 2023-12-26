import Layout2 from "../../../Layout/Layout2";
import "./Contact2.css";
const Contact2 = () => {
  return (
    <Layout2>
      <section className="contact2 py-4">
        <div className="container-lg">
          <h2 className="font-primary title">Контакты</h2>
          <div className="row mt-4">
            <div className="col-lg-6">
              <p>
                Если вы хотите записаться на курс, получить дополнительную
                информацию, познакомиться с нами или посетить наш буткемп —
                звоните/пишите.
              </p>
              <div className="contact-link">
                <ul className="p-0 mt-4">
                  <li>
                    <a href="tel:+998-33-899-50-00">+998 33 899 50 00 </a>
                  </li>
                  <li>
                    <a href="https://t.me/ProUnityuz">
                      Telegram <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com/">
                      Whatsapp <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:prounity.uz@gmail.com">
                      info@elbrusboot.camp{" "}
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
                <img
                  src="https://elbrusboot.camp/static/a442d80af9930674a0baaf0ee1fecc9b/dfad1/msk.webp"
                  alt=""
                />
                <h2 className="card-title font-primary mt-3">
                  Кампус в Москве
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
            </div>
            <div className="col-lg-6 ">
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
            </div>
          </div>
        </div>
      </section>
    </Layout2>
  );
};

export default Contact2;
