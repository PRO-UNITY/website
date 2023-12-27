import "./Events.css";
import Layout2 from "../../../Layout/Layout2";
import { useState } from "react";

const filterBtns = [
  { id: 1, name: "онлайн" },
  { id: 2, name: "офлайн" },
  { id: 3, name: "Встреча" },
  { id: 4, name: "Мастер-класс" },
  { id: 5, name: "Презентация проектов" },
];

const Events = () => {
  const [activeBtn, setactiveBtn] = useState(null);
  return (
    <Layout2>
      <div className="evets py-5">
        <div className="container-lg">
          <h1 className="title">Бесплатные мероприятия</h1>
          <div className="filter-btns  mt-4">
            {filterBtns.map((btn) => (
              <button
                className={`btn mt-2 me-2 ${
                  activeBtn === btn.id && "btn-active"
                }`}
                key={btn.id}
                onClick={() => setactiveBtn(btn.id)}
              >
                {btn.name} <i className="fa-solid fa-xmark "></i>
              </button>
            ))}
          </div>
          <div className="filter-cards mt-4">
            <div className="row">
              <div className="col-lg-4">
                <div className="card rounded-4 border-0 py-4 px-3">
                  <div className="row  h-100">
                    <div className="col-md-8 ">
                      <span>ВСТРЕЧА</span>
                      <h5 className="font-primary fw-bold mt-3">
                        Из инженера в разработку - план смены профессии
                      </h5>
                      <p className="text-secondary mt-3">
                        Не забывайте, что каждый шаг в сторону вашей цели - это
                        шаг вперед, даже если это маленький шажок. А Эльбрус
                        Буткемп - это уже огромный шаг на пути к
                      </p>
                      <div className="card-bottom mt-5">
                        <div className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-globe"></i>{" "}
                          <p className="m-0">Онлайн</p>
                        </div>
                        <div className="mt-3 d-flex gap-2">
                          <button className="btn btn-gold">записаться</button>
                          <button className="btn btn-outline-dark border-2">
                            ПОДРОБНЕЕ
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="status px-3 rounded-3 py-1  text-primary font-primary">
                        онлайн
                      </div>
                      <h1 className="mt-2 fs-1">08</h1>
                      <p>января</p>
                      <p>понедельник 19:00 — 20:30 по Мск</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white form-box my-5 py-4">
          <div className="container">
            <h2 className="title">Анонсы событий</h2>
            <p>
              Чтобы не пропустить то, что нужно именно вам, подпишитесь на нашу
              рассылку
            </p>
            <form className="my-3">
              <input type="text" placeholder="Email" />{" "}
              <button className="btn btn-gold ms-md-3 mt-3 mt-md-0">
                Подписаться
              </button>
            </form>
            <span className="">
              Подписываясь, вы принимаете условия соглашения
            </span>
          </div>
        </div>
        <section className="application py-5">
          <div className="container">
            <div className="d-flex  align-items-center flex-column flex-lg-row gap-3 gap-lg-5">
              <h2 className="font-primary title text-center text-lg-left pb-lg-3 m-0">
                Остались вопросы?
              </h2>
              <button className="btn btn-outline-dark border-2">
                Получить консультацию
              </button>
              <button className="btn btn-gold">Посмотреть Программы</button>
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};

export default Events;
