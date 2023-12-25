import Layout2 from "../../../Layout/Layout2";
import TeamImg from "../../../assets/home2/team-desktop.webp";
import dodBanner from "../../../assets/home2/dodPreview.webp";

import "./About2.css";

const AboutUs = () => {
  return (
    <Layout2>
      <div className="about2">
        <section>
          <div className="container-lg">
            <h1 className="section-title">О школе</h1>
            <div className="video-card  rounded my-5">
              <img src={dodBanner} alt="" />
              {/* <div className="card-avatar-1">
                <img
                  src="https://elbrusboot.camp/static/351685d1fcd29b0a83a26c5d8445db57/528bd/babayan.webp"
                  alt=""
                  className="w-100 h-100 rounded-circle object-fit-cover"
                />
              </div> */}
              {/* <div className="card-avatar-2">
                <img
                  src="https://elbrusboot.camp/static/351685d1fcd29b0a83a26c5d8445db57/528bd/babayan.webp"
                  alt=""
                  className="w-100 h-100 rounded-circle object-fit-cover"
                />
              </div> */}
              <div className="play-btn-wrapp flex-column align-items-center  ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=_voQ5MGXX3g"
                  className=" btn play-btn"
                >
                  <i className="fa-solid fa-play"></i>
                </a>
                {/* <p className="text-primary font-primary mt-4">
                  ПОСМОТРЕТ ВИДЕО
                </p> */}
              </div>
            </div>
            <div className="row mb-5 py-5">
              <div className="col-lg-6 d-flex">
                <div className="line me-lg-4"></div>
                <p className="ps-lg-5">
                  Эльбрус Буткемп появился в 2018 году благодаря Георгию
                  Бабаяну. Его дедушка был программистом и участвовал в создании
                  микропроцессора Эльбрус — отсюда и название школы. Сам Георгий
                  в 2016 году прошел Dev Bootcamp в Сан-Франциско, один из самых
                  старых буткемпов в Америке. Тогда о подобном формате в России
                  еще не слышали, а в Америке он набирал популярность в сфере
                  IT.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Буткемп давал возможность обучиться за 3-4 месяца тому, на что
                  раньше требовались годы, и, следовательно, освоить новую
                  профессию и найти работу. По возвращении Георгий решил
                  внедрить подобный формат обучения и в России по двум
                  направлениям — JavaScript и Data Science. Первый кампус
                  Эльбрус Буткемп появился в Москве, затем открылся филиал в
                  Санкт-Петербурге, а теперь обучаться можно и онлайн.
                </p>
              </div>
            </div>

            <div className="row ">
              <div className="col-lg-6">
                <img src={TeamImg} alt="" className="w-100" />
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img src={TeamImg} alt="" className="w-100" />
              </div>
              <div className="col-lg-6 my-5 d-flex">
                <div className="line me-4"></div>
                <p className="ms-lg-5">
                  В школе преподают практикующие программисты и разработчики — у
                  каждой группы есть свои менторы и ассистенты, помогающие с
                  любыми вопросами. Одна из ключевых ценностей Эльбрус Буткемп —
                  growth mindset: преподаватели и сотрудники буткемпа постоянно
                  учатся и развиваются, чтобы делиться со студентами самыми
                  актуальными знаниями.
                </p>
              </div>
            </div>
            <div className="statistics">
              <div className="  d-flex justify-content-center justify-content-lg-end  mt-4   flex-wrap gap-5">
                <div className="box">
                  <h3 className="font-primary fw-bold">2052</h3>
                  <p>студентов выпущено за 5 лет</p>
                </div>
                <div className="box">
                  <h3 className="font-primary fw-bold">86%</h3>
                  <p>студентов находят работу за 3 месяца</p>
                </div>

                <div className="box">
                  <h3 className="font-primary fw-bold">5/5</h3>
                  <a href="#" className="text-decoration-none">
                    Рейтинг Яндекса <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="">
                <img className="banner" src={TeamImg} alt="" />
                <div className="row my-5">
                  <div className="col-lg-6 d-flex">
                    <div className="line me-4"></div>
                    <p className="ms-lg-5">
                      Студенты выбирают Эльбрус Буткемп за предсказуемый
                      результат, ведь главная цель школы — трудоустройство
                      выпускников. Так к выпуску у каждого студента есть три
                      проекта для портфолио: индивидуальный, групповой и проект
                      от реального заказчика, а по окончании курса всех ждет
                      серия групповых и индивидуальных сессий с карьерными
                      коучами. Благодаря такому подходу 93% выпускников находят
                      работу в течение трех месяцев сразу после курсов.
                    </p>
                  </div>
                  <div className="col-lg-6 px-lg-5">
                    <p>
                      Эльбрус Буткемп — это сильное поддерживающее коммьюнити,
                      люди в котором продолжают общаться и после выпуска.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="team">
              <h2 className="title text-center text-lg-start text-dark">
                Команда
              </h2>
              <div className="row py-4">
                <div className="col-lg-3">
                  <div className="card border-0">
                    <div className="card-head">
                      <img
                        src="https://elbrusboot.camp/static/351685d1fcd29b0a83a26c5d8445db57/528bd/babayan.webp"
                        alt=""
                        className="w-100"
                      />
                      <div className="card-content ">
                        <p className="name my-2">ГЕОРГИЙ БАБАЯН</p>
                        <p className="occupation">Генеральный директор</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card border-0">
                    <div className="card-head">
                      <img
                        src="https://elbrusboot.camp/static/351685d1fcd29b0a83a26c5d8445db57/528bd/babayan.webp"
                        alt=""
                        className="w-100"
                      />
                      <div className="card-content ">
                        <p className="name my-2">ГЕОРГИЙ БАБАЯН</p>
                        <p className="occupation">Генеральный директор</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card border-0">
                    <div className="card-head">
                      <img
                        src="https://elbrusboot.camp/static/351685d1fcd29b0a83a26c5d8445db57/528bd/babayan.webp"
                        alt=""
                        className="w-100"
                      />
                      <div className="card-content ">
                        <p className="name my-2">ГЕОРГИЙ БАБАЯН</p>
                        <p className="occupation">Генеральный директор</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card border-0">
                    <div className="card-head">
                      <img
                        src="https://elbrusboot.camp/static/351685d1fcd29b0a83a26c5d8445db57/528bd/babayan.webp"
                        alt=""
                        className="w-100"
                      />
                      <div className="card-content ">
                        <p className="name my-2">ГЕОРГИЙ БАБАЯН</p>
                        <p className="occupation">Генеральный директор</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card border-0">
                    <div className="card-head">
                      <img
                        src="https://elbrusboot.camp/static/351685d1fcd29b0a83a26c5d8445db57/528bd/babayan.webp"
                        alt=""
                        className="w-100"
                      />
                      <div className="card-content ">
                        <p className="name my-2">ГЕОРГИЙ БАБАЯН</p>
                        <p className="occupation">Генеральный директор</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="admission-criteria">
              <h2 className="title text-dark">Критерии зачисления</h2>
              <div className="row my-5">
                <div className="col-lg-6 d-flex">
                  <div className="line me-4"></div>
                  <p className="ms-lg-5">
                    Чтобы попасть в Эльбрус буткемп, не нужно иметь опыт в
                    программировании или математический склад ума. Достаточно
                    желания получить новую профессию и быть готовым осваивать
                    большой объем новой информации.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Перед поступлением будущих программистов ждет техническое
                    интервью. Это нужно, чтобы студенты поняли, с чем им
                    предстоит работать в ближайшие месяцы и убедились в
                    серьезности своих намерений. Наши кураторы расскажут, как к
                    нему подготовиться, и пришлют все необходимые материалы,
                    которые можно и нужно использовать для подготовки.
                  </p>
                </div>
              </div>
            </div>
            <div className="qualities my-5">
              <h2 className="font-primary text-dark">
                Какие качества важны <br /> в будущих студентах?
              </h2>
              <div className="row gap-4  gap-lg-0 py-5">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-head">
                      <img
                        src="https://elbrusboot.camp/static/64b49ed7574c9a9c604117e920c98169/b809a/quality-1.webp"
                        alt=""
                      />
                    </div>
                    <div className="card-content pt-3">
                      <p className="card-name font-primary">Мотивация</p>
                      <p className="card-desc text-dark">
                        Вы серьезно настроены получить новую профессию и знаете,
                        для чего вы пришли в буткемп.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-head">
                      <img
                        src="https://elbrusboot.camp/static/64b49ed7574c9a9c604117e920c98169/b809a/quality-1.webp"
                        alt=""
                      />
                    </div>
                    <div className="card-content pt-3">
                      <p className="card-name font-primary">Мотивация</p>
                      <p className="card-desc text-dark">
                        Вы серьезно настроены получить новую профессию и знаете,
                        для чего вы пришли в буткемп.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-head">
                      <img
                        src="https://elbrusboot.camp/static/64b49ed7574c9a9c604117e920c98169/b809a/quality-1.webp"
                        alt=""
                      />
                    </div>
                    <div className="card-content pt-3">
                      <p className="card-name font-primary">Мотивация</p>
                      <p className="card-desc text-dark">
                        Вы серьезно настроены получить новую профессию и знаете,
                        для чего вы пришли в буткемп.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h2 className="title text-dark mb-5">Карьера</h2>
              <div className="banner">
                <img
                  src="https://elbrusboot.camp/static/c96dac2f3168275c372238e862f9cd9f/ea4a4/career-desktop.webp"
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="row py-5">
                <div className="col-lg-6 d-flex">
                  <div className="line me-4"></div>
                  <p className="ms-lg-5">
                    Карьерные коучи Эльбрус Буткемп помогают составить сильное
                    резюме, прокачать софт-скиллы и научиться проходить
                    собеседования, чтобы получить оффер мечты.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Наши выпускники работают в таких крупных компаниях, как
                    Ozon, Финам, МТС, VK и Сбер.
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column flex-lg-row   gap-4 pb-5">
                <button className="btn btn-gold fw-bold fs-6 px-md-5 py-3 py-md-3 rounded-4">
                  О трудоустройстве выпускников
                </button>
                <button className="btn btn-outline-dark fs-6 px-md-5 py-2 py-md-3 rounded-4 border-2 ">
                  Посмотреть Программы
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};

export default AboutUs;
