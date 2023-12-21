import Logo from "../../assets/home2/logo.webp";
import "./Home2.css";
const navs = [
  { id: 1, name: "  Бесплатные мероприятия" },
  { id: 2, name: "   О буткемпе" },
  { id: 3, name: "  Статьи для новичков" },
  { id: 4, name: "  Контакты" },
  { id: 4, name: "  F.A.Q." },
];
import JscardBg from "../../assets/home2/program-card-js.webp";
import JscardIcon from "../../assets/home2/program-card-js.webp";
const Home2 = () => {
  return (
    <div className="home2 ">
      <div className="">
        {/* Navbar */}
        <nav className="navbar container  navbar-expand-lg p-0  ">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand d-flex align-items-center " href="#">
              <img src={Logo} alt="" width={100} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-capitalize "
                    aria-current="page"
                    href="#"
                  >
                    Программы
                  </a>
                </li>
                {navs.map((nav) => (
                  <li className="nav-item" key={nav.id}>
                    <a className="nav-link text-capitalize" href="#">
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-dark rounded-3 border-2 py-1">
                Войти
              </button>
              <button className="btn  btn-gold  rounded-3 border-2 py-1">
                Начать учиться
              </button>
            </div>
          </div>
        </nav>
        {/* Navbar end */}

        {/* Hero */}
        <main className="hero pt-5 text-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                {" "}
                <h1 className=" display-5 fw-semibold h1">
                  ПОЛУЧИТЕ IT‍-‍ПРОФЕССИЮ И ИЗМЕНИТЕ СВОЮ ЖИЗНЬ
                </h1>
                <div className="py-3 row">
                  <div className="col-lg-6">
                    <p>
                      Узнайте, как стать разработчиком за 3 месяца и найти
                      стабильную высокооплачиваемую работу
                    </p>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
                <div className="hero-bottom mt-4">
                  <h5 className="title">
                    *По версии посетителей портала Хабр в 2023г.
                  </h5>
                  <div className="row gap-2 pe-5">
                    <div className="col-lg-5 px-3">
                      <div className="card border-0 row rounded-4 text-white">
                        <h2 className="m-0 col-4">141k</h2>
                        <p className=" m-0 col-7">
                          Средняя зарплата выпускников
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5 px-3">
                      <div className="card  border-0 row rounded-4 text-white">
                        <h2 className="m-0 col-4">86%</h2>
                        <p className=" m-0 col-7">
                          студентов находят работу за 3 месяца <br />
                          <span>исследование hh.ru</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-bottom btn-gold mt-5 px-4  p-2 rounded-4">
                  Посмотреть программы
                </button>
              </div>
              <div className="col-lg-5"></div>
            </div>
          </div>
        </main>
        {/* Hero end */}

        {/* Course */}
        <section className="course py-5">
          <div className="container">
            <h2 className="title">Программы обучения</h2>
            <div className="row my-4">
              <div className="col-4">
                <div className="card  rounded-4">
                  <div className="content">
                    <div className="head pe-4 d-flex align-items-center justify-content-between ">
                      <h5 className=" h5 p-3 fw-semibold font-primary">
                        Веб-разработчик
                      </h5>
                      <span className="badge text-bg-light fw-normal">
                        с нуля
                      </span>
                    </div>
                  </div>
                  <div className="img-wrapp w-100 h-100">
                    <img src={JscardBg} alt="" className="w-100 h-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Course End*/}
      </div>
    </div>
  );
};

export default Home2;
