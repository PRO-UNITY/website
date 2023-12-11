import teamwork from "../../assets/teamwork.jpg";
import { gsap } from "gsap";

const ZoomEffect = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };
  return (
    <main>
      <div className="grid grid--large">
        <div className="grid__cell grid__cell-c4-r2 grid__cell--padded">
          <div className="frame">
            <h1 className="frame__title oh">
              <span className="oh__inner">Grid Zoom Effect</span>
            </h1>
            <nav className="frame__links">
              <a href className="oh">
                <span className="oh__inner">Article</span>
              </a>
              <a
                href="https://tympanus.net/Development/ParanoiaSlideshow/"
                className="oh"
              >
                <span className="oh__inner">Previous demo</span>
              </a>
              <a href="https://github.com/codrops/GridZoom/" className="oh">
                <span className="oh__inner">GitHub</span>
              </a>
            </nav>
          </div>
        </div>
        <div className="grid__cell grid__cell-c2-r2 grid__cell--padded">
          <a href="https://twitter.com/codrops" className="oh">
            <span className="oh__inner">@codrops</span>
          </a>
        </div>
        <div
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="grid__cell grid__cell-c1-r1"
        >
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: `url(${teamwork})` }}
              data-item="item-1"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c2-r1">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: `url(${teamwork})` }}
              data-item="item-2"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c3-r1">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: `url(${teamwork})` }}
              data-item="item-3"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c1-r2">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: "url(img/4.jpg)" }}
              data-item="item-4"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c3-r2">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: "url(img/5.jpg)" }}
              data-item="item-5"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c2-r3">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: "url(img/6.jpg)" }}
              data-item="item-6"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c4-r3">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: "url(img/7.jpg)" }}
              data-item="item-7"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c1-r4">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: "url(img/8.jpg)" }}
              data-item="item-8"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c3-r4">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: "url(img/9.jpg)" }}
              data-item="item-9"
            />
          </div>
        </div>
        <div className="grid__cell grid__cell-c3-r5">
          <div className="grid__cell-img">
            <div
              className="grid__cell-img-inner"
              style={{ backgroundImage: "url(img/10.jpg)" }}
              data-item="item-10"
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content__item" id="item-1">
          <span className="content__item-number oh">
            <span className="oh__inner">01</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Masses</span>
          </h2>
          <p className="content__item-text">
            The instruments by which public opinion is organized and focused may
            be misused. But such organization and focusing are necessary to
            orderly life.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/11.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/12.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-2">
          <span className="content__item-number oh">
            <span className="oh__inner">02</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Invisible</span>
          </h2>
          <p className="content__item-text">
            As civilization has become more complex, and as the need for
            invisible government has been increas ingly demonstrated, the
            technical means have been invented and developed by which opinion
            may be regimented.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/13.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/14.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-3">
          <span className="content__item-number oh">
            <span className="oh__inner">03</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Expense</span>
          </h2>
          <p className="content__item-text">
            The invisible government tends to be concentrated in the hands of
            the few because of the expense of manipulating the social machinery
            which controls the opinions and habits of the masses.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/15.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/16.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-4">
          <span className="content__item-number oh">
            <span className="oh__inner">04</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Mechanism</span>
          </h2>
          <p className="content__item-text">
            No matter how sophisticated, how cynical the public may become about
            publicity methods, it must respond to the basic appeals, because it
            will always need food, crave amusement, long for beauty, respond to
            leadership.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/17.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/18.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-5">
          <span className="content__item-number oh">
            <span className="oh__inner">05</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Millions</span>
          </h2>
          <p className="content__item-text">
            This practice of creating circumstances and of creating pictures in
            the minds of millions of persons is very common.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/19.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/20.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-6">
          <span className="content__item-number oh">
            <span className="oh__inner">06</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Continuous</span>
          </h2>
          <p className="content__item-text">
            The important thing is that it is universal and continuous; and in
            its sum total it is regimenting the public mind every bit as much as
            an army regiments the bodies of its soldiers.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/21.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/22.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-7">
          <span className="content__item-number oh">
            <span className="oh__inner">07</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Irresistible</span>
          </h2>
          <p className="content__item-text">
            When regimented, a group at times offers an irresistible pressure
            before which legislators, editors, and teachers are helpless.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/29.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/30.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-8">
          <span className="content__item-number oh">
            <span className="oh__inner">08</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Pressure</span>
          </h2>
          <p className="content__item-text">
            A desire for a specific reform, however widespread, cannot be
            translated into action until it is made articulate, and until it has
            exerted sufficient pressure upon the proper law-making bodies.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/23.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/24.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-9">
          <span className="content__item-number oh">
            <span className="oh__inner">09</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Interests</span>
          </h2>
          <p className="content__item-text">
            In the active proselytizing minorities in whom selfish interests and
            public interests coincide lie the progress and development of
            America.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/25.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/26.jpg)" }}
            />
          </nav>
        </div>
        <div className="content__item" id="item-10">
          <span className="content__item-number oh">
            <span className="oh__inner">10</span>
          </span>
          <h2 className="content__item-heading oh">
            <span className="oh__inner">Think</span>
          </h2>
          <p className="content__item-text">
            Small groups of persons can, and do, make the rest of us think what
            they please about a given subject.
          </p>
          <a className="content__item-link oh">
            <span className="oh__inner">View more</span>
          </a>
          <nav className="slide-nav">
            <div
              className="slide-nav__img slide-nav__img--prev"
              style={{ backgroundImage: "url(img/27.jpg)" }}
            />
            <div
              className="slide-nav__img slide-nav__img--next"
              style={{ backgroundImage: "url(img/28.jpg)" }}
            />
          </nav>
        </div>
        <button className="back">
          <svg viewBox="0 0 50 9" width="100%">
            <path d="M0 4.5l5-3M0 4.5l5 3M50 4.5h-77" />
          </svg>
        </button>
        <nav className="grid grid--mini">
          <div className="grid__cell grid__cell-c1-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/1.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/2.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c4-r1">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/3.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c1-r2">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/4.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r2">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/5.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c2-r3">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/6.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c4-r3">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/7.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c1-r4">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/8.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r4">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/9.jpg)" }}
              />
            </div>
          </div>
          <div className="grid__cell grid__cell-c3-r5">
            <div className="grid__cell-img">
              <div
                className="grid__cell-img-inner"
                style={{ backgroundImage: "url(img/10.jpg)" }}
              />
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default ZoomEffect;
