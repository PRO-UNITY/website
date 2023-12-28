import "./Events.css";
import Layout2 from "../../../Layout/Layout2";
import { useEffect, useState } from "react";
import ApplicationModal from "../../../components/Application-modal/Application-modal";
import { Link } from "react-router-dom";

const filterBtns = [
  { id: 1, name: "online" },
  { id: 2, name: "offline" },
  { id: 3, name: "Meeting" },
  { id: 4, name: "Masterclass" },
  { id: 5, name: "Project Presentation" },
];

const Events = () => {
  const [activeBtn, setactiveBtn] = useState(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <div className="evets py-5">
        <div className="container-lg">
          <h1 className="title">Free Events</h1>
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
                      <span>MEETING</span>
                      <h5 className="font-primary fw-bold mt-3">
                        From Engineer to Developer - Career Change Plan
                      </h5>
                      <p className="text-secondary mt-3">
                        Remember that every step towards your goal is a step
                        forward, even if it&apos;s a small step. And Elbrus
                        Bootcamp is already a huge step towards it.
                      </p>
                      <div className="card-bottom mt-5">
                        <div className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-globe"></i>{" "}
                          <p className="m-0">Online</p>
                        </div>
                        <div className="mt-3 d-flex gap-2">
                          <ApplicationModal btn={"Sign Up"} />
                          <button className="btn btn-outline-dark border-2">
                            DETAILS
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mt-3">
                      <div className="status px-3 rounded-3 py-1  text-primary font-primary">
                        online
                      </div>
                      <h1 className="mt-2 fs-1">08</h1>
                      <p>January</p>
                      <p>Monday 19:00 — 20:30 MSK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white form-box my-5 py-4">
          <div className="container">
            <h2 className="title">Event Announcements</h2>
            <p>
              To not miss what&apos;s right for you, subscribe to our
              newsletter.
            </p>
            <form className="my-3">
              <input type="text" placeholder="Email" />{" "}
              <button className="btn btn-gold ms-md-3 mt-3 mt-md-0">
                Subscribe
              </button>
            </form>
            <span className="">
              By subscribing, you agree to the terms of the agreement.
            </span>
          </div>
        </div>
        <section className="application py-5">
          <div className="container">
            <div className="d-flex  align-items-center flex-column flex-lg-row gap-3 gap-lg-5">
              <h2 className="font-primary title text-center text-lg-left pb-lg-3 m-0">
                Still have questions?
              </h2>
              <Link
                to={"/home2/services"}
                className="btn btn-outline-dark border-2"
              >
                View Programs
              </Link>
              <ApplicationModal btn={"Get Consultation"} />
            </div>
          </div>
        </section>
      </div>
    </Layout2>
  );
};

export default Events;
